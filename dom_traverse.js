// downwards
// traversing using queryselector
const studentList = document.querySelector(".student-list");

const studentB = document.querySelector(".student-b");
studentB.innerHTML = "bbbbbbbbb";

const studentA = studentList.querySelector(".student-a");
studentA.innerHTML = "aaaaaaaaa";

// using children
const studentC = studentList.children[2];
console.log(studentC);

// upwards
// using parent element
console.log(studentC.parentElement);


// sideways
// using nextElementSibling, previousElementSibling
console.log(studentC.nextElementSibling);

// parentElement + children + index
// const studentA = document.querySelector("li");
// const studentList = studentA.parentElement;
// const studentC = studentList.children[2];


