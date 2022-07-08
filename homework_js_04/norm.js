//task 1
function greet (a){
    if (a > 1){
    let sum = 0;
    for (let i = 1; i<= Math.sqrt(a); i++ ){
        if ( a % i===0){
        sum = sum + i + a/i ;
        } 
    }
    if ( sum-a === a){
    // console.log( "число є досконалим");  //для проверки task2 закоментировать строку
    return true;
    }else {
    // console.log("число НЕ є досконалим");  //для проверки task2 закоментировать строку
    return false;
    }
}
}
greet(28);




//task 2
function task2( min, max){
    for ( let i = min; i <= max; i++){
        if ( greet(i) === true){
            console.log(i);
        }
    }
}
task2(0 , 56);