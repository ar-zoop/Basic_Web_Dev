// let admin, name;
// name='johm';
// admin=name;
// alert(admin);

// let ourPlanet='earth';
// let curUser='john';

// alert(Infinity);

// alert( "not a number" / 2 + 5 );

// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed another ${"str"}`;
// alert(phrase)

// let isGreater = 4 > 1;
// alert( isGreater );

// result = prompt(title, [default]);
// let age = prompt('How old are you?',999);
// age = confirm(`are you really ${age} years old?`)
// alert(`You are ${age} years old!`); 
// alert(age)

// let name=prompt("hey what is your name?",'')
// alert (name)

// "use strict"
// alert("Answer the next question");
// let a = prompt("What is your name?");
// let b = confirm(`Your name is ${a}?`);
// alert(`Your name is ${a} and that is ${b}.`);

// let value = true;
// alert(typeof value);

// value = String(value);
// alert(typeof value);

// alert( "6" / "2" );

// let age = Number("ten");
// alert(age); 

// alert (Boolean(undefined))

// let year=prompt("whats the year ", "");
// if (year==2020)
// {
//      alert ("youre right")
//      alert ('yass')
// }
// else if(year<2020){
//     alert ('how dare you')
// }
// else{
//     alert("yes")
// }
// let age = prompt("whats your age", '')
// let accessAllowed = (age > 18)
// alert(accessAllowed)

// let age=prompt("whats your age?", ' ')
// if (age< 3){
//    message ="hey lil one"
// }
// else if(age<18){
//     message='hello'
// }
// else if (age<100){
//     message="hello youngster"
// }
// else{
//     message="quite an achievement"
// }
// alert (message)
// if (""){
//     alert("joo")
// }
// else{
//     alert('hello')
// }
// let ques=prompt("whats he official name of javascript? ")
// if (ques='Ecmascript'){
//     alert('damn son')
// }
// else {
//     alert ('how dare you')
// }
// let num=prompt('tell me a number','');
// if (num<0){
//     alert (-1)
// }
// else if (num==0){
//     alert(0)
// }
// else {
//     alert(1)
// }
// let result;
// result=(a+b<4)?'below':'over';

// let message;
// let login=prompt('enter who is this','');
// message=(login=='employee')?'hello':
// (login=='director')?'greetings':
// (login=='')?'no login':
// " ";

// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//   alert( 'The office is closed.' ); // it is the weekend
// }

// let age=prompt("enter your age: ",'')
// if (!(age>13 && age<91)){
//     alert("mo")
// }

// let age=prompt("enter your age: ",'')
// if (age<14 || age>90){
//     alert("mo")
// }

// let login=prompt("whos here? ",'')
// if (login=='admin'){
//     password =prompt("enter password:", '')
//     if (password=='TheMaster'){
//         alert('welcome')
//     }
//     else if(password==''){
//         alert('cancelled')
//     }
//     else{
//         alert ('wrong password')
//     }
// }
// else if (login==''){
//     alert('cancelled')
// }
// else{
//     alert('idk you')
// }

// let sum=0;
// let value; //why is there no need to declare a variable inside
// while (true){
//     value= +prompt('enter a value ', '') //+prompt meaning?
//     if (!value) {break}
//     sum+=value
// };
// alert(sum)

// for (let i = 0; i < 6; i++) {

//     if (i % 2) {
//       alert( i );
//     }
  
//   }

// outer:for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {
  
//         let input = prompt(`Value at coords (${i},${j})`, '');
//         if (!input){
//         break outer
//         }
//     }
//   }
  
//   alert('Done!');


//   let i = 0;
// while (i++ < 5) alert( i );

// for (let i=2; i<11;i++){
//     if (i%2==0){
//         alert (i)
//     }
// };

// let i=0;
// while (i<3){
//     alert ('number'+' '+i)
//     i++
// }

// let ask=100;
// while (ask<=100 && ask){
//     ask=prompt('enter a number greater than 100', '')
    
// } 



// let num=17
// start:for (let i=2; i<num; i++){
//     if (num%i==0){
//         break start
//     }
//     else {
//         alert (num +' is a prime number')
//     }
// }

// let browser=prompt('enter thr browser you like ','')
// if (browser=='edge'){
//     alert ('you got edge!')
// }
// else if (browser=='chrome'||browser=='firefox'||browser=='safari'||browser=='opera'){
//     alert('we support these too!')
// }
// else{
//     alert ('we hope')
// }

// let a= +prompt('a=?', '');
// switch (a){
//     case 0:
//         alert (0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert ('2,3');
//         break;
//     default:
//         alert ('yello')
// }

// function showMessage(from, text) {
//     alert( from + ": " + text );
//   }
  
//   showMessage("Ann"); // Ann: no text given

// function checkAge(age){
//     return (age>18 )? true: confirm('did your parents allow you?')

// }
// checkAge(13)

// function min(a,b){
//     if (a<b){
//         return a
//     }
//     return b
// }

// a=min(3,-1)
// alert (a)

// function pow(x,n){
//     return x**n
// }

// a=pow (2,3)
// alert (a)



