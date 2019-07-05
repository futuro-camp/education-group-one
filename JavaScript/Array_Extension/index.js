function removeOdd() {
    return this.filter(element => element%2 !== 0);
}

function removeEven() {
    return this.filter(element => element%2 === 0);
}

function customSort() {
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
            if (this[j] > this[j + 1]) {
                let tmp = this[j];
                this[j] = this[j + 1];
                this[j + 1] = tmp;
            }
        }
    }
    return this;
}

Array.prototype.removeOdd = removeOdd;
Array.prototype.removeEven = removeEven;
Array.prototype.customSort = customSort;

arr = [3,6,2,7,8,4,5,1];

console.log(arr);
console.log(arr.removeOdd());
console.log(arr.removeEven());
console.log(arr.customSort());
