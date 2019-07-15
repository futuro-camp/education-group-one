function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}
  
function rgbToHex(color) {
    let {r,g,b} = color;
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function changeColor(factor, color) {
    let {r,g,b} = color;
    if(factor>0) {
        return {
            r: r + factor > 255 ? 255 : r + factor,
            g: g + factor > 255 ? 255 : g + factor,
            b: b + factor > 255 ? 255 : b + factor
        };
    }
    else {
        return {
            r: r + factor < 0 ? 0 : r + factor,
            g: g + factor < 0 ? 0 : g + factor,
            b: b + factor < 0 ? 0 : b + factor
        };
    }

}

function rainbow(color) {
    let colorRGB = hexToRgb(color);
    if(colorRGB) {
        this.css({
            "border-color": rgbToHex(changeColor(-150,colorRGB)),
            "background-color": rgbToHex(colorRGB),
            "color": rgbToHex(changeColor(150,colorRGB))
        });
    }
}

jQuery.fn.extend({ rainbow });

$(".rainbow").rainbow("#00ffff");