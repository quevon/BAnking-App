const signUp = e =>{
    var select = document.getElementById('gender');
    var option = select.options[select.selectedIndex];
    regiDb = JSON.parse(localStorage.getItem('registrationData')) || [];
    let exist = regiDb.length && 
    JSON.parse(localStorage.getItem('registrationData')).some(data=> data.Username.toLowerCase() == document.getElementById('username').value.toLowerCase())  //&& data.Account_Number === document.getElementById('accountNumber').value)
    if(!exist){
        regiDb.push({
            Account_Number: document.getElementById('accountNumber').value,
            Firstname: document.getElementById('firstname').value,
            Middlename: document.getElementById('middlename').value,
            Lastname: document.getElementById('lastname').value,
            Gender: option.value,
            Contact: document.getElementById('contact').value,
            Email: document.getElementById('email').value,
            Gcash_Reciept: document.getElementById('GcashID').value,
            Gcash_Name: document.getElementById('GcashName').value,
            Gcash_Amount: document.getElementById('amount').value,
            Username: document.getElementById('username').value,
            Password: document.getElementById('pword').value  
        });
        localStorage.setItem('registrationData', JSON.stringify(regiDb));
        alert("Registered Successfully")
        document.getElementById('accountNumber').value = (`${parseInt(randomnumber(1000,9999))} ${parseInt(randomnumber1(1000,9999))} ${parseInt(randomnumber2(1000,9999))} ${parseInt(randomnumber3(1000,9999))}`)
        document.getElementById('registerform').reset();
        document.getElementById('firstname').focus();
    }else{
        alert("Username already exist!")
        e.preventDefault();
    }
    e.preventDefault();
}

