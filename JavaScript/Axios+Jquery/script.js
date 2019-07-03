axios.get("http://192.168.1.100:3000/api/items").then((resp)=>{
    resp.data.forEach(element => {
        $("#content").append(`<li id=\"item-${element.id}\">id: ${element.id} value: ${element.value}</li>`);
        $(`#item-${element.id}`).slideDown(1000);
    })
    }).catch((error) => {
        console.log(error);
});

$("#post-form-submit").click((event)=>{
    event.preventDefault();
    if($("#post-form-input").val() != "") {
        axios.post("http://192.168.1.100:3000/api/items", {value: $("#post-form-input").val()}).then((resp)=>{
            $("#post-form-input").val("");
            $(".post-form").append("<p class=\"fade\">New value succesfully added</p>");
            $(".fade").fadeOut(1000);
            $("#content").append(`<li id=\"item-${resp.data.id}\">id: ${resp.data.id} value: ${resp.data.value}</li>`);
            $(`#item-${resp.data.id}`).slideDown(1000);
        }).catch((error) => {
            console.log(error);
        });
    }
    else {
        alert("Please, input name of new object");
    }
})

$("#delete-form-submit").click((event)=>{
    event.preventDefault();
    if($("#delete-form-input").val() != "") {
        axios.delete(`http://192.168.1.100:3000/api/items/${$("#delete-form-input").val()}`).then((resp)=> {
            $("#delete-form-input").val("");
            $(".delete-form").append(`<p class=\"fade\">Object with id: ${resp.data.id} was removed</p>`);
            $(".fade").fadeOut(1000);
            $(`#item-${resp.data.id}`).fadeOut(1000, ()=> {
                $("li").remove(`#item-${resp.data.id}`);
            })
        }).catch((error) => {
            console.log(error);
        });
    }
    else {
        alert("Please, input id of deleting object");
    }
})

$("#contact-form-submit").click((event)=>{
    event.preventDefault();
    axios.post("http://192.168.1.100:3000/api/contact", { email: $("#contact-form-email-input").val(), value: $("#contact-form-message-input").val() }).then((resp)=>{
        $("#modal-text").text(resp.data);
        $(".modal").modal({fadeDuration: 1000, fadeDelay: 0.20});
        $("#contact-form-email-input").val("");
        $("#contact-form-message-input").val("");
    }).catch((error) => {
        console.log(error);
    });
})


