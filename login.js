
const loginForm = document.getElementById("loginform")
const regiForm = document.getElementById("registerform")
const btn = document.getElementById("btn")
const loginFormBtn = document.getElementById("loginBtn")
const regiFormBtn = document.getElementById("regiBtn")
const login1 = document.getElementById("loginBtn1")
const regi1 = document.getElementById("regiBtn1")
const passwordBox = document.getElementById("psw")
const checkBox = document.getElementById("check-box")
const show = document.getElementById("show")
const checkBox1 = document.getElementById("check-box1")
const remember = document.getElementById("remember")
const checkBox2 = document.getElementById("check-box2")
const agree = document.getElementById("agree")
const forms = document.getElementById("mainForm")
const mainBoard = document.getElementById("mainBoard")
const clear = document.getElementById("clear")

function uncheck() {
    document.getElementById("payment").checked = false;
  }

clear.onclick = () =>{
    document.getElementById('firstname').value = ""
    document.getElementById('middlename').value = ""
    document.getElementById('lastname').value = ""
    document.getElementById('contact').value = ""
    document.getElementById('email').value = ""
    document.getElementById('amount').value = ""
    document.getElementById('username').value = ""
    document.getElementById('pword').value = ""
   uncheck()
}

checkBox.onchange = ()=>{
    let typeAttribute = passwordBox.getAttribute('type');
    if(typeAttribute == 'password'){
        passwordBox.setAttribute('type','text');
    }else{
        passwordBox.setAttribute('type','password');
    }
}

checkBox1.onclick = ()=>{
    remember.style.color = "#000"
}

checkBox2.onchange = ()=>{
    let color = agree.style.color = '#777'
    if (color == '#777'){
        agree.style.color = "red"
    }else{
        agree.style.color = '#777'
    }
}

regiFormBtn.onclick = ()=>{
    loginForm.style.left = "-400px"
    regiForm.style.left = "50px"
    btn.style.left = "110px"
}

loginFormBtn.onclick = ()=>{
    loginForm.style.left = "50px"
    regiForm.style.left = "450px"
    btn.style.left = "0"
}
login1.onclick = (a)=>{
    const username = document.getElementById("uname").value;
    const password = document.getElementById("psw").value;
   
    var data = JSON.parse(localStorage.getItem('formData'));
    
    if(username == data[0].Username && password == data[0].Password){
        window.location.replace("./admin.html");
    }
    for(let i = 1;i < data.length;i++){
        if (username == data[i].Username && password == data[i].Password) {
            forms.style.display = "none";
            mainBoard.style.display = "inline-block";
            usernameHeader.innerHTML = data[i].Username
            output.innerHTML = data[i].Amount
        }else{
            continue
        }
    }
    
    a.preventDefault();
}



