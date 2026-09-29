/*console.log(`Hello World!`);
window.alert("This is an alert!");

document.getElementById("Myh1").textContent="Hello";
document.getElementById("Myp").textContent="I like Pizza!";
let x=100;

console.log(age);
let price = 10.99;
console.log(price);
let gpa = 4.00;
console.log(`Your are ${age} years old.`);
console.log(`Your GPA is ${gpa}.`);
console.log(`The price is ${price}`);
console.log(typeof age);
let firstName = "Johnson";
console.log(typeof firstName);
console.log(`My name is ${firstName}.`);
let faveFood = "Pizza";
console.log(`My favorite food is ${faveFood}.`);    
let email = "johnson123@email.com";
console.log(`My email is ${email}.`);
let online = true;
console.log(typeof online);
console.log(`Bro is online: ${online}`);
let isStudent = true;
console.log(`Enrolled? ${isStudent}`); */

/*let fullName = "Johnson IfeOluwa";
let age = 17;
let student = true;
document.getElementById("P1").textContent = `Your name is ${fullName}.`;
document.getElementById("P2").textContent = `You are ${age} years old.`;
document.getElementById("P3").textContent = `Are you a student? ${student}`;
let studentSize = 25;
studentSize = studentSize % 2;
console.log(`The student size is ${studentSize}.`);*/


/*let userName = window.prompt("What's ur Username?");
console.log(`Hello ${userName}.`);*/

/* let username;
document.getElementById("submitBtn").onclick = function() {
    username = document.getElementById("UserName").value;
    document.getElementById("Myh1").textContent = `Hello ${username}.`;
} */

/* let age = window.prompt("How old are you?");
age =Number(age);
age += 1;
console.log(age, typeof age); */

/* let x = "";
let y = "";
let z = "";
x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z); */

/* const PI = 3.142;
let circumference;
document.getElementById("calcBtn").onclick = function() {
    let radius = document.getElementById("radius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("Myh2").textContent = `The circumference of the circle is ${circumference} cm.`;
} */
/* let x=3.99;
let y = 2;
let z; */

// z = Math.floor(x);
//z = Math.ceil(x);
// z = Math.trunc(x);
// z = Math.pow(x, y);
// z = Math.pow(x);
// console.log(Math.PI);
// console.log(Math.E);
// z = Math.sqrt(x);
/* z = Math.sin(x);
console.log(z);
z = Math.cos(x);
console.log(z);
z = Math.tan(x);
console.log(z); */

/* z = Math.abs(x);
z = Math.sign(x);
z = Math.round(x);
z = Math.min(x, y, z);
z = Math.max(x, y, z);
z = Math.random();
console.log(z); */


/* const min = 50;
const max = 100;
let randomNum = Math.floor(Math.random() * (max-min)) + min;
console.log(randomNum); */

// if statements
/* let age = 0;
if (age>=100){
    console.log(`You are too old to enter this site`);
}
else if (age==0){
    console.log(`You cant enter, you were just born!`);
}
else if(age >=18){
    console.log(`You are old enough to enter this site`);
}
else if(age<0){
    console.log(`Your age cant be below 0`);
}
else{
    console.log(`You must be 18 to enter this site`);
}*/


/* const myAge = document.getElementById("myAge");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
let age = 0;
submitBtn.onclick=function(){
    age = myAge.value;
    age =Number(age);
    if (age>=100){
       result.textContent=`You are too old to enter this site`;
    }
    else if (age==0){
        result.textContent=`You cant enter, you were just born!`;
    }
    else if(age >=18){
        result.textContent=`You are old enough to enter this site`;
    }
    else if(age<0){
        result.textContent=`Your age cant be below 0`;
    }
    else{
        result.textContent=`You must be 18 to enter this site`;
    }
} */

/* let age = 21;
let message=age>= 18 ? "You are an adult":"You are a minor";
console.log(message); */

/* let time = 16;
let greeting = time <12? "Good morning": "Good afternoon!";
console.log(greeting); */

/* let isStudent;
let message = isStudent? "You are a student":"You are not s student";
console.log(message) */

/* let purchaseAmount = 500;
let discount = purchaseAmount > 500? 10: 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`); */

/* let day = 1;
switch(day){
    case 1:
        console.log(`It is Monday!`);
        break;
    case 2:
        console.log(`It is Tuesday!`);
        break;
    case 3:
        console.log(`It is Wednesday!`);
        break;
    case 4:
        console.log(`It is Thursday!`);
        break;
    case 5:
        console.log(`It is Friday!`);
        break;
    case 6:
        console.log(`It is Saturday!`);
        break;
    case 7:
        console.log(`It is Sunday!`);
        break;
    default: 
    console.log(`${day} is not a day..`);

} */
/* 
let testScore = 55;
let letterGrade;
switch(true) {
    case testScore>=90:
        letterGrade ="A";
        break; 
    case testScore>=80:
        letterGrade ="B";
        break; 
    case testScore>=70:
        letterGrade ="C";
        break;   
    case testScore>=60:
        letterGrade ="D";
        break; 
    default:
        letterGrade = File;
        break;
} */

/* let userName = "KingCyrus 62";
console.log(userName.charAt(0));
console.log(userName.lastIndexOf("55"));
console.log(userName.length);
console.log(userName.trim);
console.log(userName.toUpperCase);
console.log(userName.toLowerCase);
let result = userName.startsWith(` `)? "Your username can't begin with a white space" : userName;
console.log(result);

let result = userName.endsWith(` `)? "Your username can't begin with a white space" : userName;
console.log(result);

let result = userName.include(` `)? "Your username can't begin with a white space" : userName;
console.log(result);

let phoneNumber = "123 456 7890";
phoneNumber = phoneNumber.replaceAll(` `, `-`);
console.log(phoneNumber);

phoneNumber = phoneNumber.padStart(15, "0");
phoneNumber = phoneNumber.padEnd(15, "0"); */

 /*const fullName = `IfeOluwa Johnson`;
let firstName = fullName.slice(0, 8);
let lastName = fullName.slice (9,16);
console.log(firstName);
console.log(lastName); //negative indices work as well */

/*const fullname =`IfeOluwa Johnson`;
let firstName = fullname.slice(0, fullname.indexOf(" "));
let lastname = fullname.slice(fullname.indexOf(" ") +1);
console.log(firstName);
console.log(lastname); */

/* const email=`ifeJohnson026@gmail.com`;
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") +1);
console.log(userName);
console.log(extension); */

//Method Chaining
/* let userName = window.prompt(`Enter your Username: `);
userName = userName.trim();
let letter = userName.charAt(0);
letter = letter.toUpperCase();

let extraChars = userName.slice(1);
extraChars = extraChars.toLowerCase();
userName = letter + extraChars;
console.log(userName); // without using method chaining

userName =userName.trim().charAt(0).toUpperCase()+ userName.trim().slice(1).toLowerCase();
console.log(userName); //with method chaining */

/* Logical operator
AND = &&
OR = ||
NOT = | 
*/
const temp = -250;
if (temp <= 0 && temp > 30){
    console.log("The weather is good!");
}
else{
    console.log(`the weather is bad`);
}

const isSunny = true;




