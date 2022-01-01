window.addEventListener('load' , () => {
    console.log(localStorage.getItem('formData'));
    if(localStorage.getItem('formData')){
        var output = document.querySelector('tbody');
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('formData')).forEach(data => {
            output.innerHTML += `
                    <tr>
                        <td>${data.Firstname}</td>
                        <td>${data.Middlename}</td>
                        <td>${data.Lastname}</td>
                        <td>${data.Contact}</td>
                        <td>${data.Email}</td>
                        <td>${data.Amount}</td>
                    </tr>
            `;
        });
    }
});

