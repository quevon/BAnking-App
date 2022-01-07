const addFormBtn = document.getElementById('addFormBtn');
const depositFormBtn = document.getElementById('depositFormBtn');
const withdrawFormBtn = document.getElementById('withdrawFormBtn');
const gridBoard = document.getElementById('grid-board');
const expenseform = document.getElementById('expenseform');
const addExpensesFormEdit = document.getElementById('addExpensesFormEdit')
const editFormExit = document.getElementById('exit4')
const expenseformEdit = document.getElementById('expenseformEdit')
const depositform = document.getElementById('depositform');
const withdrawform = document.getElementById('withdrawform');
const sendMoneyForm = document.getElementById('sendMoneyForm');
const add1 = document.getElementById('addBtn1');
const expenseExit = document.getElementById('exit');
const depositExit = document.getElementById('exit1');
const depositBtn = document.getElementById('depositBtn');
const withdrawExit = document.getElementById('exit2');
const withdrawBtn = document.getElementById('withdrawBtn');
const sendMoneyFormBtn = document.getElementById('sendMoneyFormBtn');
const sendMoneyExit = document.getElementById('exit3');
const transactionForm = document.getElementById('transactionForm');
const transactionFormBtn = document.getElementById('transactionFormBtn')
const transactionExit = document.getElementById('exit5');
const usernameHeader = document.getElementById('usernameHeader');
const accountNumber = document.getElementById('account-number');
const accountBalance = document.getElementById("currentBalance");
const accountName = document.getElementById("accountName");
const inputAccount = document.getElementById('recieverAccountNumber');
const depositShowHistory = document.getElementById('depositShowHistory')
const withdrawShowHistory = document.getElementById('withdrawShowHistory');
const sentMoneyShowHistory = document.getElementById('sentMoneyShowHistory');
const depositTable = document.getElementById('depositTable');
const depositExitHistory = document.getElementById('exit6')
const withdrawTable = document.getElementById('withdrawTable');
const withdrawExitHistory = document.getElementById('exit7')
const sentMoneyTable = document.getElementById('sentMoneyTable');
const sentMoneyExitHistory = document.getElementById('exit8');
const menu_bar = document.getElementById('menu-bar');
const menu_bar1 = document.getElementById('menu-bar1');
const sideBar = document.getElementById('sideBar');
const displayDate = document.getElementById('date');
const logOut = document.getElementById('logOut');
const today = new Date();
const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
var dt = new Date();
var hours = dt.getHours() ; // gives the value in 24 hours format
var AmOrPm = hours >= 12 ? 'pm' : 'am';
hours = (hours % 12) || 12;
var minutes = dt.getMinutes() ;
var finalTime = hours + ":" + minutes + " " + AmOrPm; 

menu_bar1.onclick = () =>{
    sideBar.style.left = "0"
}
menu_bar.onclick = () =>{
    sideBar.style.left = "-232px"
}
displayDate.innerHTML = date
window.onload = () =>{
    
    let getCurrentUser = localStorage.getItem("formData3")
    listArray = JSON.parse(getCurrentUser);
    usernameHeader.innerHTML =  listArray[0].Current_User
    let getLocalStorageData3 = localStorage.getItem("formData");   
    listArray3 = JSON.parse(getLocalStorageData3);    
    objIndex = listArray3.findIndex((obj => obj.Username == usernameHeader.innerHTML));
    accountNumber.innerHTML = listArray3[objIndex].Account_Number
    accountBalance.innerHTML = listArray3[objIndex].Amount
    accountName.innerHTML = `${listArray3[objIndex].Firstname} ${listArray3[objIndex].Lastname}`

    let filter,table,tr

    filter = accountNumber.innerHTML;
    table = document.getElementById('myTable2');
    tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
 
}

//send money
inputAccount.onkeyup = e => {
    var receiverMoney = document.getElementById('receiverMoney')
    var inputAccount1 = document.getElementById('recieverAccountNumber');
    var receiverName = document.getElementById('recieverName')

    let getLocalStorageData2 = localStorage.getItem("formData");   
    listArray2 = JSON.parse(getLocalStorageData2); 
    console.log(listArray2);
    objIndex = listArray2.findIndex((obj => obj.Account_Number == inputAccount1.value));

    receiverName.innerHTML = `${listArray2[objIndex].Firstname} ${listArray2[objIndex].Lastname}`;
    receiverMoney.value = listArray2[objIndex].Amount;
}
 
