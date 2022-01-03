
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
                        <td>${data.Account_Number}</td>
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



