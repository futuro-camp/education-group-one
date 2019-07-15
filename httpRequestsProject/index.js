// global variable "AXIOS CREATE"
let instance ;
// Function for showing "something" (including) in the html-object
function showSomething(data) {
    data.forEach((element) => {
        $(".list-box").append(`<li id=${element.id}><button onclick="deleteFromServer(${element.id})">del</button>
                                                    ID: ${element.id}
                                                    Value: ${element.value}</li>`);
    });
}
// Getting from the server all content and find ONLY data
function getFromServer() {
    instance.get("/items")
    .then((content) => {
        console.log(content);
        showSomething(content.data);
    }).catch((error) => {
        console.log(error);
    })
}
//Sending to server value of input"s textarea
function postNewValueToServer(){
    instance.post("/items", {
        value: $("#new").val()
    }).then((answer) => {
        $("#new").val("");
        $(".list-box").append(`<li id=${answer.data.id}><button onclick="deleteFromServer(${answer.data.id})">del</button>
                                                        ID: ${answer.data.id}
                                                        Value: ${answer.data.value}</li>`);
    }).catch((error) => {
        alert(error);
    })
}
//Creating onclik-event for the button SEND
$("#send").click(function() {
    postNewValueToServer();
});
//Sending to server value and email of input"s textareas
function postNewValueEmailToServer(){
    instance.post("/contact", {
        value: $("#value").val(),
        email: $("#email").val()
    })
    .then((answer) => {
        $("#value, #email").val("");
        $(".message").append(`<p> ${answer.data}</p>`);
        $(".message").css("display","flex");
        setTimeout(() => {
            $(".message").css("display","none");
        }, 3000);
    }).catch((error) => {
        alert(error);
    })
}
//Deleting an object from the server
function deleteFromServer(data){
    instance.delete(`/items/${data}`)
    .then((answer) => {
        $(`#${answer.data.id}`).remove();
    })
    .catch((error) => {
        console.log(error);
    })
}
//Creating onclik-event for the button DELETE
$("#del").click(function() {
    deleteFromServer();
});
//Creating onclik-event for the button ve (value+email)
$("#ve").click(function() { postNewValueEmailToServer(); });
//Validation for inputs
//my regular expression for email
    let x = /.+@.+\..+/i;
// disable buttons by default
    $("#send").prop("disabled", true);
    $("#ve").prop("disabled", true);
    $("#draw").prop("disabled", false);
//validation and outline new-input
    $("#new").on("input", function() {
        if($(this).val().trim()) {
            $("#new").css("outline-color","green");
            $("#send").prop("disabled", false);
        } else {
            $("#send").prop("disabled", true);
            $("#new").css("outline-color","brown");
        }
    })
// validation on empty string + outline
    $("#value").on("input", function() {
        if($("#value").val().trim()){
            $("#value").css("outline-color","green");
        } else {
            $("#value").css("outline-color","brown");
        }
    })
// validation on empty string + outline
    $("#email").on("input", function() {
        if($("#email").val().trim()&&x.test($("#email").val())){
            $("#email").css("outline-color","green");
        } else {
            $("#email").css("outline-color","brown");
        }
    })
// Validation value & mail inputs for valid
    $("#value, #email").on("input", function() {
        if($("#value").val().trim()&&$("#email").val().trim()&&x.test($("#email").val())) {
            $("#ve").prop("disabled", false);
        } else {
            $("#ve").prop("disabled", true);
        }
    })

//Get array of points from the server
function getChart(){
    instance.get("/chart")
    .then((content) => {
        return content.data;
    })
    .then((data) => {
        let arrayX=data.map((item) => item[0]);
        let arrayY=data.map((item) => item[1]);
        var charts = document.getElementById("charts"),
        ctx= charts.getContext("2d");
        ctx.beginPath();
        ctx.lineWidth = "2";
        ctx.strokeStyle="#ff33cc";
        ctx.translate(charts.width/2,charts.height/2);
        ctx.moveTo(arrayX[0]*7,-arrayY[0]*7);
        for (let i=1; i<arrayX.length; i++){
            ctx.lineTo(arrayX[i]*7, - arrayY[i]*7);
            }
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = "1";
        ctx.strokeStyle="#003300";
        ctx.moveTo(0, -charts.height/2);
        ctx.lineTo(0, charts.height/2);
        ctx.moveTo(-charts.width/2,0);
        ctx.lineTo(charts.width/2,0);
        ctx.stroke();
        ctx.lineWidth = "1";
        ctx.strokeStyle="#003300";
        ctx.moveTo(0,-charts.height/2);
        ctx.lineTo(-4,-charts.height/2+10);
        ctx.moveTo(0,-charts.height/2);
        ctx.lineTo(4,-charts.height/2+10);
        ctx.stroke();
        ctx.lineWidth = "1";
        ctx.strokeStyle="#003300";
        ctx.moveTo(charts.width/2,0);
        ctx.lineTo(charts.width/2-10,4);
        ctx.moveTo(charts.width/2,0);
        ctx.lineTo(charts.width/2-10,-4);
        ctx.stroke();
        ctx.closePath();
    })
    .catch((error) => {
        console.log(error);
    })
}
//Creating onclik-event for the button draw canvas
$("#draw").click(function() {
    getChart();
    $("#draw").prop("disabled", true);
});
//Creating authorization request
    //login password const
    let loginTrue = "test";
    let passwordTrue = "admin";
    //disable button SIGN IN by default
    $("#signIn").prop("disabled", true);
    //LOG/PASS-input"s validation
    // validation on empty string + outline LOGIN-Input
    $("#log").on("input focus", function() {
        if($(this).val().trim()) {
            $("#log").css("outline-color","green");
        } else {
            $("#log").css("outline-color","brown",);
        }
    })
    // validation on empty string + outline PASSWORD-Input
    $("#pas").on("input focus", function() {
        if($(this).val().trim()) {
            $("#pas").css("outline-color","green");
        } else {
            $("#pas").css("outline-color","brown",);
        }
    })
    // Validation LOGIN & PASSWORD inputs for valid
    $("#log, #pas").on("input focus", function() {
        if($("#log").val().trim()&&$("#pas").val().trim()) {
            $("#signIn").prop("disabled", false);
        } else {
            $("#signIn").prop("disabled", true);
        }
    });
    //sending values by pressing button SIGN IN
    $("#signIn").click(function() { postAuthorization(); });

     //authorization"s method
function postAuthorization() {
    // console.log($("#log").val(), $("#pas").val());
    axios.post("http://192.168.1.100:3000/login",{
        login: $("#log").val(),
        password: $("#pas").val()
    })
    .then((content) => {
        $(".sign-in").css("display","none");
        return content.data.key;
    })
    .then((key) => {
        console.log(key);
        instance = axios.create({
            baseURL: "http://192.168.1.100:3000/api",
            headers: {"auth":key}
        });
    })
    .then(() =>  {
        getFromServer();
    })
    .catch((error) => {
        alert(error);
    });
}
// Starting main method
// getFromServer();
// getChart();
// draw();
// postAuthorization();