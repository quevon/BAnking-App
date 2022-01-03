const addFormBtn = document.getElementById('addFormBtn');
const depositFormBtn = document.getElementById('depositFormBtn');
const withdrawFormBtn = document.getElementById('withdrawFormBtn');
const gridBoard = document.getElementById('grid-board');
const expenseform = document.getElementById('expenseform');
const depositform = document.getElementById('depositform');
const withdrawform = document.getElementById('withdrawform');
const sendMoneyForm = document.getElementById('sendMoneyForm');
const add1 = document.getElementById('addBtn1');
const output = document.getElementById("currentBalance");
const expenseExit = document.getElementById('exit');
const depositExit = document.getElementById('exit1');
const depositBtn = document.getElementById('depositBtn');
const withdrawExit = document.getElementById('exit2');
const withdrawBtn = document.getElementById('withdrawBtn');
const sendMoneyFormBtn = document.getElementById('sendMoneyFormBtn');
const sendMoneyExit = document.getElementById('exit3');
const usernameHeader = document.getElementById('usernameHeader');
const accountNumber = document.getElementById('account-number');
const inputAccount = document.getElementById('recieverAccountNumber');

inputAccount.onkeyup = e => {
    var receiverMoney = document.getElementById('receiverMoney')
    var inputAccount1 = document.getElementById('recieverAccountNumber');
    var receiverName = document.getElementById('recieverName')

    let getLocalStorageData2 = localStorage.getItem("formData");   
    listArray2 = JSON.parse(getLocalStorageData2); 
    console.log(listArray2);
    objIndex = listArray2.findIndex((obj => obj.Account_Number == inputAccount1.value));

    receiverName.innerHTML = listArray2[objIndex].Firstname;
    receiverMoney.value = listArray2[objIndex].Amount;
}
 
const sendMoney = e =>{
    var inputAccount = document.getElementById('recieverAccountNumber')
    var inputAmount = document.getElementById('sendMoneyValue').value;
    var receiverMoney = document.getElementById('receiverMoney').value;
    var total = document.getElementById('current_money2');
    var totalbalanceReciever = document.getElementById('receiver_money2');
    
    var currentBalance = output.innerHTML;
    if (parseFloat(currentBalance) < parseFloat(inputAmount)){
        alert("You don't have enough balance!")
        currentBalance
        e.preventDefault();
    }else{
        var totalAmount = parseFloat(currentBalance) - parseFloat(inputAmount);
        total.innerHTML = totalAmount;
        var totalAmount2 = parseFloat(inputAmount) + parseFloat(receiverMoney);
        totalbalanceReciever.innerHTML = totalAmount2;
        //update the balance of the sender
        let getLocalStorageData3 = localStorage.getItem("formData");   
        listArray3 = JSON.parse(getLocalStorageData3); 
        console.log(listArray3);
        objIndex = listArray3.findIndex((obj => obj.Username == usernameHeader.innerHTML));
        console.log("Before update: ", listArray3[objIndex]);
        listArray3[objIndex].Amount = totalAmount;
        console.log("After update: ", listArray3[objIndex]);
        output.innerHTML = listArray3[objIndex].Amount; 
        localStorage.setItem('formData', JSON.stringify(listArray3));
        //update the balance of the receiver
        let getLocalStorageData4 = localStorage.getItem("formData");   
        listArray4 = JSON.parse(getLocalStorageData4); 
        console.log(listArray4);
        objIndex = listArray4.findIndex((obj => obj.Account_Number == inputAccount.value));
        console.log("Before update: ", listArray4[objIndex]);
        listArray4[objIndex].Amount = totalAmount2;
        console.log("After update: ", listArray4[objIndex]);
        localStorage.setItem('formData', JSON.stringify(listArray4));
        document.getElementById('recieverName').innerHTML = '';
        document.getElementById('sendMoneyForm1').reset();
        document.getElementById('recieverAccountNumber').focus();
        e.preventDefault();
    }
   
    //Find index of specific object using findIndex method.
    
}
const deposit = e =>{
    var inputAmount = document.getElementById('depositValue').value;
    var total = document.getElementById('current_money');
    var currentBalance = output.innerHTML;
    var totalAmount = parseFloat(inputAmount) + parseFloat(currentBalance);
    total.innerHTML = totalAmount;
    //Find index of specific object using findIndex method.
    let getLocalStorageData1 = localStorage.getItem("formData");   
    listArray1 = JSON.parse(getLocalStorageData1); 
    console.log(listArray1);
    objIndex = listArray1.findIndex((obj => obj.Username == usernameHeader.innerHTML));
    console.log("Before update: ", listArray1[objIndex]);
    listArray1[objIndex].Amount = totalAmount;
    console.log("After update: ", listArray1[objIndex]);
    output.innerHTML = listArray1[objIndex].Amount; 
    localStorage.setItem('formData', JSON.stringify(listArray1));
    document.getElementById('depositForm1').reset();
    document.getElementById('depositValue').focus();
    e.preventDefault();
}
const widthDraw = e =>{
    var inputAmount = document.getElementById('withdrawValue').value;
    var total = document.getElementById('current_money1');
    var currentBalance = output.innerHTML;
    if (parseFloat(currentBalance) < parseFloat(inputAmount)){
        alert("You don't have enough balance!")
        currentBalance
        e.preventDefault();
    }else{
        var totalAmount = parseFloat(currentBalance) - parseFloat(inputAmount);
        total.innerHTML = totalAmount;
        let getLocalStorageData2 = localStorage.getItem("formData");   
        listArray2 = JSON.parse(getLocalStorageData2); 
        console.log(listArray2);
        objIndex = listArray2.findIndex((obj => obj.Username == usernameHeader.innerHTML));
        console.log("Before update: ", listArray2[objIndex]);
        listArray2[objIndex].Amount = totalAmount;
        console.log("After update: ", listArray2[objIndex]);
        output.innerHTML = listArray2[objIndex].Amount; 
        localStorage.setItem('formData', JSON.stringify(listArray2));
        document.getElementById('withdrawform1').reset();
        document.getElementById('withdrawValue').focus();
        e.preventDefault();
    }
   
    //Find index of specific object using findIndex method.
    
}
const addExpense = e =>{
    formData1 = JSON.parse(localStorage.getItem('formData1')) || [];
    formData1.push({
        Username: document.getElementById('usernameHeader').innerText,
        Item: document.getElementById('expense').value,
        Cost: document.getElementById('cost').value,
    });
    localStorage.setItem('formData1', JSON.stringify(formData1));
    displayData();
    document.getElementById('addExpensesForm').reset();
    document.getElementById('expense').focus();
    e.preventDefault();
}
displayData();