const sendMoney = e =>{
    var inputAccount = document.getElementById('recieverAccountNumber')
    var inputAmount = document.getElementById('sendMoneyValue').value;
    var receiverMoney = document.getElementById('receiverMoney').value;
    var total = document.getElementById('current_money2');
    var totalbalanceReciever = document.getElementById('receiver_money2');
    var currentBalance = accountBalance.innerHTML;
    var data = JSON.parse(localStorage.getItem('formData'));
    let exist = data.length && 
    JSON.parse(localStorage.getItem('formData')).some(data1=> data1.Account_Number == document.getElementById("recieverAccountNumber").value)
    if(!exist){
        alert("Receiver doesn't exist!")
        e.preventDefault();
    }else if(parseFloat(currentBalance) < parseFloat(inputAmount)){
        alert("You don't have enough balance!")
        currentBalance
        e.preventDefault();
    }else{
        var totalAmount = parseFloat(currentBalance) - parseFloat(inputAmount);
        total.innerHTML = totalAmount;
        var totalAmount2 = parseFloat(inputAmount) + parseFloat(receiverMoney);
        totalbalanceReciever.innerHTML = totalAmount2;

        sentMoneyData = JSON.parse(localStorage.getItem('sentMoneyData')) || [];
        sentMoneyData.push({
            Account_Number: document.getElementById('account-number').innerHTML,
            Date: date,
            Time: finalTime,
            Reciever_Account_No: document.getElementById('recieverAccountNumber').value,
            Reciever_Account_Name: document.getElementById('recieverName').innerHTML,
            Sent_Amount: document.getElementById('sendMoneyValue').value,
            Balance: totalAmounta,
        });
        localStorage.setItem('sentMoneyData', JSON.stringify(sentMoneyData));
        //update the balance of the sender
        let getLocalStorageData3 = localStorage.getItem("formData");   
        listArray3 = JSON.parse(getLocalStorageData3); 
        console.log(listArray3);
        objIndex = listArray3.findIndex((obj => obj.Username == usernameHeader.innerHTML));
        listArray3[objIndex].Amount = totalAmount;
        localStorage.setItem('formData', JSON.stringify(listArray3));
        //update the balance of the receiver
        let getLocalStorageData4 = localStorage.getItem("formData");   
        listArray4 = JSON.parse(getLocalStorageData4); 
        console.log(listArray4);
        objIndex = listArray4.findIndex((obj => obj.Account_Number == inputAccount.value));
        listArray4[objIndex].Amount = totalAmount2;
        localStorage.setItem('formData', JSON.stringify(listArray4));
        document.getElementById('recieverName').innerHTML = '';
        document.getElementById('sendMoneyForm1').reset();
        document.getElementById('recieverAccountNumber').focus();
        alert("Sent Successfully!")
    }

}
//deposit
const deposit = e =>{
    var inputAmount = document.getElementById('depositValue').value;
    var total = document.getElementById('current_money');
    var currentBalance = accountBalance.innerHTML;
    var totalAmount = parseFloat(inputAmount) + parseFloat(currentBalance);
    total.innerHTML = totalAmount;

    depositData = JSON.parse(localStorage.getItem('depositData')) || [];
    depositData.push({
        Account_Number: document.getElementById('account-number').innerHTML,
        Date: date,
        Time: finalTime,
        Deposit_Amount: document.getElementById('depositValue').value,
        Balance: totalAmount,
    });
    localStorage.setItem('depositData', JSON.stringify(depositData));

    let getLocalStorageData1 = localStorage.getItem("formData");   
    listArray1 = JSON.parse(getLocalStorageData1); 
    console.log(listArray1);
    objIndex = listArray1.findIndex((obj => obj.Username == usernameHeader.innerHTML));
    listArray1[objIndex].Amount = totalAmount; 
    localStorage.setItem('formData', JSON.stringify(listArray1));
    
    document.getElementById('depositForm1').reset();
    document.getElementById('depositValue').focus();
    alert("Deposit Successful")
    
}
const widthDraw = e =>{
    var inputAmount = document.getElementById('withdrawValue').value;
    var total = document.getElementById('current_money1');
    var currentBalance = accountBalance.innerHTML;
    if (parseFloat(currentBalance) < parseFloat(inputAmount)){
        alert("You don't have enough balance!")
        currentBalance
        e.preventDefault();
    }else{
        var totalAmount = parseFloat(currentBalance) - parseFloat(inputAmount);
        total.innerHTML = totalAmount;

        withdrawData = JSON.parse(localStorage.getItem('withdrawData')) || [];
        withdrawData.push({
            Account_Number: document.getElementById('account-number').innerHTML,
            Date: date,
            Time: finalTime,
            Withdraw_Amount: document.getElementById('withdrawValue').value,
            Balance: totalAmount,
        });

        localStorage.setItem('withdrawData', JSON.stringify(withdrawData));
        let getLocalStorageData2 = localStorage.getItem("formData");   
        listArray2 = JSON.parse(getLocalStorageData2); 
        console.log(listArray2);
        objIndex = listArray2.findIndex((obj => obj.Username == usernameHeader.innerHTML));
        listArray2[objIndex].Amount = totalAmount;
        localStorage.setItem('formData', JSON.stringify(listArray2));
        document.getElementById('withdrawform1').reset();
        document.getElementById('withdrawValue').focus();
        alert("Withdraw Successful")
    }
}
const addExpense = e =>{
    var currentBalance = accountBalance.innerHTML;
    var cost = document.getElementById('cost').value;
    var total = document.getElementById('current_money3');
    if (parseFloat(currentBalance) < parseFloat(cost)){
        alert("You don't have enough balance!")
        e.preventDefault();
    }else{
        var totalAmount = parseFloat(currentBalance) - parseFloat(cost);
        total.innerHTML = totalAmount;
        let getLocalStorageData2 = localStorage.getItem("formData");   
        listArray2 = JSON.parse(getLocalStorageData2); 
        console.log(listArray2);
        objIndex = listArray2.findIndex((obj => obj.Username == usernameHeader.innerHTML));
        listArray2[objIndex].Amount = totalAmount;
        accountBalance.innerHTML = listArray2[objIndex].Amount; 
        localStorage.setItem('formData', JSON.stringify(listArray2));
        formData1 = JSON.parse(localStorage.getItem('formData1')) || [];
        formData1.push({
            Account_Number: document.getElementById('account-number').innerText,
            Date: document.getElementById('date').innerText,
            Item: document.getElementById('expense').value,
            Cost:document.getElementById('cost').value,
        });
        localStorage.setItem('formData1', JSON.stringify(formData1));
        document.getElementById('addExpensesForm').reset();
        document.getElementById('expense').focus();
        alert("Added expense")
        window.location.reload()
    }
}

