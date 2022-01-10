
const loginForm = document.getElementById("loginform");
const regiForm = document.getElementById("registerform");
const btn = document.getElementById("btn");
const loginFormBtn = document.getElementById("loginBtn");
const regiFormBtn = document.getElementById("regiBtn");
const login1 = document.getElementById("loginBtn1");
const regi1 = document.getElementById("regiBtn1");
const passwordBox = document.getElementById("psw");
const showPassword = document.getElementById("show");
const checkBox1 = document.getElementById("check-box1");
const remember = document.getElementById("remember");
const checkBox2 = document.getElementById("check-box2");
const agree = document.getElementById("agree");
const forms = document.getElementById("mainForm");
const mainBoard = document.getElementById("mainBoard");
const clear = document.getElementById("clear"); 
const accountName = document.getElementById('accountName');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = passwordBox.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordBox.setAttribute('type', type);
    // toggle the eye / eye slash icon
    this.classList.toggle('bi-eye');
});
checkBox1.onchange = ()=>{
    
    if (checkBox1.checked == true){
        remember.style.color = "black";
      } else {
        remember.style.color = "gray";
      }
}
checkBox2.onchange = ()=>{
    let color = agree.style.color = '#777'
    if (color == '#777'){
        agree.style.color = "red"
    }else{
        agree.style.color = ''
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
    var adminDb = JSON.parse(localStorage.getItem('adminData'));
    var clientDb  = JSON.parse(localStorage.getItem('clientData'));

    let adminUserExist = adminDb.length && JSON.parse(localStorage.getItem('adminData')).some(data=> data.Username == username && data.Password == password)
    let clientUserExist = clientDb.length && JSON.parse(localStorage.getItem('clientData')).some(data=> data.Username == username && data.Password == password)
    
    if(adminUserExist){
        window.open("./employee.html", "_blank");
        document.getElementById('loginform').reset();
        document.getElementById('uname').focus();
    }else if(clientUserExist){
        CurrentUserDb = JSON.parse(sessionStorage.getItem('currentClientUser')) || [];
        CurrentUserDb.push({
            Current_User: username,
        });
        localStorage.setItem('currentClientUser', JSON.stringify(CurrentUserDb));
        location.replace("./client.html");
    }else{
        alert("Log In Failed!")
        a.preventDefault();
    }
    a.preventDefault();
}

//for generating unique account number
function randomnumber(num1,num2){
    return Math.random() * (num2 - num1) + num1;
}
function randomnumber1(num1,num2){
    return Math.random() * (num2 - num1) + num1;
}
function randomnumber2(num1,num2){
    return Math.random() * (num2 - num1) + num1;
}
function randomnumber3(num1,num2){
    return Math.random() * (num2 - num1) + num1;
}

document.getElementById('accountNumber').value = (`${parseInt(randomnumber(1000,9999))} ${parseInt(randomnumber1(1000,9999))} ${parseInt(randomnumber2(1000,9999))} ${parseInt(randomnumber3(1000,9999))}`)


