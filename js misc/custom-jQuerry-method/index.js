// extending default jQuery by new method
jQuery.prototype.colorMagic = function(r,g,b,x) {
    this.css("background-color", `rgb(${r},${g},${b})`);
    if(x>0) {
        r<x ? r=0 : r=r-x;
        g<x ? g=0 : g=g-x;
        b<x ? b=0 : b=b-x;
    } else {
        r-x<256 ? r=r-x : r=255;
        g-x<256 ? g=g-x : g=255;
        b-x<256 ? b=b-x : b=255;
    }
    this.css("color", `rgb(${r},${g},${b})`);
    x=-x;
    if(x>0) {
        r<x ? r=0 : r=r-x;
        g<x ? g=0 : g=g-x;
        b<x ? b=0 : b=b-x;
    } else {
        r-x<256 ? r=r-x : r=255;
        g-x<256 ? g=g-x : g=255;
        b-x<256 ? b=b-x : b=255;
    }
    this.css("border-color", `rgb(${r},${g},${b})`);
}
// appling this method on <p> with default (#000)-color
$("#test").colorMagic(153,255,153,85);