function displayData() {
    console.log(localStorage.getItem('formData1'));
    if(localStorage.getItem('formData1')){

        var output = document.querySelector('tbody');
        accountBalance.innerHTML = "";
        JSON.parse(localStorage.getItem('formData1')).forEach((data,index) => {
            output.innerHTML += `
                    <tr>
                        <td>${data.Account_Number}</td>
                        <td>${data.Date}</td>
                        <td>${data.Item}</td>
                        <td>${data.Cost}</td>
                        <td><span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span><span class="icon" onclick="editTask()"><i class="fas fa-pen"></i></span></td>
                    </tr>
            `;
        });
    }
}
displayData();
function deleteTask(index){
    if(confirm("Are you sure you want to delete?")){

        let getLocalStorageData = localStorage.getItem("formData1");
        listArray = JSON.parse(getLocalStorageData);
        listArray.splice(index, 1); //delete or remove the li
        localStorage.setItem("formData1", JSON.stringify(listArray));
        window.location.reload()
    }
}

var table = document.getElementById('myTable2'),rIndex;

for(var i = 0; i < table.rows.length;i++){
    table.rows[i].onclick = function(){
    rIndex = this.rowIndex;
    document.getElementById('editExpense').value = this.cells[2].innerHTML;
    document.getElementById('itemIndex').innerHTML = this.cells[2].innerHTML;
    document.getElementById('editCost').value = this.cells[3].innerHTML;
};
}

