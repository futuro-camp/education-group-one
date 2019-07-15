const link = "http://192.168.1.100:3000";
var modal = $(".modal");
let data,
    startPoint,
    divValue;
let pressed = true;
let instance;
let scrolling = false;

function showModal(msg) {
    $(".modal-text").html(msg);
    modal.css("display", "block");
}

function findX(value) {
    return startPoint[0] + value / divValue[0];
}

function findY(value) {
    return startPoint[1] - value / divValue[1];
}

function draw() {
    let padding = 80;
    let width = 1000, height = 800;
    let maxX = Math.max(...data.map((x) => x[0]));
    maxX = maxX > 0 ? maxX : 0;
    let minX = Math.min(...data.map((x) => x[0]));
    minX = minX < 0 ? minX : 0;
    let maxY = Math.max(...data.map((x) => x[1]));
    maxY = maxY > 0 ? maxY : 0;
    let minY = Math.min(...data.map((x) => x[1]));
    minY = minY < 0 ? minY : 0;
    let sizeX = (maxX + Math.abs(minX));
    let sizeY = (maxY + Math.abs(minY));
    startPoint = [width - padding/2 - ((width - padding)/sizeX)*Math.abs(maxX), height - padding/2 - ((height - padding)/sizeY)*Math.abs(minY)];
    divValue = [sizeX/(width - padding), sizeY/(height - padding)];

    var svg = d3.select("body")
                .append("svg")
                .attr("width", width)
                .attr("height", height);

    var xScale = d3.scaleLinear()
                .domain([minX, maxX])
                .range([0, width - padding]);

    var yScale = d3.scaleLinear()
                .domain([minY, maxY])
                .range([height - padding, 0]);

    var xAxis = d3.axisBottom()
                .scale(xScale);

    var yAxis = d3.axisLeft()
                .scale(yScale);

    svg.append("g")
       .attr("transform", `translate(${width - padding/2 - ((width - padding)/sizeX)*Math.abs(maxX)}, ${padding/2})`)
       .call(yAxis);

    svg.append("g")
        .attr("transform", `translate(${padding/2}, ${height - padding/2 - ((height - padding)/sizeY)*Math.abs(minY)})`)
        .call(xAxis);

    for(let i = 0; i < data.length; ){
        let [x1, y1] = data[i];
        svg.append("svg:circle")
            .attr("class", "nodes")
            .attr("cx", findX(x1))
            .attr("cy", findY(y1))
            .attr("r", "5px")
            .attr("fill", "black");
        if(i + 1 !== data.length){
            let [x2, y2] = data[i+1];

            svg.append("line")
                .attr("x1", findX(x1))
                .attr("y1", findY(y1))
                .attr("x2", findX(x2))
                .attr("y2", findY(y2))
                .style("stroke", "black");
        }
        i++;
    }
}

function deleteStorage() {
    localStorage.removeItem("auth");
}

function deleteCookie() {
    document.cookie = "auth=;";
}

function closeLog() {
    $(".login").css("display", "none");
}

function openLog() {
    $(".login").css("display", "block");
}

function logOut() {
    localStorage.removeItem("auth");
    document.cookie = "auth=;";
    openLog();
}

function getData() {
    instance.get("http://192.168.1.100:3000/api/chart")
    .then(function(response) {
        data = response.data;
    })
    .catch(function(error) {
        showModal(error);
    }).then(draw).then(function() {
        $("circle").on("click", function() {
            let x = Math.round((parseFloat($(this).css("cx")) - startPoint[0]) * divValue[0]);
            let y = Math.round(-(parseFloat($(this).css("cy")) - startPoint[1]) * divValue[1]);
            showModal(`x: ${x}; y: ${y}.`);
        });
    });
}

function get() {
    instance.get("/api/items")
    .then(function(response) {
        $("#list").empty();
        for(let element of response.data){
            $("#list").append(`<li id='${element.id}'>${element.value} <button id="delete">Delete</button></li>`);
        }
    })
    .catch(function(error) {
        showModal(error);
    });
}

function add() {
    var value = $("#add_input").val().trim();
    if(value){
        instance.post("/api/items", {
            value
        }).then(function(response) {
            $("#add_input").val("");
            $("#list").append(`<li id='${response.data.id}'>${response.data.value} <button>Delete</button></li>`);
        }).catch(function(error) {
            showModal(error);
        });
    }
    else{
        showModal("wrong input");
    }
}

function validate(value) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
}

function remove(event) {
    instance.delete(`/api/items/${event.currentTarget.parentElement.id}`)
    .then(function(response) {
        $(`#${response.data.id}`).remove();
    }).catch(function(error) {
        showModal(error);
    });
}

function contact() {
    let value = $("#email_value").val().trim();
    if(validate($("#email_input").val()) && value){
        instance.post(`${link}/api/contact`, {
            email: $("#email_input").val(), 
            value
        })
        .then(function(response) {
            $("#email_value").val("");
            $("#email_input").val("");
            showModal(response.data);
        }).catch(function(error) {
            showModal(error);
        });
    }
    else{
        showModal("Wrong input");
    }
}

function login() {
    let login = $(".login_login").val().trim();
    let password = $(".login_password").val().trim();
    if(login && password){
        axios.post(`${link}/login`, {
            login, password
        }).then((response) => {
            $(".login_login").val("");
            $(".login_password").val("");
            closeLog();
            localStorage.setItem("auth", response.data.key);
            document.cookie = `auth=${response.data.key}`;
            instance = axios.create({
                baseURL: link,
                headers: {"auth": response.data.key}
            })
            get();
        }).catch((error) => {
            console.log(error);
        })
    }
    else{
        showModal("Wrong input");
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function start() {
    let auth = localStorage.getItem("auth");
    if(auth){
        closeLog();
        instance = axios.create({
            baseURL: link,
            headers: { auth }
        });
        get();
    }
    else{
        auth = getCookie("auth");
        if(auth) {
            closeLog();
            instance = axios.create({
                baseURL: link,
                headers: { auth }
            });
            get();
        }
    }
}



$("#list").on("click", "button", remove);
$("#logout").on("click", logOut);
$(".login_btn").on("click", login);
$("#email_input").on("input", function() {
    if(validate($(this).val())){
        $(this).css("outline-color", "green");
    }
    else{
        $(this).css("outline-color", "red");
    }
});
$("#add_btn").click(add);
$("#email_btn").click(contact);
$(".modal-content").click(function(event) {
    event.stopPropagation();
});
$(".modal-btn, .modal").click(function() {
    modal.css("display", "none");
});
$("#svg").on("click", function() {
    if(pressed){
        pressed = false;
        $(this).html("remove");
        getData();
    }
    else{
        pressed = true;
        $(this).html("Graph");
        $("svg").remove();
    }
});
$(".section").on("mousewheel", function(e){
    e.preventDefault();
    let a = Array.from($(".section"));
    let p = a.findIndex((elem) => {
        return $(this).is(elem);
    });
    if(e.originalEvent.wheelDelta < 0 && !scrolling) {
        scrolling = true;
        $("html, body").animate({
            scrollTop: $(p === a.length - 1 ? a[p] : a[p + 1]).offset().top}, 
            1000,
            function() {
                scrolling = false;
            });
    }
    else if(!scrolling)
    {
        scrolling = true;
        $("html, body").animate({
            scrollTop: $(p === 0 ? a[p] : a[p - 1]).offset().top}, 
            1000,
            function() {
                scrolling = false;
            });
    }
});
$(".section").on("click", function() {
    document.location.href = "index.html";
});

start();
