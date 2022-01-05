// function randomnumber(num1,num2){
//     return Math.random() * (num2 - num1) + num1;
// }
// function randomnumber1(num1,num2){
//     return Math.random() * (num2 - num1) + num1;
// }
// function randomnumber2(num1,num2){
//     return Math.random() * (num2 - num1) + num1;
// }
// function randomnumber3(num1,num2){
//     return Math.random() * (num2 - num1) + num1;
// }
// console.log(`${parseInt(randomnumber(1000,9999))} ${parseInt(randomnumber1(1000,9999))} ${parseInt(randomnumber2(1000,9999))} ${parseInt(randomnumber3(1000,9999))}`)


// let arry = [{a:2, 4, 6, 8, 10, 12, 14, 16}];
// let lastElement = arry[arry.length - 1];

// console.log(lastElement);

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


var today = new Date();

var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();

