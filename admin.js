const search = document.getElementById('search')


search.onkeyup = () =>{
    let input, filter,table, tr,td,txtValue;

    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    table = document.getElementById('myTable');
    tr = table.getElementsByTagName('tr');


    for(let i = 0; i<tr.length; i++){
        td=tr[i].getElementsByTagName('td')[0];
        if(td){
            txtValue = td.textContent || td.innerText;
            if(txtValue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}

window.addEventListener('load' , () => {
  display();
});
function display(){
    console.log(localStorage.getItem('formData'));
    if(localStorage.getItem('formData')){
        var output = document.querySelector('tbody');
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('formData')).forEach((data,index) => {
            output.innerHTML += `
                    <tr>
                        <td>${data.Firstname}</td>
                        <td>${data.Middlename}</td>
                        <td>${data.Lastname}</td>
                        <td>${data.Contact}</td>
                        <td>${data.Email}</td>
                        <td>${data.Amount}</td>
                        <td><span class="icon" onclick="deleteTask1(${index})"><i class="fas fa-trash"></i></span></td>
                    </tr>
            `;
        });
    }
}

function deleteTask1(index){
    if(confirm("Are you sure you want to delete?")){
        let getLocalStorageData = localStorage.getItem("formData");
        listArray = JSON.parse(getLocalStorageData);
        listArray.splice(index, 1); //delete or remove the li
        localStorage.setItem("formData", JSON.stringify(listArray));
        display();
    }
}




