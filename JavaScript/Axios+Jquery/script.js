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

axiosInstance = axios.create({ baseURL: "http://192.168.1.100:3000" });

$(".login-modal").modal({
    fadeDuration: 1000, 
    fadeDelay: 0.20, 
    escapeClose: false,
    clickClose: false,
    showClose: false
});

$("#login-modal-submit").click((event) => {
    event.preventDefault();
    if($("#login-modal-login").val() && $("#login-modal-password").val()) {
        axiosInstance.post("/login", { login: $("#login-modal-login").val(), password: $("#login-modal-password").val()}).then((resp) => {
            if(resp.data.success) {
                $.modal.close();
                Object.assign(axiosInstance.defaults, { headers: { auth: resp.data.key }});
                axiosInstance.get("/api/items").then((resp) => {
                    resp.data.forEach((element) => {
                        let { id, value } = element;
                        $("<button>Delete</button>").appendTo($(`<li id=\"item-${id}\">${value}</li>`).appendTo("#content")).on("click", () => {
                            axiosInstance.delete(`/api/items/${id}`).then((resp) => {
                                $(`#item-${resp.data.id}`).fadeOut(1000, () => {
                                    $("li").remove(`#item-${resp.data.id}`);
                                });
                            }).catch((error) => {
                                alert(error);
                            });
                        });
                        $(`#item-${id}`).slideDown(1000);
                    })
                     }).catch((error) => {
                        alert(error);
                });
            }
            else {
                $("#login-modal-login").css("background-color", "red");
                $("#login-modal-password").css("background-color", "red");
            }
        }).catch((error) => {
            alert(error);
        });
    }
});

$("#post-form-submit").click((event) => {
    event.preventDefault();
    if($("#post-form-input").val()) {
        axiosInstance.post("/api/items", {value: $("#post-form-input").val()}).then((resp) => {
            let {id, value} = resp.data;
            $("#post-form-input").val("");
            $("<button>Delete</button>").appendTo($(`<li id=\"item-${id}\">${value}</li>`).appendTo("#content")).on("click", () => {
                axiosInstance.delete(`/api/items/${id}`).then((resp) => {
                    $(`#item-${resp.data.id}`).fadeOut(1000, () => {
                        $("li").remove(`#item-${resp.data.id}`);
                    });
                }).catch((error) => {
                    alert(error);
                });
            });
            $(`#item-${id}`).slideDown(1000);
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
        axiosInstance.post("/api/contact", { email: $("#contact-form-email-input").val(), value: $("#contact-form-message-input").val() }).then((resp) => {
            $("#modal-text").text(resp.data);
            $(".contact-modal").modal({fadeDuration: 1000, fadeDelay: 0.20});
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
        $("#contact-form-email-input").css("border-color", "green");
    }
    else {
        $("#contact-form-email-input").css("border-color", "red");
    }
});

$("#contact-form-message-input").on("input", () => {
    if($("#contact-form-message-input").val().length > 0) {
        $("#contact-form-message-input").css("border-color", "green");
    }
    else {
        $("#contact-form-message-input").css("border-color", "red");
    }
});

$("#getGraph").one("click", () => {
    axiosInstance.get("/api/chart").then((resp) => {
        $("#getGraph").text("Update chart");
        drawGraph(resp);
        $("#getGraph").one("click", () =>{
            axiosInstance.get("/api/chart").then((resp) => {
                drawGraph(resp);
            }).catch((error) => {
                alert(error);
            });
        });
    }).catch((error) => {
        alert(error);
    });
});
