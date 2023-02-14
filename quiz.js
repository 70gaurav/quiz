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
start.onclick = (e) =>{
    e.preventDefault()
    if(user.innerHTML.length===0){
        alert("add user")
    }
    else{
        slide.style.display = "none"
        slide2.style.display = "block"
        user1.innerHTML = uname.value
    }
    
}
create.onclick = () =>{
    createuser.style.display = "block"
}
adduser.onclick = (e) => {
    e.preventDefault()
    createuser.style.display = "none"
    user.innerHTML = uname.value
    if(uname.value.length === 0 ){
        alert("user name cant be empty")
    }
    else{
        alert("user created")
        create.style.display = "none"
        user.style.display = 'block'
    }
}


  startquiz.onclick = () =>{
    const selectedOption = document.querySelector('input[name="option"]:checked').value;
    if(selectedOption === "Music"){
        console.log("gana chalado")
    }
    else if(selectedOption === "Modern Art"){
        console.log("tasweer dikha do")
    }
    else if(selectedOption === "Coding"){
        slide2.style.display = "none"
    }
  }

   
  
