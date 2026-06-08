let age = 20;
var course = "BBIT";
const university = "Strathmore";
// Redeclare.
// let age = 40;
var course = "BBIT";
// const university = "Strathmore";
age = 40;
course = "ICS";
if(true){
    let time = "11:30";
    var day = "4th";
    const year = 2026;

}

console.log(day);

// function defination
//year=2026;
/**
 * 
 * @param {int} height 
 * @param {int} width 
 * @return {int} area
 */

function calculateArea(height, width){
    if(height == null){
        console.log('height missing!')
    }else if(width == null){
        console.log("width missing!")
    }else{
        let area  = height * width;
        return area
    }

    let area  = height * width;
    return area; // return value 
   // console.log("function calculateArea")
    //alert("Function called/executed");
}
// execution-called
console.log( calculateArea(20,3)) // function call
console.log( calculateArea(10)) // one output width missing
console.log(calculateArea()) // height missing or??

// function expression 
const add = function(number_1, number_2){
    return number_1 + number_2;
}
console.log(add(4,2))

// arrow functions 
const multiply = (x, y) => x * y;

console.log(multiply(2, 3));