//let age = 20;
//var course = "BBIT";
//const university = "strathmore";

//Redeclare
//let age = 40;
//var course = "ICS";
//const university = "strathmore";

//if(true){
   // let time = "11:30";
   // var day = "4th";
   // const year = 2026;
//}
//console.log(time);
//console.log(day);
//console.log(year);

//function definition
/**
 * A function that calculates the area of a rectangle
 * @param {int} height
 * @param {int} width
 * @returns {int} area
 */
function calculateArea(height, width){
    if(height == null){
        console.error('height missing!')
}else if(width == null){
    console.error('height missing')
}else{   
    area = height * width
}
    return area
}
    //console.log("function calculateArea")
   //alert("Function called/executed");

//return a value is NOT printing out
//execution-called
console.log(calculateArea(20,3))//one output 60
console.log(calculateArea(20))// one output width missing
console.log(calculateArea())//height missing or??

//function expression
const add = function(number_1, number_2){
    return number_1 + number_2
}
console.log( add(4,2) )

//arrow functions
const multiply = (x, y) => x * y;
console.log(multiply(2,5));

/** Javascript Arrays(related) */

const scores =[45, 56, 67, 67, 78];

//access array_name[index]
//78
console.log(scores[4]);
//67
console.log(scores[2]);
//45
console.log(scores[0]);
//56
console.log(scores[1]);

let student_names = ["omondi", "wafula", "kiprotich", "nyambane", "toipan"];

//print out kiprotich on the console window
console.log(student_names[2]);
//an array of arrays
let governors = [
    [47,"Johnson Sakaja"],
    [1,"Abdullswamad Sherrif"],
    [21,"Irungu Kang'ata"]
];
//the governor of countyy number 1 is Abdullswamad Sherrif
 console.log("The governor of county number",  governors[1][0], "is", governors[1][1]);
 
 //map(perform an operation on each element)
 let doubled = scores.map(x => x * 2); //multiply each score by 2
 console.log(doubled);

 //properties
 //the class has j students (student_names)
 console.log("The class has", student_names.length, "students");

 //Kenya has b givernors
 console.log("Kenya has", governors.length, "governors");

 //for
 for(let index in scores){
    console.log(scores[index]);
 }
 // for of
 for(let score of scores){
    console.log(score);
 }
 //forEach
 scores.forEach(function(score){
    console.log("score:",score)
 });

 const student = {
    name: "Alice",
    age: 20,
    passed: true,
    grade: 'A',
    "admission number": 183380,
    course: "BBIT",
    group: "2A",
    attendance: 20,
    addAttendance: function(){
        this.attendance = this.attendance + 1;
    }
 };

 //accessing items
 //student name
 console.log('My names is', 
    student.name, "my admission number is",
    student["admission number"]
    );

    //a method in the object
    student.addAttendance();//add attendance by 1
    console.log(student.attendance);//21

    //array of objects
    let bbit_2b_students = [
        {adm: 223251, name: "Blessing"},
        {adm: 192977, name: "Ryan"},
        {adm: 222024, name: "Ambrose"},
        {adm:220941, name: "Neema"}
    ];

    //print out the names of all students in bbit 2b using a loop
    for(let index in bbit_2b_students ){
    console.log(bbit_2b_students[index]);
 }

 //forEach
 bbit_2b_students.forEach(function(student){
   console.log(student.name)
   });

   //@TODO: Show looping of objects

   //getting the keys of an object as an array
  // console.log(student.keys())
  console.log(Object.keys(student));

   //getting the values of an object as an array
   console.log(Object.values(student));

  //getting both keys and values of an object as an array
   console.log(Object.entries(student));

   /*DOM - Document Object Model (tree-like)*/  
    console.log(document);
    console.log(document);

    //Elements on a page
    const heading = document.querySelector("#mainHeading");
    console.log(heading);
    const previewImage = document.querySelector("img");
    console.log(previewImage);
    const aboutSection = document.getElementById("about");
    console.log(aboutSection);

    //all the sections
    const allSections = document.querySelectorAll('section');
    console.log(allSections);

    const allNavLinks = document.querySelectorAll('nav a');
    console.log(allNavLinks);

    //getting an element
    let aboutParagraph = document.querySelector("#about p")

    //change its text
    aboutParagraph.textContent = "This text was changed!";
    aboutParagraph.style.color = "red";

    //setting/setters - updating the page from js
    
    //via the DOM
    previewImage.setAttribute("title","New Title of Image");
    previewImage.setAttribute("alt","New alternate text for the image");
    console.log(previewImage.alt);
    console.log(previewImage.title);

    //Event Handling - Events(user events - click, key events, scroll)

    //get the elemnt of interest- button with an id of changeTextBtn
    let changeTextBtn = document.querySelector("#changeTextBtn");
    let demoText = document.querySelector("demoText");

    //we are handling the click event for the button with an id of changeTextBtn
    changeTextBtn.addEventListener("click",function(event){
        console.log("someone clicked me!");
        demoText.textContent = "I have been changed when you clicked";
        demoText.style.color = "orange";
        demoText.style.fontSize = "16px";
 });

 //use case 2
 let highlightSectionsBtn = document.querySelector("#highlightSectionsBtn");
 highlightSectionsBtn.addEventListener("click",function(event){
    //one
 document.querySelector("#about").classList.toggle("section-highlight");

 //highlight all the sectionns
 //document.querySelectorAll("section").classList.toggle("section-highlight");

 document.querySelectorAll("section").forEach(function(section){
    section.classList.toggle("section-highlight");
 });
});

// get the textbox with id nameInput
document.querySelector("#nameInput").addEventListener("input",function(event){

    document.querySelector('#nameOutput').textContent = 
    "Hello " + document.querySelector("#nameInput").value + "!";

});