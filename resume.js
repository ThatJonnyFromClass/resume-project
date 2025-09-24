// this line of code won't run
/* this won't run (multiline)
*/ 
// Define variables
let myName = "Jonny";
let title = "Student";
let experience = "College Student, Highschool Student, and Middleschool Student";
let education = "Oral Roberts University";
let skills = ["Airsoft", "Gaming", "Persistence", "Academics"];
let skillsList = document.createElement("ul");

for (let i = 0; i < skills.length; i++) {
  let li = document.createElement("li");
  li.textContent = skills[i];
  skillsList.appendChild(li);
}
document.body.appendChild(skillsList);

<button onclick="showFunFact()">Show Fun Fact</button>

function showFunFact() {
  alert("Fun Fact: I enjoy airsoft.");
}

// Connect Variable to the HTML (ligaments)
document.getElementById("my-name").textContent = myName;
document.getElementById("title").textContent = title;
document.getElementById("experience").textContent = experience;
document.getElementById("education").textContent = education;

console.log("Hello, my name is " + myName);
