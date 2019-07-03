const link = "http://192.168.1.100:3000";
var modal = $('.modal');

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
            $("#list").append(`<li id='${element.id}'>${element.value}</li>`);
        }
    })
    .catch(function(error) {
        ShowModal(error);
    });
}

function Add() {
    axios.post(link+"/api/items", {
        value: $("#add_input").val()
    }).then(function(response) {
        $("#list").append(`<li id='${response.data.id}'>${response.data.value}</li>`);
    }).catch(function(error) {
        ShowModal(error);
    });
}

function Remove() {
    axios.delete(`${link}/api/items/${$("#delete_input").val()}`).then(function(response) {
        $(`#${response.data.id}`).remove();
    }).catch(function(error) {
        ShowModal(error);
    });
}

function Contact() {
    axios.post(`${link}/api/contact`, 
    {
        email: $("#email_input").val(), 
        value: $("#email_value").val() 
    })
    .then(function(response) {
        ShowModal(response.data);
    }).catch(function(error) {
        ShowModal(error);
    });
}

$("#add_btn").click(Add);
$("#delete_btn").click(Remove);
$("#email_btn").click(Contact);
$(".modal-content").click(function(event) {
    event.stopPropagation();
})
$(".modal-btn, .modal").click(function() {
    modal.css('display', 'none');
});
$("input").focus(function() {
    $(this).val("");
})

Get();
