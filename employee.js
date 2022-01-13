const menu_bar = document.getElementById('menu-bar');
const menu_bar1 = document.getElementById('menu-bar1');
const sideBar = document.getElementById('sideBar');
const userBoard = document.getElementById('user-info-board');
const userBoard1 = document.getElementById('user-info-board1');
const userBoard2 = document.getElementById('user-info-board2');
const userBoard3 = document.getElementById('user-info-board3');
const exitUsers = document.getElementById('exit');
const exitUsers1 = document.getElementById('exit1');
const exitUsers2 = document.getElementById('exit2');
const exitUsers3 = document.getElementById('exit3');
const approve = document.getElementById('approve');
const approve1 = document.getElementById('approve1');
const approve2 = document.getElementById('approve2');
const decline = document.getElementById('decline');
const clientList = document.getElementById('clientList');
const pendingList = document.getElementById('pendingList');
const pendingClientList = document.getElementById('board1');
const clientListShow = document.getElementById('board2');
const depositRequestShow = document.getElementById('board3');
const withdrawRequestShow = document.getElementById('board4');
const depositRequest = document.getElementById('depositRequest');
const withdrawRequest = document.getElementById('withdrawRequest');
const addClientUser = document.getElementById('addClientUser');
const regiForm = document.getElementById('regiForm');
const pendingNotif = document.getElementById('pendingNotif');
const clientNoList = document.getElementById('clientNoList');
const depoNoOfList = document.getElementById('depoNoOfList');
const wdrawNoOfList = document.getElementById('wDrawNoOfList');

window.onload = () => {
    registerDisplay();
    clientDisplay();
    depositRequestDisplay();
    withdrawRequestDisplay();
    pendingAccounts();
    noOfClients();
    depositNoRequestList();
    withdrawNoRequestList();
}
function withdrawNoRequestList(){
    var data = JSON.parse(localStorage.getItem('withdrawRequestData'))
    wdrawNoOfList.innerHTML = data.length
}
function depositNoRequestList(){
    var data = JSON.parse(localStorage.getItem('depositRequestData'))
    depoNoOfList.innerHTML = data.length
}
function noOfClients(){
    var data = JSON.parse(localStorage.getItem('clientData'))
    clientNoList.innerHTML = data.length
}
function pendingAccounts(){
    var data = JSON.parse(localStorage.getItem('registrationData'))
    pendingNotif.innerHTML = data.length
}
function registerDisplay(){
    if(localStorage.getItem('registrationData')){
        var output = document.querySelector('tbody');
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('registrationData')).forEach((data,index) => {
            output.innerHTML += `
                    <tr>
                        <td>${data.Account_Number}</td>
                        <td>${data.Firstname}</td>
                        <td>${data.Middlename}</td>
                        <td>${data.Lastname}</td>
                        <td>${data.Gender}</td>
                        <td>${data.Email}</td>
                        <td>${data.Contact}</td>
                        <td>${data.Gcash_Reciept}</td>
                        <td>${data.Gcash_Name}</td>
                        <td>${data.Gcash_Amount}</td>
                        <td>${data.Username}</td>
                        <td>${data.Password}</td>
                        <td><span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span><span class="icon" onclick="viewTask()"><i class="fas fa-eye"></i></span></td>
                    </tr>
            `;
        });
    }
}
function viewTask(){
    userBoard.style.display = "inline-block"
    var table = document.getElementById('myTable'),rIndex;
  
    for(var i = 0; i < table.rows.length;i++){
        table.rows[i].onclick = function(){
        rIndex = this.rowIndex; 
        document.getElementById('firstName1').innerText = this.cells[1].innerHTML;
        document.getElementById('lastName1').innerText = this.cells[3].innerHTML;
        document.getElementById('accountNumber').innerText = this.cells[0].innerHTML;
        document.getElementById('firstName').innerText = this.cells[1].innerHTML;
        document.getElementById('middleName').innerText = this.cells[2].innerHTML;
        document.getElementById('lastName').innerText = this.cells[3].innerHTML;
        document.getElementById('gender1').innerText = this.cells[4].innerHTML;
        document.getElementById('email').innerText = this.cells[5].innerHTML;
        document.getElementById('contactNumber').innerText = this.cells[6].innerHTML;
        document.getElementById('gcashcode').innerText = this.cells[7].innerHTML;
        document.getElementById('gcashname').innerText = this.cells[8].innerHTML;
        document.getElementById('gcashamount').innerText = this.cells[9].innerHTML;
        document.getElementById('username').innerText = this.cells[10].innerHTML;
        document.getElementById('password').innerText = this.cells[11].innerHTML;
    };
  }
  }
  function deleteTask(index){
      if(confirm("Are you sure you want to decline?")){
          let getLocalStorageData = localStorage.getItem("registrationData");
          listArray = JSON.parse(getLocalStorageData);
          listArray.splice(index, 1); //delete or remove the li
          localStorage.setItem("registrationData", JSON.stringify(listArray));
          userBoard.style.display ="none"
          registerDisplay();
      }
  }
  
  function performSearch() {
      const search = document.getElementById('search1');
      const table = document.getElementById("myTable1");
      const trs = table.tBodies[0].getElementsByTagName("tr");
      // Declare search string 
      var filter = search.value.toUpperCase();
    
      // Loop through first tbody's rows
      for (var rowI = 0; rowI < trs.length; rowI++) {
        // define the row's cells
        var tds = trs[rowI].getElementsByTagName("td");
        // hide the row
        trs[rowI].style.display = "none";
        // loop through row cells
        for (var cellI = 0; cellI < tds.length; cellI++) {
          // if there's a match
          if (tds[cellI].innerHTML.toUpperCase().indexOf(filter) > -1) {
            // show the row
            trs[rowI].style.display = "";
            // skip to the next row
            continue;
          }
        }
      }
    }
    // add event listener to search box
