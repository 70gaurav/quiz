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
let previousscore = document.querySelector(".previousscore h1")
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
    sessionStorage.setItem("quizname", "Music")
    slide2.style.display = "none"
    codeqs.style.display = "flex"
    loadQuestion(MusicDb)
  }
  else if (selectedOption === "Modern Art") {
    sessionStorage.setItem("quizname", "ModernArt")
    slide2.style.display = "none"
    codeqs.style.display = "flex"
    loadQuestion(modernArtQuizQuestions)
  }
  else if (selectedOption === "Coding") {
    slide2.style.display = "none"
    codeqs.style.display = "flex"
    sessionStorage.setItem("quizname", "coding")
    loadQuestion(quizDB)
    settimer()

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
const modernArtQuizQuestions = [
  {
    question: 'Q1:Which artist is known for his "Campbell\'s Soup Cans" painting series?',
    a: 'Pablo Picasso',
    b: 'Andy Warhol',
    c: 'Vincent van Gogh',
    d: 'Salvador Dali',
    ans: 'ans2'
  },
  {
    question: 'Q2:What is the name of the Dutch painter who created "The Starry Night"?',
    a: 'Rembrandt van Rijn',
    b: 'Jan Vermeer',
    c: 'Johannes Vermeer',
    d: 'Vincent van Gogh',
    ans: 'ans4'
  },
  {
    question: 'Q3:Which artist is known for his "drip painting" technique?',
    a: 'Pablo Picasso',
    b: 'Jackson Pollock',
    c: 'Salvador Dali',
    d: 'Claude Monet',
    ans: 'ans2'
  },
  {
    question: 'Q4:What is the name of the artist who created the "Black Square" painting?',
    a: 'Kazimir Malevich',
    b: 'Piet Mondrian',
    c: 'Wassily Kandinsky',
    d: 'Marcel Duchamp',
    ans: 'ans1'
  },
  {
    question: 'Q5:Which female artist is known for her abstract expressionist paintings?',
    a: 'Frida Kahlo',
    b: 'Joan Mitchell',
    c: 'Georgia O\'Keeffe',
    d: 'Louise Bourgeois',
    ans: 'ans2'
  },
  {
    question: 'Q6:What is the name of the artist who created the "Guernica" painting, which depicts the bombing of a Spanish town during the Spanish Civil War?',
    a: 'Pablo Picasso',
    b: 'Salvador Dali',
    c: 'Claude Monet',
    d: 'Vincent van Gogh',
    ans: 'ans1'
  },
  {
    question: 'Q7:Who created the sculpture "The Thinker", which depicts a man in deep thought?',
    a: 'Auguste Rodin',
    b: 'Alberto Giacometti',
    c: 'Henry Moore',
    d: 'Constantin Brancusi',
    ans: 'ans1'
  }]
const MusicDb = [{
  question: "Q1:What was the first music video played on MTV?",
  a: "Thriller by Michael Jackson",
  b: "Video Killed the Radio Star by The Buggles",
  c: "I Want My MTV by Dire Straits",
  d: "Billie Jean by Michael Jackson",
  ans: "ans2"
},
{
  question: "Q2:What is the best-selling album of all time?",
  a: "The Bodyguard Soundtrack by Whitney Houston",
  b: "Back in Black by AC/DC",
  c: "Thriller by Michael Jackson",
  d: "The Dark Side of the Moon by Pink Floyd",
  ans: "ans3"
},
{
  question: "Q3:Who won the first American Idol competition in 2002?",
  a: "Kelly Clarkson",
  b: "Carrie Underwood",
  c: "Ruben Studdard",
  d: "Fantasia Barrino",
  ans: "ans1"
},
{
  question: "Q4:Which band recorded the album 'Dark Side of the Moon'?",
  a: "Led Zeppelin",
  b: "The Beatles",
  c: "Pink Floyd",
  d: "The Rolling Stones",
  ans: "ans3"
},
{
  question: "Q5:Which pop star released an album titled '1989'?",
  a: "Taylor Swift",
  b: "Adele",
  c: "Lady Gaga",
  d: "Beyoncé",
  ans: "ans1"
},
{
  question: "Q6:Which of these is NOT a Beatles song?",
  a: "Hey Jude", b:
    "Yellow Submarine",
  c: "Bohemian Rhapsody",
  d: "Let it Be",
  ans: "ans3"
},
{
  question: "Q7:What was the first music album to be released on CD?",
  a: "Brothers in Arms by Dire Straits",
  b: "Thriller by Michael Jackson",
  c: "The Beatles (White Album) by The Beatles",
  d: "Parallel Lines by Blondie",
  ans: "ans1"
},
{
  question: "Q8:Which pop singer was born Stefani Joanne Angelina Germanotta?",
  a: "Katy Perry",
  b: "Lady Gaga",
  c: "Rihanna",
  d: "Adele",
  ans: "ans2"
},
{
  question: "Q9:Which band had a hit in the 1990s with the song 'Losing My Religion'?",
  a: "Nirvana",
  b: "Pearl Jam",
  c: "REM",
  d: "Soundgarden",
  ans: "ans3"
},
{
  question: "Q10:Which of these is a song by the rock band Queen?",
  a: "Purple Haze",
  b: "Sweet Child O' Mine",
  c: "Bohemian Rhapsody",
  d: "Stairway to Heaven",
  ans: "ans3"
}]

let question = document.querySelector(".question")
let option1 = document.querySelector("#option1")
let option2 = document.querySelector("#option2")
let option3 = document.querySelector("#option3")
let option4 = document.querySelector("#option4")
let nextbtn = document.querySelector("#next-btn")
let quitbtn = document.querySelector("#quit-btn")
let answers = document.querySelectorAll(".answer")
let home = document.querySelector(".home")
home.onclick = (e) => {
e.preventDefault()
slide2.style.display = "none"
slide.style.display = "block"
}

let questionCount = 0
let loadQuestion = (data) => {
  let questionList = data[questionCount]
  question.innerHTML = questionList.question
  option1.innerHTML = questionList.a
  option2.innerHTML = questionList.b
  option3.innerHTML = questionList.c
  option4.innerHTML = questionList.d


}
getCheckedAnswer = () => {
  let answer;
  answers.forEach((curAnsElem) => {
    if (curAnsElem.checked) {
      answer = curAnsElem.id
    }
  })
  return answer
}
let time = document.querySelector(".timeline span")
let totalscore = document.querySelector(".scorecard h1")
let scoreslide = document.querySelector(".score")
let score = 0
nextbtn.onclick = () => {
  let checkedAnswer = getCheckedAnswer()
  if (sessionStorage.getItem("quizname") === "coding") {
    if (checkedAnswer === quizDB[questionCount].ans) {
      score++
      console.log(score)
    }
    questionCount++
    if (questionCount < quizDB.length) {
      loadQuestion(quizDB)
    }
    else {
      questionCount = 0
     let scored = "You have Scored " + score + " " + "out of 10 in" + " " + sessionStorage.getItem("quizname") + "quiz"
     totalscore.innerHTML = scored
     sessionStorage.setItem("last score", "In your last quiz"+ scored)
     previousscore.innerHTML = sessionStorage.getItem("last score")
      sessionStorage.setItem("you have scored ", score)
      codeqs.style.display = "none"
      scoreslide.style.display = "flex"

    }
  }
  if (sessionStorage.getItem("quizname") === "ModernArt") {
    if (checkedAnswer === modernArtQuizQuestions[questionCount].ans) {
      score++
      console.log(score)
    }
    questionCount++
    if (questionCount < modernArtQuizQuestions.length) {
      loadQuestion(modernArtQuizQuestions)
    }
    else {
      questionCount = 0
      let scored = "You have Scored " + score + " " + "out of 7 in" + " " + sessionStorage.getItem("quizname") + "quiz"
      totalscore.innerHTML = scored
      sessionStorage.setItem("last score", "In your last quiz"+ scored)
      previousscore.innerHTML = sessionStorage.getItem("last score")
      sessionStorage.setItem("you have scored ", score)
      codeqs.style.display = "none"
      scoreslide.style.display = "flex"

    }
  }
  if (sessionStorage.getItem("quizname") === "Music") {
    if (checkedAnswer === MusicDb[questionCount].ans) {
      score++
      console.log(score)
    }
    questionCount++
    if (questionCount < MusicDb.length) {
      loadQuestion(MusicDb)
    }
    else {
      questionCount = 0
      let scored = "You have Scored " + score + " " + "out of 10 in" + " " + sessionStorage.getItem("quizname") + "quiz"
      totalscore.innerHTML = scored
      sessionStorage.setItem("last score", "In your last quiz"+ scored)
      previousscore.innerHTML = sessionStorage.getItem("last score")
      sessionStorage.setItem("you have scored ", score)
      codeqs.style.display = "none"
      scoreslide.style.display = "flex"

    }
  }
}
quitbtn.onclick = () => {
  alert("don't quit you can do this")

}
let playagain = document.querySelector(".Playagain")
let quit = document.querySelector(".quit")
let prev = document.querySelector(".prev")
  playagain.onclick = () => {
  scoreslide.style.display = "none"
  slide2.style.display = "block"
}
quit.onclick =() => {
  scoreslide.style.display = "none"
  slide2.style.display = "block"

}
let loadscore = document.querySelector(".loadscore a")
loadscore.onclick = (e) =>{
e.preventDefault()
slide2.style.display = "none"
prev.style.display = "block"
}
let goback = document.querySelector(".goback")
goback.onclick = () =>{
  slide2.style.display = "block"
prev.style.display = "none"
}







