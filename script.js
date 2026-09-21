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


const myAge = document.getElementById("myAge");
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
}





