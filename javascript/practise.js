// ------------Pre and post increment-------------
// console.log("hello world");
// let a = 10;
// console.log(a);
// let savedFirst = a++;
// console.log(savedFirst);
// let addedFirst = ++a;
// console.log(addedFirst);


// ---------------if else--------------
// let name = prompt("Whats my name");
// if (name == "Lukman"){
//     alert("Yes its true");
// }
// else{
//     alert("Um,you dont know my name , Iam Lukman");
// }

// ----------If else else if--------------
// let num = prompt("Say a number")
// if (+num > 0){
//     alert("1")
// }
// else if (+num < 0){
//     alert("-1")
// }
// else{
//     alert("0")
// }

// -----------Nested if
// let login = prompt("Who are you");
// if (login == "Admin"){
//     let password = prompt("Whats the password")
//         if (password == "suii"){
//             alert("Acess allowed")
//         }
//         else if (password == "" || password == null){
//             alert("Cancelled")
//         }
//         else{
//             alert("Acess denied")
//         }
// }
// else if (login == "" || login == null){
//     alert("Cancelled")
// }
// else {
//     alert("i dont know you")
// }

// -----------------Ternary------------
// let e = 4;
// let b = 3;
// let result = e+b<4 ? alert("below") : alert("above");

// ------------------------Multiline ternary---------
// let login = prompt("who are you");
// let msg;
// login == "director" ? msg = "Action" :
// login == "officer" ? msg = "Roger" :
// login == "student" ? msg = "Greetings" :
// msg = "who the h are you";
// alert(msg);

// ---------------Logical operators--------
// ------AND &&

// let age = prompt("what is your age");
// if (age>= 14 && age <= 90){
//     alert("You can get in the war")
// }
// else{
//     alert("You cant get in war")
// }

// -----NOT !
// let age = prompt("what is your age");
// if (!(age>= 14 && age <= 90)){
//     alert("You cant get in war")
// }
// else{
//     alert("You can get in the war")
// }

// ---------OR ||
// let age = prompt("what is your age");
// if (age < 14 || age > 90){
//     alert("You cant get in war")
// }
// else{
//     alert("You can get in the war")
// }

// --------------Switch condition-------------
// let a = prompt("Give a value");
// switch(+a){
//     case 1:
//         alert("1")  //if a === 1
//         break;      //comes out of switch
//     case 0:
//         alert("0")
//         break;
//     case 2:
//     case 3:         //if a === 2 || a === 3
//         alert("2,3")
//         break;
//     default :       //else
//      alert("not exists")  
//      break;  
// }

// ------------------function---------------
// function multiply(a,b){ //function creating a and b are parameters
//     return (a*b) ;
// }
// const n1 =  prompt("Enter first number")
// const n2 = prompt("Enter second number")
// result = multiply(+n1,+n2) //function calling n1 and n2 are args
// alert(`Multiplication of 2 numbers is : ${result}`)

// ------------Example 2
// function checkAge(age){
//     return age>18 || confirm("Did your parents allow you") //OR stops at first truthy value
// }
// let age = prompt("Enter your age")
// if(checkAge(age)){
//     alert("allowed")
// }
// else{
//     alert("not allowed")
// }

// ---------------Function expression
// let add = function(a,b){
//     return a + b
// };
// alert(add(2,3))

// -----------------Arrow function 
// let sayHi = () => alert("Hi") // "() => return is an arrow func"
// sayHi()
// ------------
// function callBack(yes,no){
//     let a = prompt("Enter 7 or 10")
//     a == "7" ? yes() : no() 
// }
// alert(callBack(
//     () => alert("ronaldo"),
//     () => alert("messi")))

// -----------------a function exercise
// function capitalize(name){
//     let fullName = name.toLowerCase()
//     let a = fullName.slice(0,1)
//     let b = fullName.slice(1)
//     let firstLetter = a.toUpperCase()
//     let result = firstLetter.concat(b)
//     return (result)
// }
// capitalize("oRange");