search1.addEventListener('keyup', performSearch);
  
  approve.onclick = (index) =>{
      if(confirm("Are you sure you want to Approve?")){
      clientDb = JSON.parse(localStorage.getItem('clientData')) || [];
      let exist = clientDb.length && 
      JSON.parse(localStorage.getItem('clientData')).some(data=> data.Username.toLowerCase() == document.getElementById('username').innerText.toLowerCase())  //&& data.Account_Number === document.getElementById('accountNumber').value)
      if(!exist){
          clientDb.unshift({
              Account_Number:document.getElementById('accountNumber').innerText, 
              Firstname:document.getElementById('firstName').innerText ,
              Middlename:document.getElementById('middleName').innerText, 
              Lastname:document.getElementById('lastName').innerText ,
              Gender:document.getElementById('gender1').innerText ,
              Email:document.getElementById('email').innerText ,
              Contact:document.getElementById('contactNumber').innerText ,
              Amount:document.getElementById('gcashamount').innerText, 
              Username:document.getElementById('username').innerText,
              Password:document.getElementById('password').innerText ,
          });
          localStorage.setItem('clientData', JSON.stringify(clientDb));
          let getLocalStorageData = localStorage.getItem("registrationData");
          listArray = JSON.parse(getLocalStorageData);
          listArray.splice(index,1); //delete or remove the li
          localStorage.setItem("registrationData", JSON.stringify(listArray));
          registerDisplay();
          alert("Registered Successfully")
          window.location.reload()
      }
      }
  }
  
function clientDisplay(){
    if(localStorage.getItem('clientData')){
        var output = document.getElementById('clientBody');
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('clientData')).forEach((data,index) => {
            output.innerHTML += `
                    <tr>
                        <td>${data.Account_Number}</td>
                        <td>${data.Firstname}</td>
                        <td>${data.Middlename}</td>
                        <td>${data.Lastname}</td>
                        <td>${data.Gender}</td>
                        <td>${data.Email}</td>
                        <td>${data.Contact}</td>
                        <td>${data.Amount}</td>
                        <td><span class="icon" onclick="deleteTask1(${index})"><i class="fas fa-trash"></i></span><span class="icon" onclick="viewTask1()"><i class="fas fa-eye"></i></span></td>
                    </tr>
            `;
        });
    }
}

