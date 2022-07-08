//task 1 
let min = -50;
let max = 100;
let num = confirm (" Хотите мы угадаем ваше число от" + min + " до " + max + "?");

let found_num;// = undefined;

if ( num === true){ 
    let a, b, mean;
    while (found_num === undefined ){
        mean = Math.floor((max + min)/2);

        a = confirm("Ваше число равняется " + mean +" ?");
        if (a === true){
            found_num = mean;
            break;
        } else if ((max - mean) == 1) {
            found_num = max;
            break;
        } else if ((mean - min) == 1) {
            found_num = min;
            break;
        }

        b = confirm("Ваше число больше " + mean +" ?");

        if (b === true){
            min = mean;
        } else {
            max = mean;
        };
    }
    alert("Ваше число: " + found_num);
}


//task 2
for (let i = 2 ; i <= 9; i++){
 for (let n = 1; n <= 10; n++){
   let  ni = i*n;
    console.log( i  + "*" +  n + "=" + ni);
 }
}


//task 3
let day = parseInt(prompt("Введите число месяца"));
let month = parseInt(prompt("Введите порядковый номер месяца"));
let year = parseInt(prompt("Введите год"));

if (month === 2){
    if (year % 4 === 0){
        if (day === 28){
            day += 1;
        } else if (day === 29) {
            month += 1;
            day = 1;
        } 

    } else if (day === 28) {
        month += 1;
        day = 1;
    }
} else if (month === 12) {
    if (day === 31){
        year += 1;
        month = 1;
        day = 1;
    } else {
        day += 1;
    }
} else if (month === 4 || month === 6 || month === 9 ) { // 1, 3, 5, 7, 8 , 10 - 31 days
    if (day === 30){
        month += 1;
        day = 1;
    } else {
        day += 1;
    }
} else {
    if (day === 31){
        month += 1;
        day = 1;
    } else {
        day += 1;
    }
}

alert(day + '.' + month + '.' + year);





