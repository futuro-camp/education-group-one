//extending default jQuery by new method

//adding new method to default method"s prototype
jQuery.prototype.colorMagic = function(r,g,b,x) {
    // setting background-color from entered rgb-color
    this.css("background-color", `rgb(${r},${g},${b})`);
    if(x>0) {
        r = r<x ? 0 : r-x;
        g = g<x ? 0 : g-x;
        b = b<x ? 0 : b-x;
    } else {
        r= r-x<256 ? r-x : 255;
        g= g-x<256 ? g-x : 255;
        b= b-x<256 ? b-x : 255;
    }
    // setting text-color from entered (rgb-color minus x-value)
    this.css("color", `rgb(${r},${g},${b})`);
    x=-x;
    if(x>0) {
        r= r<x ? 0 : r-x;
        g= g<x ? 0 : g-x;
        b= b<x ? 0 : b-x;
    } else {
        r= r-x<256 ? r-x : 255;
        g= g-x<256 ? g-x : 255;
        b= b-x<256 ? b-x : 255;
    }
    // setting border-color from entered (rgb-color->brg plus x-value)
    this.css("border-color", `rgb(${b},${r},${g})`);
};
//disabling button MAGIC by default
$("#switch").prop("disabled", true);
$("#reset").prop("disabled", false);
//follow refreshing input"s textareas
//validation input"s textareas on empty-string and numbers
$("#r, #g, #b, #x").on("input", function() {
    if($("#r").val().trim() && Number($("#r").val())) {
        $("#r").css("outline-color","green");
        $("#switch").prop("disabled", false);
    } else {
        $("#r").css("outline-color","brown");
        $("#switch").prop("disabled", true);
    }
    if($("#g").val().trim() && Number($("#g").val())) {
        $("#g").css("outline-color","green");
        $("#switch").prop("disabled", false);
    } else {
        $("#g").css("outline-color","brown");
        $("#switch").prop("disabled", true);
    }
    if($("#b").val().trim() && Number($("#b").val())) {
        $("#b").css("outline-color","green");
        $("#switch").prop("disabled", false);
    } else {
        $("#b").css("outline-color","brown");
        $("#switch").prop("disabled", true);
    }
    if($("#x").val().trim() && Number($("#x").val())) {
        $("#x").css("outline-color","green");
        $("#switch").prop("disabled", false);
    } else {
        $("#x").css("outline-color","brown");
        $("#switch").prop("disabled", true);
    }
});
//click event on SWITCH button which CHANGING color by custom method
$("#switch").click(function() {
    $("#test").colorMagic($("#r").val(),$("#g").val(),$("#b").val(),x);
    $("#r, #g, #b, #x").val("");
    $("#switch").prop("disabled", true);
    $("#switch").css("background-color","gold");
    $("#switch").css("color","black");
    setTimeout(() => {
        $("#switch").css("background-color","azure");
        $("#switch").css("color","green");
    }, 1000);
});
//click event on SWITCH button which CHANGING color by default
$("#reset").click(function() {
    $("#r, #g, #b, #x").val("");
    $("#test").css("background-color","#fff");
    $("#test").css("color","#000");
    $("#test").css("border-color","#000");
    $("#reset").css("background-color","lightgray");
    $("#reset").css("color","black");
    setTimeout(() => {
        $("#reset").css("background-color","azure");
        $("#reset").css("color","green");
    }, 200);
});