function viewTask1(){
    userBoard1.style.display = "inline-block"
    var table = document.getElementById('myTable1'),rIndex;
  
    for(var i = 0; i < table.rows.length;i++){
        table.rows[i].onclick = function(){
        rIndex = this.rowIndex;
        document.getElementById('firstName2').innerText = this.cells[1].innerHTML;
        document.getElementById('lastName2').innerText = this.cells[3].innerHTML;
        document.getElementById('accountNumber2').innerText = this.cells[0].innerHTML;
        document.getElementById('firstName3').innerText = this.cells[1].innerHTML;
        document.getElementById('middleName2').innerText = this.cells[2].innerHTML;
        document.getElementById('lastName3').innerText = this.cells[3].innerHTML;
        document.getElementById('contactNumber2').innerText = this.cells[4].innerHTML;
        document.getElementById('email2').innerText = this.cells[5].innerHTML;
        document.getElementById('balance2').innerText = this.cells[6].innerHTML;
    };
  }
  }
//   delete client
  function deleteTask1(index){
      if(confirm("Are you sure you want to delete?")){
          let getLocalStorageData = localStorage.getItem("clientData");
          listArray = JSON.parse(getLocalStorageData);
          listArray.splice(index, 1); //delete or remove the li
          localStorage.setItem("clientData", JSON.stringify(listArray));
          clientDisplay();
      }
  }


function depositRequestDisplay(){
    if(localStorage.getItem('depositRequestData')){
        var output = document.getElementById('depositRequestBody');
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('depositRequestData')).forEach((data,index) => {
            output.innerHTML += `
                    <tr>
                        <td>${data.Account_Number}</td>
                        <td>${data.Account_Name}</td>
                        <td>${data.Date}</td>
                        <td>${data.Time}</td>
                        <td>${data.Gcash_Code}</td>
                        <td>${data.Gcash_Name}</td>
                        <td>${data.Gcash_Amount}</td>
                        <td><span class="icon" onclick="deleteTask2(${index})"><i class="fas fa-trash"></i></span><span class="icon" onclick="viewTask2()"><i class="fas fa-eye"></i></span></td>
                    </tr>
            `;
        });
    }
}
function viewTask2(){
    userBoard2.style.display = "inline-block"
    var table = document.getElementById('myTable2'),rIndex;
  
    for(var i = 0; i < table.rows.length;i++){
        table.rows[i].onclick = function(){
        rIndex = this.rowIndex;
        document.getElementById('accountNumber3').innerText = this.cells[0].innerHTML;
        document.getElementById('accountName3').innerText = this.cells[1].innerHTML;
        document.getElementById('date1').innerText = this.cells[2].innerHTML;
        document.getElementById('time1').innerText = this.cells[3].innerHTML;  
        document.getElementById('gcashCode2').innerText = this.cells[4].innerHTML;
        document.getElementById('gcashName2').innerText = this.cells[5].innerHTML;
        document.getElementById('gcashamount2').innerText = this.cells[6].innerHTML;
      
    };
  }
  }
  approve1.onclick = (index) =>{
    if(confirm("Are you sure you want to Approve?")){
        
        clientDb = JSON.parse(localStorage.getItem('depositData')) || [];
        clientDb.unshift({
            Account_Number:document.getElementById('accountNumber3').innerText,
            Date:document.getElementById('date1').innerText, 
            Time:document.getElementById('time1').innerText ,
            Deposit_Amount:document.getElementById('gcashamount2').innerText ,
        });
        localStorage.setItem('depositData', JSON.stringify(clientDb));

        //update the client Amount

        let getLocalStorageData3 = localStorage.getItem("clientData");   
        listArray3 = JSON.parse(getLocalStorageData3); 
        objIndex = listArray3.findIndex((obj => obj.Account_Number == document.getElementById('accountNumber3').innerHTML));
        var total = parseFloat(listArray3[objIndex].Amount) + parseFloat(document.getElementById('gcashamount2').innerText);
        listArray3[objIndex].Amount = total;
        localStorage.setItem('clientData', JSON.stringify(listArray3));

        let getLocalStorageData = localStorage.getItem("depositRequestData");
        listArray = JSON.parse(getLocalStorageData);
        listArray.splice(index,1); //delete or remove the li
        localStorage.setItem("depositRequestData", JSON.stringify(listArray));
        depositRequestDisplay();
        userBoard2.style.display = "none"
        alert("Approved Successfully")
    }
}

