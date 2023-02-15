let create = document.querySelector(".create")
let start = document.querySelector(".start")
let user = document.querySelector(".user")
let createuser = document.querySelector(".input")
let adduser = document.querySelector(".add")
let uname = document.querySelector(".input .name")
let slide = document.querySelector(".wrapper")
let slide2 = document.querySelector(".slide2")
let user1 = document.querySelector(".user1")
let anchors = document.querySelectorAll(".music a")
let border = document.querySelector(".border")
let options = document.querySelectorAll(".music input")
let startquiz = document.querySelector("#start-btn")
let codeqs = document.querySelector(".codingqs")
function checkuser() {
  if (sessionStorage.getItem('name')) {
    user.innerHTML = sessionStorage.getItem('name')
    create.style.display = "none"
    user.style.display = 'block'
  }
}
checkuser()
start.onclick = (e) => {
  e.preventDefault()
  if (user.innerHTML.length === 0) {
    alert("add user")
  }
  else {
    slide.style.display = "none"
    slide2.style.display = "block"
    user1.innerHTML = sessionStorage.getItem('name')
  }


}
create.onclick = () => {
  createuser.style.display = "block"
}
adduser.onclick = (e) => {
  e.preventDefault()
  createuser.style.display = "none"
  // user.innerHTML = uname.value
  let inputValue = uname.value
  sessionStorage.setItem("name", inputValue)
  user.innerHTML = sessionStorage.getItem("name")
  if (uname.value.length === 0) {
    alert("user name cant be empty")
  }
  else {
    alert("user created")
    create.style.display = "none"
    user.style.display = 'block'
  }
}


startquiz.onclick = () => {
  const selectedOption = document.querySelector('input[name="option"]:checked').value;
  if (selectedOption === "Music") {
    console.log("gana chalado")
  }
  else if (selectedOption === "Modern Art") {
    console.log("tasweer dikha do")
  }
  else if (selectedOption === "Coding") {
    slide2.style.display = "none"
    codeqs.style.display = "flex"
    loadQuestion()

  }
}


const quizDB = [
  {
    question: "Q1:Which of the following is not a looping structure in PHP?",
    a: "for",
    b: "for each",
    c: "while",
    d: "do-while",
    ans: "ans2"
  },
  {
    question: "Q2:Which of the following is not a type of variable in Swift?",
    a: "string",
    b: "double",
    c: "int",
    d: "object",
    ans: "ans4"
  },
  {
    question: "Q3:Which of the following is used to declare a variable in java?",
    a: "int",
    b: "var",
    c: "let",
    d: "const",
    ans: "ans1"
  },
  {
    question: "Q4:Which of the following is not a data type in javascript?",
    a: "Number",
    b: "String",
    c: "Boolean",
    d: "ArrayList",
    ans: "ans4"
  },
  {
    question: "Q5:Which is the correct syntax for an if statement in python?",
    a: "if condition:",
    b: "if(condition);",
    c: "if:condition",
    d: "if condition",
    ans: "ans1"
  },
  {
    question: "Q6:Which of the following is not a valid operator in C++?",
    a: "*",
    b: "$",
    c: "+",
    d: "-",
    ans: "ans2"
  },
  {
    question: "Q7:What is the correct syntax for a function in Ruby?",
    a: "function name()",
    b: "def name()",
    c: "def name",
    d: "function name",
    ans: "ans2"
  },
  {
    question: "Q8:What is the correct syntax for a loop in c#?",
    a: "for in range(0,10)",
    b: "for i = 0 to 10",
    c: "for (int i = 0;i<=10)",
    d: "for (i =0;i<= 10;i++)",
    ans: "ans4"
  },
  {
    question: "Q9:In which programming language is 'print' used for displaying output ?",
    a: "python",
    b: "javascript",
    c: "java",
    d: "c++",
    ans: "ans1"
  },
  {
    question: "Q10:In which programming language  is '#' used for commenting?",
    a: "javascript",
    b: "java",
    c: "c++",
    d: "python",
    ans: "ans4"
  }
]
let question = document.querySelector(".question")
let option1 = document.querySelector("#option1")
let option2 = document.querySelector("#option2")
let option3 = document.querySelector("#option3")
let option4 = document.querySelector("#option4")
let nextbtn = document.querySelector("#next-btn")
let quitbtn = document.querySelector("quit-btn")
let answers = document.querySelectorAll(".answer")

let questionCount = 0
let loadQuestion = () => {
  let questionList = quizDB[questionCount]
  question.innerHTML= questionList.question
  option1.innerHTML= questionList.a
  option2.innerHTML= questionList.b
  option3.innerHTML= questionList.c
  option4.innerHTML= questionList.d
  

}
getCheckedAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if(curAnsElem.checked){
      answer = curAnsElem.id
    }
  })
  return answer
}
let totalscore = document.querySelector(".score h1")
let scoreslide = document.querySelector(".score")
let score = 0
nextbtn.onclick = () => {
  let checkedAnswer = getCheckedAnswer()
  console.log(checkedAnswer)
  if(checkedAnswer === quizDB[questionCount].ans){
    score++ 
    console.log(score)
  }
  questionCount++
  if(questionCount< quizDB.length){
    loadQuestion()
  }
  else{
    totalscore.innerHTML = score
    codeqs.style.display = "none"
    scoreslide.style.display = "flex"

  }
}




