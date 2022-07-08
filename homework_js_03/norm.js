//task 1
// let num = prompt("Пожалуйста, введите пятизначное число");
// if (num === num.split('').reverse().join('')){
//  console.log("Это число является палиндромом");
// } else {
//  console.log( "Это число НЕ является палиндромом");
// }


//task 2
// let mon = prompt ("введите сумму покупки");
// if (mon <200 ){
//     console.log("Ваша сумма покупки составила "+ mon);
// } else if(mon >=200 && mon < 300){
//     let a = mon-mon*0.03;
//     console.log("Ваша сумма покупки со скидкой составляет "+ a);
// }else if(mon >=300 && mon < 500){
//     let b = mon-mon*0.05;
//     console.log("Ваша сумма покупки со скидкой составляет "+ b);
// }else if(mon >=500 ){
//     let c = mon-mon*0.07;
//     console.log("Ваша сумма покупки со скидкой составляет "+ c);
// }


//task 3
// let odd = 0; // нечет
// let even = 0;// чёт
// let negative = 0;
// let zero = 0;
// let positive = 0; 
// for ( let i = 0; i < 10; i++ ){
//     let a = parseInt(prompt("введите число"));
//     if (a % 2 != 0){
//         odd += 1;
//     } else {
//         even += 1;
//     };

//     if( a < 0){
//         negative +=1;
//     }else if ( a === 0){
//         zero +=1;
//     }else {
//         positive +=1;
//     }
// }
// console.log('even: ' + even);
// console.log('odd: ' + odd);
// console.log('negative' + negative);
// console.log('zero' + zero);
// console.log('positiv' + positive);





//task 4
// let b = confirm("Вторник. " + "Хочешь увидеть следующий день недели?");
// let c = confirm("Среда. " + "Хочешь увидеть следующий день недели?");
// let d = confirm("Четверг. " + "Хочешь увидеть следующий день недели?");
// let e = confirm("Пятница. " + "Хочешь увидеть следующий день недели?");
// let f = confirm("Суббота. " + "Хочешь увидеть следующий день недели?");
// let g = confirm("Воскресенье. " + "Хочешь увидеть следующий день недели?");
for( let i = 1; i > 0; i++){
    let a = confirm("Понедельник. " + "Хочешь увидеть следующий день недели?");
    let b, c, d, e, f, g = false;

    if (a == true){
        b = confirm("Вторник. " + "Хочешь увидеть следующий день недели?");
    }; 
    
    if(b == true){
        c = confirm("Среда. " + "Хочешь увидеть следующий день недели?");
    };
    
    if (c == true){
        d = confirm("Четверг. " + "Хочешь увидеть следующий день недели?");
    };
    
    if (d == true){
        e = confirm("Пятница. " + "Хочешь увидеть следующий день недели?");
    };
    
    if (e == true){
        f = confirm("Суббота. " + "Хочешь увидеть следующий день недели?");
    };
    
    if (f == true){
        g = confirm("Воскресенье. " + "Хочешь увидеть следующий день недели?");
    };
    
    // if ((a && b && c && d && e && f && g) == false){
    if (a == false || b == false || c == false || d == false || e == false || f == false || g == false){
        break;
    }
    // if (g == true){
    //     a=confirm("Понедельник. " + "Хочешь увидеть следующий день недели?");
    // }else 
}