const addFormBtn = document.getElementById('addFormBtn');
const gridBoard = document.getElementById('grid-board');
const expenseform = document.getElementById('expenseform');
const exit = document.getElementById('exit');
const addExpense = e =>{
    formData1 = JSON.parse(localStorage.getItem('formData1')) || [];
    formData1.push({
        Item: document.getElementById('expense').value,
        Cost: document.getElementById('cost').value,
    });
    localStorage.setItem('formData1', JSON.stringify(formData1));
    console.log(localStorage.getItem('formData1'));
    document.querySelector('#add-expense').reset();
    document.getElementById('expense').focus();
    displayData();
    e.preventDefault();
}
let add = document.getElementById('addBtn1')
function displayData() {
    console.log(localStorage.getItem('formData1'));
    if(localStorage.getItem('formData1')){
        var output = document.querySelector('tbody');
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('formData1')).forEach((data,index) => {
            output.innerHTML += `
                    <tr>
                        <td>${data.Item}</td>
                        <td>${data.Cost}</td>
                        <td><span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></td>
                    </tr>
            `;
        });
    }
}
displayData();

function deleteTask(index){
    let getLocalStorageData = localStorage.getItem("formData1");
    listArray = JSON.parse(getLocalStorageData);
    listArray.splice(index, 1); //delete or remove the li
    localStorage.setItem("formData1", JSON.stringify(listArray));
    displayData();
}



addFormBtn.onclick = ()=>{
    gridBoard.style.opacity ="0.5"
    expenseform.style.display ="inline-block"
}
exit.onclick = ()=>{
    gridBoard.style.opacity ="1"
    expenseform.style.display ="none"
}