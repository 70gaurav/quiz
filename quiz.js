let create = document.querySelector(".create")
let start = document.querySelector(".start")
let user = document.querySelector(".user")
let createuser = document.querySelector(".input")
let adduser = document.querySelector(".add")
let uname = document.querySelector(".input .name")
let slide = document.querySelector(".wrapper")
start.onclick = (e) =>{
    e.preventDefault()
    if(user.innerHTML.length===0){
        alert("add user")
    }
    else{
        slide.style.display = "none"
    }
    
}
create.onclick = () =>{
    createuser.style.display = "block"
}
adduser.onclick = (e) => {
    e.preventDefault()
    user.style.display = 'block'
    create.style.display = "none"
    createuser.style.display = "none"
    user.innerHTML = uname.value
    alert("user created")
}