const signUp = e =>{
    formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data=> data.Username.toLowerCase() == document.getElementById('username').value.toLowerCase())
    if(!exist){
        formData.push({
            Firstname: document.getElementById('firstname').value,
            Middlename: document.getElementById('middlename').value,
            Lastname: document.getElementById('lastname').value,
            Contact: document.getElementById('contact').value,
            Email: document.getElementById('email').value,
            Amount: document.getElementById('amount').value,
            Username: document.getElementById('username').value,
            Password: document.getElementById('pword').value  
        });
        e.preventDefault();
    }else{
        alert("Username already exist!")
        e.preventDefault();
    }
    localStorage.setItem('formData', JSON.stringify(formData));
    console.log(localStorage.getItem('formData'));
    document.querySelector('#register').reset();
    document.getElementById('firstname').focus();
    e.preventDefault();
}