function editTask(){
    gridBoard.style.opacity =".5"
    expenseformEdit.style.display ="inline-block"
}
function editRow(e){
    var newExpenseName = document.getElementById('editExpense').value;
    var newCost = document.getElementById('editCost').value;
    var indexofrows = document.getElementById('itemIndex').innerHTML;
    let getLocalStorageData2 = localStorage.getItem("formData1");   
    listArray2 = JSON.parse(getLocalStorageData2); 
    objIndex = listArray2.findIndex((obj => obj.Item ==  indexofrows));
    listArray2[objIndex].Item = newExpenseName
    listArray2[objIndex].Cost = newCost
    localStorage.setItem('formData1', JSON.stringify(listArray2)) 
}
editFormExit.onclick = () =>{
    gridBoard.style.opacity ="1"
    expenseformEdit.style.display ="none"
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
transactionFormBtn.onclick = ()=>{
    gridBoard.style.opacity =".5"
    transactionForm.style.display ="inline-block"
}
transactionExit.onclick = ()=>{
    gridBoard.style.opacity ="1"
    transactionForm.style.display ="none"
}
depositShowHistory.onclick = ()=>{
    depositTable.style.display ="inline-block"
    displayDepositHistory()
    let filter,table,tr

    filter = accountNumber.innerHTML;
    table = document.getElementById('depositTableHistory');
    tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
depositExitHistory.onclick  = ()=>{
    depositTable.style.display = "none"
}
sentMoneyShowHistory.onclick = ()=>{
    sentMoneyTable.style.display = "inline-block"
    sentMoneyDisplayHistory();
    let filter,table,tr

    filter = accountNumber.innerHTML;
    table = document.getElementById('sentMoneyTableHistory');
    tr = table.getElementsByTagName('tr');
    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
sentMoneyExitHistory.onclick  = ()=>{
    sentMoneyTable.style.display = "none"
}
withdrawShowHistory.onclick = ()=>{
    withdrawTable.style.display ="inline-block"
    withdrawDisplayHistory();
    let filter,table,tr

    filter = accountNumber.innerHTML;
    table = document.getElementById('withdrawTableHistory');
    tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
withdrawExitHistory.onclick  = ()=>{
    withdrawTable.style.display = "none"
}

function displayDepositHistory(){
    console.log(localStorage.getItem('depositData'));
    if(localStorage.getItem('depositData')){
        var output = document.getElementById('depositBody');
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('depositData')).forEach(data => {
            output.innerHTML += `
                    <tr>
                        <td>${data.Account_Number}</td>
                        <td>${data.Date}</td>
                        <td>${data.Time}</td>
                        <td>${data.Deposit_Amount}</td>
                        <td>${data.Balance}</td>
                    </tr>
            `;
        });
    }
}
function withdrawDisplayHistory(){
    console.log(localStorage.getItem('withdrawData'));
    if(localStorage.getItem('withdrawData')){
        var output = document.getElementById('withdrawBody');
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('withdrawData')).forEach(data => {
            output.innerHTML += `
                    <tr>
                        <td>${data.Account_Number}</td>
                        <td>${data.Date}</td>
                        <td>${data.Time}</td>
                        <td>${data.Withdraw_Amount}</td>
                        <td>${data.Balance}</td>
                    </tr>
            `;
        });
    }
}
function sentMoneyDisplayHistory(){
    console.log(localStorage.getItem('sentMoneyData'));
    if(localStorage.getItem('sentMoneyData')){
        var output = document.getElementById('sentMoneyBody');
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('sentMoneyData')).forEach(data => {
            output.innerHTML += `
                    <tr>
                        <td>${data.Account_Number}</td>
                        <td>${data.Date}</td>
                        <td>${data.Time}</td>
                        <td>${data.Reciever_Account_Name}</td>
                        <td>${data.Reciever_Account_Name}</td>
                        <td>${data.Sent_Amount}</td>
                        <td>${data.Balance}</td>
                    </tr>
            `;
        });
    }
}