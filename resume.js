// this line of code won't run
/* this won't run (multiline)
*/ 
// Define variables
let myName = "Jonny";
let title = "Student";
let experience = "College Student, Highschool Student, and Middleschool Student";
let education = "Oral Roberts University";
let skills = ["Airsoft", "Gaming", "Persistence", "Academics"];

// Connect Variable to the HTML (ligaments)
document.getElementById("my-name").textContent = myName;
document.getElementById("title").textContent = title;
document.getElementById("experience").textContent = experience;
document.getElementById("education").textContent = education;
