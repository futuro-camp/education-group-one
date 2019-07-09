// useful UTILITIES file

//function which slices all locations-list on pages by four places
function creatingPagesLocations(arr){
    let pages = [];
    var i,j,temparray,step = 4;
    for (i=0,j=arr.length; i<j; i+=step) {
        temparray = arr.slice(i,i+step);
        pages.push(temparray);
    }
    // console.log(pages);
    return pages;
}
// creatingPagesLocations();



module.exports = {creatingPagesLocations};