function withdrawRequestDisplay(){
    if(localStorage.getItem('withdrawRequestData')){
        var output = document.getElementById('withdrawRequestBody');
        output.innerHTML = "";
        JSON.parse(localStorage.getItem('withdrawRequestData')).forEach((data,index) => {
            output.innerHTML += `
                    <tr>
                        <td>${data.Account_Number}</td>
                        <td>${data.Account_name}</td>
                        <td>${data.Date}</td>
                        <td>${data.Time}</td>
                        <td>${data.Gcash_Name}</td>
                        <td>${data.Withdraw_Amount}</td>
                        <td><span class="icon" onclick="deleteTask3(${index})"><i class="fas fa-trash"></i></span><span class="icon" onclick="viewTask3()"><i class="fas fa-eye"></i></span></td>
                    </tr>
            `;
        });
    }
}
function viewTask3(){
    userBoard3.style.display = "inline-block"
    var table = document.getElementById('myTable3'),rIndex;
  
    for(var i = 0; i < table.rows.length;i++){
        table.rows[i].onclick = function(){
        rIndex = this.rowIndex;
        document.getElementById('accountNumber4').innerText = this.cells[0].innerHTML;
        document.getElementById('accountName4').innerText = this.cells[1].innerHTML;
        document.getElementById('date2').innerText = this.cells[2].innerHTML;
        document.getElementById('time2').innerText = this.cells[3].innerHTML;  
        document.getElementById('gcashName3').innerText = this.cells[4].innerHTML;
        document.getElementById('gcashamount3').innerText = this.cells[5].innerHTML;
      
    };
  }
  }
  approve2.onclick = (index) =>{
    if(confirm("Are you sure you want to Approve?")){
        
        clientDb = JSON.parse(localStorage.getItem('withdrawData')) || [];
        clientDb.unshift({
            Account_Number:document.getElementById('accountNumber4').innerText,
            Date:document.getElementById('date2').innerText, 
            Time:document.getElementById('time2').innerText ,
            Withdraw_Amount:document.getElementById('gcashamount3').innerText ,
        });
        localStorage.setItem('withdrawData', JSON.stringify(clientDb));

        //update the client Amount

        let getLocalStorageData3 = localStorage.getItem("clientData");   
        listArray3 = JSON.parse(getLocalStorageData3); 
        objIndex = listArray3.findIndex((obj => obj.Account_Number == document.getElementById('accountNumber4').innerHTML));
        var total = parseFloat(listArray3[objIndex].Amount) - parseFloat(document.getElementById('gcashamount3').innerText);
        listArray3[objIndex].Amount = total;
        localStorage.setItem('clientData', JSON.stringify(listArray3));

        let getLocalStorageData = localStorage.getItem("withdrawRequestData");
        listArray = JSON.parse(getLocalStorageData);
        listArray.splice(index,1); //delete or remove the li
        localStorage.setItem("withdrawRequestData", JSON.stringify(listArray));
        withdrawRequestDisplay();
        userBoard3.style.display = "none"
        alert("Approved Successfully")
    }
}
decline.onclick = (index) =>{
    deleteTask(index);
}
clientList.onclick = () =>{
    pendingClientList.style.display  ="none"
    depositRequestShow.style.display = "none"
    withdrawRequestShow.style.display = "none"
    clientListShow.style.display  ="inline-block"
    sideBar.style.left = "-232px"
    clientDisplay();

}

