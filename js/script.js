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

/**Javascript Arrays (related) */

const scores =[45,56,67,67,78];

// access array_name[index]
//78
console.log(scores[4]);

//67
console.log(scores[2]);

//45
console.log(scores[0]);

//56
console.log(scores[1]);
let student_names = ["Omondi","Wafula","Kiprotich","nyambane","toipan"];

//print out Kiprotich
console.log(student_names[2]);

let governors = [
    [47,"Johnston Sakaja"],
    [1,"Abdullswamad Sherrif"],
    [21,"Irungu Kang'ata"],
];

// The governor of country number 1 is Abdullswamad Sherrif
console.log("The governor of country number", governors[1][0], "is", governors[1][1]);

// map (perform an operation on each element )
let doubled = scores.map(x => x * 2); //multiply each Score by 2
console.log(doubled);

//properties
//The class has j students
console.log("The class has ",student_names.length,"students");

//Kenya has b governers
console.log("Kenya has",governors.length,"governors");

//for in
for(let index in scores){
    console.log(Scores[index]);
}
//for of
for(let score of scores){
    console.log(score);
}
// forEach 
scores.forEach(function(score){
    console.log("score:", score);
});

const student = {
    name: "Alice",
    age:20,
    passed:true,
    grade:'A',
    "admission number ":220558,
    course:"BBIT",
    group:"2A",
    attendance: 20,
    addAttendance: function(){
        this.attendance += 1;
    }
};

//accessing items 
//student_name
console.log('My name is', 
    student.name,"from",
    student["admission number"],
    "university"

);

// a method in the object 
student.addAttendance(); // add attendance by 1
console.log(student.attendance); // 21

//array of objects
let bbit_2b_students=[
    {adm:223251,name:"Blessing"},
    {adm:192977, name: "Ryan"},
    {adm:220941,name:"Eliana"},
    {adm:220558,name:"Neema"}
];
//print out the names of all students in bbit 2b using a loop
bbit_2b_students.forEach(function (student){
    console.log(student.name);
});
//@TODO:SHOW LOOPING OF OBJECTYS

// getting the keys of an objecty as an array
console.log(Object.keys(student));

// getting the values of an object as an array
console.log(Object.values(student));

// getting both keys and values of an object
console.log(Object.entries(student));