const signUp = e =>{
    formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data=> data.Username.toLowerCase() == document.getElementById('username').value.toLowerCase())  //&& data.Account_Number === document.getElementById('accountNumber').value)
    if(!exist){
        formData.push({
            Account_Number: document.getElementById('accountNumber').value,
            Firstname: document.getElementById('firstname').value,
            Middlename: document.getElementById('middlename').value,
            Lastname: document.getElementById('lastname').value,
            Contact: document.getElementById('contact').value,
            Email: document.getElementById('email').value,
            Amount: document.getElementById('amount').value,
            Username: document.getElementById('username').value,
            Password: document.getElementById('pword').value  
        });
        localStorage.setItem('formData', JSON.stringify(formData));
        alert("Registered Successfully")
        document.getElementById('register').reset();
        document.getElementById('firstname').focus();
    }else{
        alert("Username already exist!")
        e.preventDefault();
    }
    console.log(localStorage.getItem('formData'));
    e.preventDefault();
}

