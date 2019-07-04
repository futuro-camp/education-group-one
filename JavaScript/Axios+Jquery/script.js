function drawGraph(resp) {
    let scale = 20;
    var canvas = document.getElementById("graph");
    if(canvas.getContext) {
        var canvConx = canvas.getContext("2d");
        canvConx.translate(canvas.width/2, canvas.height-20);

        canvConx.beginPath();
        canvConx.strokeStyle = "#000000";
        canvConx.moveTo(-canvas.width/2, 0);
        canvConx.lineTo(canvas.width/2, 0);
        canvConx.stroke();
        for(i=-((canvas.width/2)/10); i<=canvas.width*scale; i++) {
            canvConx.beginPath();
            canvConx.moveTo(i*scale, -5);
            canvConx.lineTo(i*scale, 5);
            canvConx.stroke();
        }
        canvConx.beginPath();
        canvConx.moveTo(canvas.width/2, 0);
        canvConx.lineTo(canvas.width/2-5, 5);
        canvConx.moveTo(canvas.width/2, 0);
        canvConx.lineTo(canvas.width/2-5, -5);
        canvConx.stroke();
        canvConx.beginPath();
        canvConx.moveTo(0, 0);
        canvConx.lineTo(0, -canvas.height);
        canvConx.stroke();
        for(i=0; i>=-canvas.height; i--) {
            canvConx.beginPath();
            canvConx.moveTo(-5, i*scale);
            canvConx.lineTo(5, i*scale);
            canvConx.stroke();
        }
        canvConx.beginPath();
        canvConx.moveTo(0, -canvas.height+20);
        canvConx.lineTo(5, -canvas.height+25);
        canvConx.moveTo(0, -canvas.height+20);
        canvConx.lineTo(-5, -canvas.height+25);
        canvConx.stroke();

        canvConx.beginPath();
        canvConx.strokeStyle = "#ff0000";
        [x,y] = resp.data[0];
        canvConx.moveTo(x*scale, -y*scale);
        resp.data.forEach((element) => {
            [x,y] = element;
            canvConx.lineTo(x*scale, -y*scale);
        });
        canvConx.stroke();
    }
}

axios.get("http://192.168.1.100:3000/api/items").then((resp) => {
    resp.data.forEach((element) => {
        $("<button>Delete</button>").appendTo($(`<li id=\"item-${element.id}\">${element.value}</li>`).appendTo("#content")).on("click", () => {
            axios.delete(`http://192.168.1.100:3000/api/items/${element.id}`).then((resp) => {
                $(`#item-${resp.data.id}`).fadeOut(1000, () => {
                    $("li").remove(`#item-${resp.data.id}`);
                })
            }).catch((error) => {
                alert(error);
            });
        });
        $(`#item-${element.id}`).slideDown(1000);
    })
    }).catch((error) => {
        alert(error);
});

$("#post-form-submit").click((event) => {
    event.preventDefault();
    if($("#post-form-input").val()) {
        axios.post("http://192.168.1.100:3000/api/items", {value: $("#post-form-input").val()}).then((resp) => {
            $("#post-form-input").val("");
            $("<button>Delete</button>").appendTo($(`<li id=\"item-${resp.data.id}\">${resp.data.value}</li>`).appendTo("#content")).on("click", () => {
                axios.delete(`http://192.168.1.100:3000/api/items/${resp.data.id}`).then((resp) => {
                    $(`#item-${resp.data.id}`).fadeOut(1000, () => {
                        $("li").remove(`#item-${resp.data.id}`);
                    })
                }).catch((error) => {
                    alert(error);
                });
            });
            $(`#item-${resp.data.id}`).slideDown(1000);
        }).catch((error) => {
            alert(error);
        });
    }
    else {
        alert("Please, input name of new object");
    }
});

$("#contact-form-submit").click((event) => {
    event.preventDefault();
    if($("#contact-form-email-input").val().match(/.+\@.+\..+/g) !== null && ($("#contact-form-message-input").val().length > 0)) {
        axios.post("http://192.168.1.100:3000/api/contact", { email: $("#contact-form-email-input").val(), value: $("#contact-form-message-input").val() }).then((resp) => {
            $("#modal-text").text(resp.data);
            $(".modal").modal({fadeDuration: 1000, fadeDelay: 0.20});
            $("#contact-form-email-input").val("");
            $("#contact-form-message-input").val("");
        }).catch((error) => {
            console.log(error);
        });
    }
    else {
        alert("Please, fill all fields")
    }
});

$("#contact-form-email-input").on("input", () => {
    if($("#contact-form-email-input").val().match(/.+\@.+\..+/g) !== null) {
        $("#contact-form-email-input").css("outline-color", "green");
    }
    else {
        $("#contact-form-email-input").css("outline-color", "red");
    }
});

$("#contact-form-message-input").on("input", () => {
    if($("#contact-form-message-input").val().length > 0) {
        $("#contact-form-message-input").css("outline-color", "green");
    }
    else {
        $("#contact-form-message-input").css("outline-color", "red");
    }
});

$("#getGraph").one("click", () => {
    axios.get("http://192.168.1.100:3000/api/chart").then((resp) => {
        $("#getGraph").text("Update chart");
        drawGraph(resp);
        $("#getGraph").one("click", () =>{
            axios.get("http://192.168.1.100:3000/api/chart").then((resp) => {
                drawGraph(resp);
            }).catch((error) => {
                alert(error);
            });
        });
    }).catch((error) => {
        alert(error);
    });
});


