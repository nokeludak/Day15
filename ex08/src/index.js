// Only change code below this line
const sum = (num1, num2 = 1) => num1 + num2; {
    if (num2 = 0){
        sum = num1 + 1;

    return sum;
    };
    
}
// Only change vode above this line
console.log(sum(4, 6));
console.log(sum(3));
module.exports = sum;