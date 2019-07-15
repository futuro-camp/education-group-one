
//Extending standart Array-Object properties

    //removeOdd elements from array
Array.prototype.removeOdd = function() {
    return this.filter((element) => element%2===0);
}
    //removeEven elements from array
Array.prototype.removeEven = function() {
    return this.filter((element) => element%2!==0);
}
    //custromSort elements from higer to lower value
Array.prototype.bubbleSortH = function() {
    let swap;
    do {
        swap = false;
        for (let i=0; i<this.length; i++) {
            if (this[i]<this[i+1]){
                let temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;
                swap = true;
            }
        }
    } while (swap);
    return this;
};
    //custromSort elements from lower to higer value
Array.prototype.bubbleSortL = function() {
    let swap;
    do {
        swap = false;
        for (let i=0; i<this.length; i++) {
            if (this[i]>this[i+1]){
                let temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;
                swap = true;
            }
        }
    } while (swap);
    return this;
};
//test array for methods remove odd/even
let test = [1,2,3,4,5];
//test array for methods bubbleSort H->L/L->H
let testTwo = [8,12,1,5,3];

console.log(test.removeOdd());
console.log(test.removeEven());
console.log(testTwo.bubbleSortH());
console.log(testTwo.bubbleSortL());


