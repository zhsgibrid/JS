// task 1
const age = parseInt(prompt("Введите свой возраст"));
// 0-11 -Поздравляем, вы ребенок!
// 12-17-Поздравляем, вы подросток!
// 18-59-Поздравляем, вы взрослый!
// 60+-Поздравляем, вы пенсионер!

if (typeof(age) == "number" && age >= 0) {
if(age >=0 && age <12){
    alert ("Поздравляем, вы ребенок!");
}else if( age >=12 && age <18){
    alert ("Поздравляем, вы подросток!");
}else if (age >=18 && age <60){
    alert ("Поздравляем, вы взрослый!");
}else {
    alert("Поздравляем, вы пенсионер!");
}
} else {alert ("Введите верное число")}



// task 2 
const num = prompt("Введите число от 0 до 9");
switch(num){
    case '0':
        alert(")");
        break;
    case '1':
        alert("!");
        break;
    case '2':
        alert("@");   
        break; 
    case '3':
        alert("#");   
        break;   
    case '4':
        alert("$");   
        break;
    case '5':
        alert("%");   
        break;
    case '6':
        alert("^");   
        break;
    case '7':
        alert("&");   
        break;
    case '8':
        alert("*");   
        break;
    case '9':
        alert("(");   
        break;
}


// task 3
let n = parseInt(prompt("Введите первое число"));
let n1 = parseInt(prompt("Введите второе число")); 
if (n1 > n){
let sum=0;
for  (let i = n; i <= n1; i++) {
    sum+=i;
    };
    console.log(sum);
}else if(n > n1){
    let sum=0;
    for  (let i = n1; i <= n; i++) {
        sum+=i;
        };
        console.log(sum);}



// task 4
let c = parseInt(prompt("Введите первое число"));
let b = parseInt(prompt("Введите второе число")); 
if ((typeof a === 'number') && (typeof b ==="number")){
    c = Math.abs(c);
    b = Math.abs(b);
while (b){
    let t = b;
    b = c % b;
    c = t;
}}
console.log(c);



// task 5
let a = parseInt(prompt("Введите число"));

for (let i = 1; i<= Math.sqrt(a); i++ ){
   if ( a % i===0){
 console.log(i);
 console.log(a/i);
}}

    