let add = document.getElementById('addBtn1')
function displayData() {
    console.log(localStorage.getItem('formData1'));
    if(localStorage.getItem('formData1')){

        var output = document.querySelector('tbody');
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('formData1')).forEach((data,index) => {
            output.innerHTML += `
                    <tr>
                        <td>${data.Username}</td>
                        <td>${data.Item}</td>
                        <td>${data.Cost}</td>
                        <td><span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></td>
                    </tr>
            `;
        });
    }
}

window.onmouseover = () =>{
    let input, filter,table, tr,td,txtValue;

    input = document.getElementById('usernameHeader');
    filter = input.innerHTML.toUpperCase();
    table = document.getElementById('myTable2');
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
function deleteTask(index){
    if(confirm("Are you sure you want to delete?")){
        let getLocalStorageData = localStorage.getItem("formData1");
        listArray = JSON.parse(getLocalStorageData);
        listArray.splice(index, 1); //delete or remove the li
        localStorage.setItem("formData1", JSON.stringify(listArray));
        displayData();
    }
}
//show input form
depositFormBtn.onclick = ()=>{
    gridBoard.style.opacity =".5"
    depositform.style.display ="inline-block"
}
depositExit.onclick = ()=>{
    gridBoard.style.opacity ="1"
    depositform.style.display ="none"
}
addFormBtn.onclick = ()=>{
    gridBoard.style.opacity =".5"
    expenseform.style.display ="inline-block"
}
expenseExit.onclick = ()=>{
    gridBoard.style.opacity ="1"
    expenseform.style.display ="none"
}
withdrawFormBtn.onclick = ()=>{
    gridBoard.style.opacity =".5"
    withdrawform.style.display ="inline-block"
}
withdrawExit.onclick = ()=>{
    gridBoard.style.opacity ="1"
    withdrawform.style.display ="none"
}
sendMoneyFormBtn.onclick = ()=>{
    gridBoard.style.opacity =".5"
    sendMoneyForm.style.display ="inline-block"
}
sendMoneyExit.onclick = ()=>{
    gridBoard.style.opacity ="1"
    sendMoneyForm.style.display ="none"
}
// const trees = [
//     { name: "birch", count: 4 },
//     { name: "maple", count: 5 },
//     { name: "oak", count: 2 }
//   ];
  
//   const result = trees.find(tree => tree.name === "oak");

//   console.log(result.name);

//Initailize array of objects.
// let myArray = [
//     {id: 0, name: "Jhon"},
//     {id: 1, name: "Sara"},
//     {id: 2, name: "Domnic"},
//     {id: 3, name: "Bravo"}
//   ],
      
//   //Find index of specific object using findIndex method.    
//   objIndex = myArray.findIndex((obj => obj.id == 1));
  
//   //Log object to Console.
//   console.log("Before update: ", myArray[objIndex])
  
//   //Update object's name property.
//   myArray[objIndex].name = "Laila"
  
//   //Log object to console again.
//   console.log("After update: ", myArray[objIndex])