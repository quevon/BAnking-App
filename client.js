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
const myprofile = document.getElementById('myprofile');
const myprofileshow = document.getElementById('myprofileshow');
const myprofilexit = document.getElementById('myprofilexit');
const changepasswordexit = document.getElementById('changepasswordexit');
const changePasswordModal = document.getElementById('changePasswordModal');
const changePasswordBtn = document.getElementById('changePasswordBtn');
const changeBtn = document.getElementById('changeBtn');
const displayDate = document.getElementById('date');
const logOut = document.getElementById('logOut');
const today = new Date();
const date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
var hours = today.getHours() ; // gives the value in 24 hours format
var AmOrPm = hours >= 12 ? 'pm' : 'am';
hours = (hours % 12) || 12;
var minutes = today.getMinutes() ;
var finalTime = hours + ":" + minutes + " " + AmOrPm; 


myprofileshow.onclick = () =>{
    myprofile.style.display = "inline-block"
    sideBar.style.left = "-232px"
    gridBoard.style.opacity =".5"

    let getLocalStorageData = localStorage.getItem("clientData");   
    listArray = JSON.parse(getLocalStorageData);    
    objIndex = listArray.findIndex((obj => obj.Account_Number == accountNumber.innerHTML));
    document.getElementById('firstName2').innerHTML = listArray[objIndex].Firstname
    document.getElementById('lastName2').innerHTML = listArray[objIndex].Lastname
    document.getElementById('accountNumber2').innerHTML = listArray[objIndex].Account_Number
    document.getElementById('firstName3').innerHTML = listArray[objIndex].Firstname
    document.getElementById('middleName2').innerHTML = listArray[objIndex].Middlename
    document.getElementById('lastName3').innerHTML = listArray[objIndex].Lastname
    document.getElementById('gender3').innerHTML = listArray[objIndex].Gender
    document.getElementById('contactNumber2').innerHTML = listArray[objIndex].Contact
    document.getElementById('email2').innerHTML = listArray[objIndex].Email
    document.getElementById('balance2').innerHTML = listArray[objIndex].Amount
    document.getElementById('username2').innerHTML = listArray[objIndex].Username
    document.getElementById('password2').innerHTML = listArray[objIndex].Password
}
myprofilexit.onclick = () =>{
    myprofile.style.display = 'none'
    gridBoard.style.opacity ="1"
}
changePasswordBtn.onclick = () =>{
    changePasswordModal.style.display = "inline-block"

    var oldpassword = document.getElementById('password2');
    var changePassInput = document.getElementById('changePassInput');

     changePassInput.value = oldpassword.innerHTML
}
const changepassword = (e) =>{
    var newPassword = document.getElementById('changePassInput');
    let getLocalStorageData3 = localStorage.getItem("clientData");   
    listArray3 = JSON.parse(getLocalStorageData3);    
    objIndex = listArray3.findIndex((obj => obj.Account_Number == accountNumber.innerHTML));
    listArray3[objIndex].Password = newPassword.value;
    localStorage.setItem('clientData', JSON.stringify(listArray3))
    document.getElementById('password2').innerHTML = newPassword.value
    changePasswordModal.style.display ="none"
    e.preventDefault();
    alert("Changed Password Successfully")
}
changepasswordexit.onclick = () =>{
    changePasswordModal.style.display = "none"
}
menu_bar1.onclick = () =>{
    sideBar.style.left = "0"
}
menu_bar.onclick = () =>{
    sideBar.style.left = "-400px"
}
displayDate.innerHTML = date
window.onload = () =>{
    let getCurrentUser = localStorage.getItem("currentClientUser")
    listArray = JSON.parse(getCurrentUser);
    usernameHeader.innerHTML =  listArray[0].Current_User
    let getLocalStorageData3 = localStorage.getItem("clientData");   
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

    var data = JSON.parse(localStorage.getItem('clientData'));
    let exist = data.length && JSON.parse(localStorage.getItem('clientData')).some(data1=> data1.Account_Number == inputAccount1.value)
    objIndex = data.findIndex((obj => obj.Account_Number == inputAccount1.value));
    if (exist){
        receiverName.value = `${data[objIndex].Firstname} ${data[objIndex].Lastname}`;
        receiverMoney.value = data[objIndex].Amount;
        receiverName.style.color = "green";
    }else{
        receiverName.value = "No Receiver Available!";
        receiverName.style.color = "red";
    }
    
}

