const signUp = e =>{
    formData = JSON.parse(localStorage.getItem('formData')) || [];
    formData.push({
        Firstname: document.getElementById('firstname').value,
        Middlename: document.getElementById('middlename').value,
        Lastname: document.getElementById('lastname').value,
        Contact: document.getElementById('contact').value,
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

