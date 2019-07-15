let anchors = ["#first", "#second", "#third"];
let currentBlock = 0;
let inMove = false;

function scroll(e){
    e.preventDefault();
    if(!inMove) {
        inMove = true;
        if(e.originalEvent.wheelDelta / 120 > 0) {
            currentBlock - 1 >= 0 ? currentBlock -=1 : currentBlock = 0; 
        }
        else{
            currentBlock + 1 <= 3 ? currentBlock += 1 : currentBlock = 3; 
        }
        $("html, body").animate({ scrollTop: $(anchors[currentBlock]).offset().top }, 500, () => { inMove = false; });
    }
}

anchors.forEach((element) => {
    $(element).on("mousewheel DOMMouseScroll", scroll);
});
