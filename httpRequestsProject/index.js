// Getting from the server all content and find ONLY data
function getFromServer() {
    axios.get('http://192.168.1.100:3000/api/items')
    .then((content)=>{
        showSomething(content.data);
    }).catch((error)=>{
        console.log(error);
    })
}
// Function for showing "something" (including) in the html-object
function showSomething(data) {
    data.forEach(element => {
        $(".list-box").append(`<li id=${element.id}>ID:  ${element.id} Value:    ${element.value}</li>`);
    });
}
//Creating onclik-event for the button SEND
$("#send").click(function() {
    postNewValueToServer();
});
//Sending to server value of input's textarea
function postNewValueToServer(){
    axios.post('http://192.168.1.100:3000/api/items', {
        value: $("#new").val()
    }).then((answer)=>{
        // console.log(answer);
        $("#new").val('');
        $(".list-box").append(`<li id=${answer.data.id}>ID ${answer.data.id} Value ${answer.data.value}</li>`);
    }).catch((error)=>{
        alert(error);
    })
}
//Creating onclik-event for the button DELETE
$("#del").click(function() {
    deleteFromServer();
});
//Deleting an object from the server
function deleteFromServer(){
    axios.delete(`http://192.168.1.100:3000/api/items/${$("#old").val()}`)
    .then((answer)=>{
        $("#old").val('');
        $(`#${answer.data.id}`).remove();
    }).catch((error)=>{
        console.log(error);
    })
}
//Creating onclik-event for the button ve (value+email)
$("#ve").click(function() {
    postNewValueEmailToServer();
});
//Sending to server value and email of input's textareas
function postNewValueEmailToServer(){
    axios.post(`http://192.168.1.100:3000/api/contact`, {
        value: $("#value").val(),
        email: $("#email").val()
    })
    .then((answer)=>{
        $(".message").append(`<p> ${answer.data}</p>`);
        $(".message").css("display","flex");
    }).catch((error)=>{
        alert(error);
    })
}
getFromServer();