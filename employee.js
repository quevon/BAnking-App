const menu_bar = document.getElementById('menu-bar');
const menu_bar1 = document.getElementById('menu-bar1');
const sideBar = document.getElementById('sideBar');
const userBoard = document.getElementById('user-info-board');
const exitUsers = document.getElementById('exit');
const approve = document.getElementById('approve');
const decline = document.getElementById('decline');

menu_bar1.onclick = () =>{
  sideBar.style.left = "0"
}
menu_bar.onclick = () =>{
  sideBar.style.left = "-232px"
}
exitUsers.onclick = () =>{
  userBoard.style.display = "none"
}
window.addEventListener('load' , () => {
  display();
});



function display(){
    console.log(localStorage.getItem('registrationData'));
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
      console.log(rIndex)
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
    if(confirm("Are you sure you want to delete?")){
        let getLocalStorageData = localStorage.getItem("registrationData");
        listArray = JSON.parse(getLocalStorageData);
        listArray.splice(index, 1); //delete or remove the li
        localStorage.setItem("registrationData", JSON.stringify(listArray));
        display();
    }
}

function performSearch() {
    const search = document.getElementById('search');
    const table = document.getElementById("myTable");
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
  search.addEventListener('keyup', performSearch);

approve.onclick = (index) =>{
    if(confirm("Are you sure you want to Approve?")){
    clientDb = JSON.parse(localStorage.getItem('clientData')) || [];
    let exist = clientDb.length && 
    JSON.parse(localStorage.getItem('clientData')).some(data=> data.Username.toLowerCase() == document.getElementById('username').innerText.toLowerCase())  //&& data.Account_Number === document.getElementById('accountNumber').value)
    if(!exist){
        clientDb.push({
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
        display();
        alert("Registered Successfully")
        
    }
    }
}
