const signUp = e =>{
    formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.push({
        Username: document.getElementById('username').value,
        Password: document.getElementById('pword').value,
        Email: document.getElementById('email').value
    });
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(localStorage.getItem('formData'));
    document.querySelector('#register').reset();
    document.getElementById('username').focus();
    e.preventDefault();
}
var x = document.getElementById("login")
var y = document.getElementById("register")
var z = document.getElementById("btn")
const login = document.getElementById("loginBtn")
const regi = document.getElementById("regiBtn")
const login1 = document.getElementById("loginBtn1")
const regi1 = document.getElementById("regiBtn1")


regi.onclick = ()=>{
    x.style.left = "-400px"
    y.style.left = "50px"
    z.style.left = "110px"
    regi.preventDefault();
}

login.onclick = ()=>{
    x.style.left = "50px"
    y.style.left = "450px"
    z.style.left = "0"
    login.preventDefault();
}

login1.onclick = (a)=>{
    const username = document.getElementById("uname").value;
    const password = document.getElementById("psw").value;

    var data = JSON.parse(localStorage.getItem('formData'));    
    for(let i = 0;i < data.length;i++){
        if (username == data[i].Username && password == data[i].Password) {
            window.location.replace("./admin.html");
        }else{
            continue
        }
    }
    a.preventDefault();
}