pendingList.onclick = () =>{
    pendingClientList.style.display  ="inline-block"
    clientListShow.style.display  ="none"
    depositRequestShow.style.display ="none"
    withdrawRequestShow.style.display = "none"
    regiForm.style.display ="none"

    sideBar.style.left = "-232px"
    registerDisplay();
}
depositRequest.onclick = () =>{
    pendingClientList.style.display  ="none"
    clientListShow.style.display  ="none"
    withdrawRequestShow.style.display = "none"
    regiForm.style.display ="none"
    depositRequestShow.style.display = "inline-block"
    sideBar.style.left = "-232px"
    depositRequestDisplay()
}
withdrawRequest.onclick = () =>{
    pendingClientList.style.display  ="none"
    clientListShow.style.display  ="none"
    depositRequestShow.style.display = "none"
    regiForm.style.display ="none"
    withdrawRequestShow.style.display = "inline-block"
    sideBar.style.left = "-232px"
    withdrawRequestDisplay();
}
addClientUser.onclick = () =>{
    pendingClientList.style.display  ="none"
    clientListShow.style.display  ="none"
    depositRequestShow.style.display = "none"
    withdrawRequestShow.style.display = "none"
    regiForm.style.display ="block"
    sideBar.style.left = "-232px"
}
menu_bar1.onclick = () =>{
    sideBar.style.left = "0"
    pendingAccounts();
    noOfClients();
}
menu_bar.onclick = () =>{
    sideBar.style.left = "-232px"
}
exitUsers.onclick = () =>{
    userBoard.style.display = "none"
}
exitUsers1.onclick = () =>{
    userBoard1.style.display = "none"
}
exitUsers2.onclick = () =>{
    userBoard2.style.display = "none"
}
exitUsers3.onclick = () =>{
    userBoard3.style.display = "none"
}



const signUp = e =>{
    var select = document.getElementById('gender7');
    var option = select.options[select.selectedIndex];
    clientDb = JSON.parse(localStorage.getItem('clientData')) || [];
    let exist = clientDb.length && 
    JSON.parse(localStorage.getItem('clientData')).some(data=> data.Username.toLowerCase() == document.getElementById('username7').value.toLowerCase())  //&& data.Account_Number === document.getElementById('accountNumber').value)
    if(!exist){
        clientDb.unshift({
            Account_Number: document.getElementById('accountNumber7').value,
            Firstname: document.getElementById('firstname7').value,
            Middlename: document.getElementById('middlename7').value,
            Lastname: document.getElementById('lastname7').value,
            Gender: option.value,
            Contact: document.getElementById('contact7').value,
            Email: document.getElementById('email7').value,
            Amount: document.getElementById('amount7').value,
            Username: document.getElementById('username7').value,
            Password: document.getElementById('pword7').value  
        });
        localStorage.setItem('clientData', JSON.stringify(clientDb));
        alert("Registered Successfully")
        document.getElementById('accountNumber7').innerHTML = (`${parseInt(randomnumber(1000,9999))} ${parseInt(randomnumber1(1000,9999))} ${parseInt(randomnumber2(1000,9999))} ${parseInt(randomnumber3(1000,9999))}`)
        document.getElementById('registerform').reset();
        document.getElementById('firstname7').focus();
        e.preventDefault();
    }else{
        alert("Username already exist!")
        e.preventDefault();
    }
    e.preventDefault();
}

//for generating unique account number
function randomnumber(num1,num2){
    return Math.random() * (num2 - num1) + num1;
}
function randomnumber1(num1,num2){
    return Math.random() * (num2 - num1) + num1;
}
function randomnumber2(num1,num2){
    return Math.random() * (num2 - num1) + num1;
}
function randomnumber3(num1,num2){
    return Math.random() * (num2 - num1) + num1;
}

document.getElementById('accountNumber7').value = (`${parseInt(randomnumber(1000,9999))} ${parseInt(randomnumber1(1000,9999))} ${parseInt(randomnumber2(1000,9999))} ${parseInt(randomnumber3(1000,9999))}`)

