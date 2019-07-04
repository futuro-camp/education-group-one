const link = "http://192.168.1.100:3000";
var modal = $('.modal');
let data,
    startPoint,
    divValue;
let pressed = true;

$("#svg").on("click", function() {
    if(pressed)
    {
        pressed = false;
        $(this).html("Remove");
        GetData();
    }
    else
    {
        pressed = true;
        $(this).html("Graph");
        $("svg").remove();
    }
});

function GetData() {
    axios.get("http://192.168.1.100:3000/api/chart")
    .then(function(response) {
        data = response.data;
    })
    .catch(function(error) {
        ShowModal(error);
    }).then(Draw).then(function() {
        $("circle").on("click", function() {
            let x = Math.round((parseInt($(this).css("cx")) - startPoint[0]) * divValue[0]);
            let y = Math.round(-(parseInt($(this).css("cy")) - startPoint[1]) * divValue[1]);
            ShowModal(`x: ${x}; y: ${y}.`);
        });
    });
}

function FindX(value) {
    return startPoint[0] + value / divValue[0];
}

function FindY(value) {
    return startPoint[1] - value / divValue[1];
}

function Draw() {
    let padding = 80;
    let width = 1000, height = 800;
    let maxX = Math.max(...data.map(x => x[0]));
    maxX = maxX > 0 ? maxX : 0;
    let minX = Math.min(...data.map(x => x[0]));
    minX = minX < 0 ? minX : 0;
    let maxY = Math.max(...data.map(x => x[1]));
    maxY = maxY > 0 ? maxY : 0;
    let minY = Math.min(...data.map(x => x[1]));
    minY = minY < 0 ? minY : 0;
    let sizeX = (maxX + Math.abs(minX));
    let sizeY = (maxY + Math.abs(minY));
    startPoint = [width - padding/2 - ((width - padding)/sizeX)*Math.abs(maxX), height - padding/2 - ((height - padding)/sizeY)*Math.abs(minY)];
    divValue = [sizeX/(width - padding), sizeY/(height - padding)];

    var svg = d3.select("body")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

    var xscale = d3
                .scaleLinear()
                .domain([minX, maxX])
                .range([0, width - padding]);

    var yscale = d3
                .scaleLinear()
                .domain([minY, maxY])
                .range([height - padding, 0]);

    var x_axis = d3
                .axisBottom()
                .scale(xscale);

    var y_axis = d3
                .axisLeft()
                .scale(yscale);

    svg.append("g")
       .attr("transform", `translate(${width - padding/2 - ((width - padding)/sizeX)*Math.abs(maxX)}, ${padding/2})`)
       .call(y_axis);

    svg.append("g")
        .attr("transform", `translate(${padding/2}, ${height - padding/2 - ((height - padding)/sizeY)*Math.abs(minY)})`)
        .call(x_axis);

    for(let i = 0; i < data.length; )
    {
        let [x1, y1] = data[i];
        svg.append("svg:circle")
            .attr("class", "nodes")
            .attr("cx", FindX(x1))
            .attr("cy", FindY(y1))
            .attr("r", "5px")
            .attr("fill", "black");
        if(i + 1 != data.length)
        {
            let [x2, y2] = data[i+1];

            svg.append("line")
            .attr("x1", FindX(x1))
            .attr("y1", FindY(y1))
            .attr("x2", FindX(x2))
            .attr("y2", FindY(y2))
            .style("stroke", "black");
        }
        i++;
    }
}

function ShowModal(msg) {
    $('.modal-text').html(msg);
    modal.css('display', 'block');
}

function Get() {
    axios.get(link + "/api/items")
    .then(function(response) {
        $("#list").empty();
        for(element of response.data)
        {
            $("#list").append(`<li id='${element.id}'>${element.value} <button id="delete">Delete</button></li>`);
        }
        $("#list").on("click", "button", Remove);
    })
    .catch(function(error) {
        ShowModal(error);
    });
}

function Add() {
    var value = $("#add_input").val().trim();
    if(value)
    {
        axios.post(link+"/api/items", {
            value
        }).then(function(response) {
            $("#add_input").val("");
            $("#list").append(`<li id='${response.data.id}'>${response.data.value} <button>Delete</button></li>`);
        }).catch(function(error) {
            ShowModal(error);
        });
    }
    else
    {
        ShowModal("wrong input");
    }
}

function Validate(value) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}

function Remove(event) {
    axios.delete(`${link}/api/items/${event.currentTarget.parentElement.id}}`).then(function(response) {
        $(`#${response.data.id}`).remove();
    }).catch(function(error) {
        ShowModal(error);
    });
}

function Contact() {
    let value = $("#email_value").val().trim();
    if(Validate($("#email_input").val()) && value)
    {
        axios.post(`${link}/api/contact`, 
        {
            email: $("#email_input").val(), 
            value
        })
        .then(function(response) {
            $("#email_value").val("");
            $("#email_input").val("");
            ShowModal(response.data);
        }).catch(function(error) {
            ShowModal(error);
        });
    }
    else
    {
        ShowModal("Wrong input");
    }
}

$("#email_input").on("input", function() {
    if(Validate($(this).val()))
        $(this).css("outline-color", "green");
    else
        $(this).css("outline-color", "red");

})
$("#add_btn").click(Add);
$("#email_btn").click(Contact);
$(".modal-content").click(function(event) {
    event.stopPropagation();
})
$(".modal-btn, .modal").click(function() {
    modal.css('display', 'none');
});

Get();