document.getElementById('sendMoneyValue').onkeyup = e => {
    var currentBalance = accountBalance.innerHTML;
    var error = document.getElementById('errorMessage')
    var inputAmount = document.getElementById('sendMoneyValue').value;
    
    if(parseFloat(currentBalance) < parseFloat(inputAmount)){
        error.style.display = "inline-block"   
    }else{
        error.style.display = "none"   
    }
    
}

const sendMoney = e =>{
    var inputAccount = document.getElementById('recieverAccountNumber')
    var inputAmount = document.getElementById('sendMoneyValue').value;
    var receiverMoney = document.getElementById('receiverMoney').value;
    var total = document.getElementById('current_money2');
    var totalbalanceReciever = document.getElementById('receiver_money2');
    var currentBalance = accountBalance.innerHTML;
    var data = JSON.parse(localStorage.getItem('clientData'));
    let exist = data.length && 
    JSON.parse(localStorage.getItem('clientData')).some(data1=> data1.Account_Number == document.getElementById("recieverAccountNumber").value)
    if(!exist){
        e.preventDefault();
    }else if(parseFloat(currentBalance) < parseFloat(inputAmount)){
        e.preventDefault();
    }else{
        var totalAmount = parseFloat(currentBalance) - parseFloat(inputAmount);
        total.innerHTML = totalAmount;
        var totalAmount2 = parseFloat(inputAmount) + parseFloat(receiverMoney);
        totalbalanceReciever.innerHTML = totalAmount2;
        sentMoneyData = JSON.parse(localStorage.getItem('sentMoneyData')) || [];
        sentMoneyData.unshift({
            Account_Number: document.getElementById('account-number').innerHTML,
            Date: date,
            Time: finalTime,
            Reciever_Account_No: document.getElementById('recieverAccountNumber').value,
            Reciever_Account_Name: document.getElementById('recieverName').value,
            Sent_Amount: document.getElementById('sendMoneyValue').value,
            Balance: totalAmount,
        });
        localStorage.setItem('sentMoneyData', JSON.stringify(sentMoneyData));
        //update the balance of the sender
        let getLocalStorageData3 = localStorage.getItem("clientData");   
        listArray3 = JSON.parse(getLocalStorageData3); 
        objIndex = listArray3.findIndex((obj => obj.Username == usernameHeader.innerHTML));
        listArray3[objIndex].Amount = totalAmount;
        localStorage.setItem('clientData', JSON.stringify(listArray3));
        //update the balance of the receiver
        let getLocalStorageData4 = localStorage.getItem("clientData");   
        listArray4 = JSON.parse(getLocalStorageData4); 
        console.log(listArray4);
        objIndex = listArray4.findIndex((obj => obj.Account_Number == inputAccount.value));
        listArray4[objIndex].Amount = totalAmount2;
        localStorage.setItem('clientData', JSON.stringify(listArray4));
        document.getElementById('sendMoneyForm1').reset();
        document.getElementById('recieverAccountNumber').focus();
        alert("Sent Successfully!")
    }
}
//deposit
const deposit = () =>{
    var GcashAmount = document.getElementById('GcashAmount').value;
    var GcashName = document.getElementById('GcashName').value;
    var GcashCode = document.getElementById('GcashCode').value;

    depositRequestData = JSON.parse(localStorage.getItem('depositRequestData')) || [];
    depositRequestData.unshift({
        Account_Number: accountNumber.innerHTML,
        Account_Name:   accountName.innerHTML,
        Date: date,
        Time: finalTime,
        Gcash_Code: GcashCode,
        Gcash_Name: GcashName,
        Gcash_Amount: GcashAmount,
    });
    localStorage.setItem('depositRequestData', JSON.stringify(depositRequestData));

    document.getElementById('depositForm1').reset();
    document.getElementById('GcashCode').focus();
    alert("Deposit Request Successful,Kindly wait for Approval!")
 
    
}
const widthDraw = e =>{
    var inputAmount = document.getElementById('withdrawValue').value;
        // var total = document.getElementById('current_money1');
    var currentBalance = accountBalance.innerHTML;
    if (parseFloat(currentBalance) < parseFloat(inputAmount)){
        alert("You don't have enough balance!")
        e.preventDefault();
    }else{
        withdrawRequestData = JSON.parse(localStorage.getItem('withdrawRequestData')) || [];
        withdrawRequestData.unshift({
            Account_Number:accountNumber.innerHTML,
            Account_name: accountName.innerHTML,
            Date: date,
            Time: finalTime,
            Gcash_Name: document.getElementById('GcashName1').value,
            Gcash_Number: document.getElementById('GcashNumber').value,
            Withdraw_Amount: document.getElementById('withdrawValue').value,
        });
        localStorage.setItem('withdrawRequestData', JSON.stringify(withdrawRequestData));
        document.getElementById('withdrawform1').reset();
        document.getElementById('withdrawValue').focus();
        alert("Sent Successful,Kindly wait for approval!")
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
        let getLocalStorageData2 = localStorage.getItem("clientData");   
        listArray2 = JSON.parse(getLocalStorageData2); 
        console.log(listArray2);
        objIndex = listArray2.findIndex((obj => obj.Username == usernameHeader.innerHTML));
        listArray2[objIndex].Amount = totalAmount;
        accountBalance.innerHTML = listArray2[objIndex].Amount; 
        localStorage.setItem('clientData', JSON.stringify(listArray2));
        formData1 = JSON.parse(localStorage.getItem('formData1')) || [];
        formData1.unshift({
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

        var table = document.getElementById('myTable2'),rIndex;

        for(var i = 0; i < table.rows.length;i++){
            table.rows[i].onclick = function(){
            rIndex = this.rowIndex;
            document.getElementById('itemCost2').innerHTML  = this.cells[3].innerHTML;

            var newCost = parseFloat(document.getElementById('itemCost2').innerHTML) + parseFloat(accountBalance.innerHTML)

            console.log(newCost)
            
            let getLocalStorageData2 = localStorage.getItem("clientData");   
            listArray2 = JSON.parse(getLocalStorageData2); 
            objIndex = listArray2.findIndex((obj => obj.Account_Number ==  accountNumber.innerHTML));
            listArray2[objIndex].Amount = newCost
            localStorage.setItem('clientData', JSON.stringify(listArray2)) 

            let getLocalStorageData = localStorage.getItem("formData1");
            listArray = JSON.parse(getLocalStorageData);
            listArray.splice(index, 1); //delete or remove the li
            localStorage.setItem("formData1", JSON.stringify(listArray));
            window.location.reload()

            };
        }
    }
}

var table = document.getElementById('myTable2'),rIndex;

for(var i = 0; i < table.rows.length;i++){
    table.rows[i].onclick = function(){
    rIndex = this.rowIndex;
    document.getElementById('editExpense').value = this.cells[2].innerHTML;
    document.getElementById('itemIndex').innerHTML = this.cells[2].innerHTML;
    document.getElementById('editCost').value = this.cells[3].innerHTML;
    document.getElementById('itemCost').innerHTML = this.cells[3].innerHTML;
};
}
function editTask(){
    gridBoard.style.opacity =".5"
    expenseformEdit.style.display ="inline-block"
}
function editRow(e){
    var newExpenseName = document.getElementById('editExpense').value;
    var newCost = document.getElementById('editCost').value;
    var itemCost = document.getElementById('itemCost').innerHTML;
    var newItemCost = parseFloat(itemCost) - parseFloat(newCost);
    var newBalance = parseFloat(accountBalance.innerText) + parseFloat(newItemCost);
    var indexofrows = document.getElementById('itemIndex').innerHTML;
    
    if(parseFloat(accountBalance.innerText) + parseFloat(itemCost) < parseFloat(newCost)){
        alert("You don't have enough balance!")
        e.preventDefault();
    }else{
        let getLocalStorageData2 = localStorage.getItem("formData1");   
        listArray2 = JSON.parse(getLocalStorageData2); 
        objIndex = listArray2.findIndex((obj => obj.Item ==  indexofrows));
        listArray2[objIndex].Item = newExpenseName
        listArray2[objIndex].Cost = newCost
        localStorage.setItem('formData1', JSON.stringify(listArray2)) 
    
        let getLocalStorageData = localStorage.getItem("clientData");   
        listArray = JSON.parse(getLocalStorageData); 
        objIndex1 = listArray.findIndex((obj => obj.Account_Number == accountNumber.innerText));
        listArray[objIndex1].Amount = newBalance
        localStorage.setItem('clientData', JSON.stringify(listArray)) 
    }
    
}
editFormExit.onclick = () =>{
    gridBoard.style.opacity ="1"
    expenseformEdit.style.display ="none"
}
//modals
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
                        <td>${data.Reciever_Account_No}</td>
                        <td>${data.Sent_Amount}</td>
                        <td>${data.Balance}</td>
                    </tr>
            `;
        });
    }
}