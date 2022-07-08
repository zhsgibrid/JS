//task 1
// function nameFunction (){}

// let greet = function(){}

// let func = (arg1, arg2...) => width * height;

// var sum = new Function('a,b', ' return a+b;');



//task 2
function task2 ( ){
console.log(arguments.length); 
}
task2(1,2,5,66);



// task 3
function task3( a,b){
    let ab;
    if (a > b ){
        ab = 1;
    }else if (a < b){
        ab = -1;
    }else if (a === b){
        ab = 0
    }
    console.log(ab);
    return ab;
}
 task3(1, 2);


//task 4
function task4( a){
    let prot = 1;
   for ( let i = 1; i <= a; i++){
      prot = prot*i;
   }
    console.log(prot);
}
task4 (4);



//task 5
function greet( a, b, c,){
        console.log("" + a  + b + c);      // если "" поставить в конце оно все считает как числа, если после 1го числа тогда как строку.(выяснено методом пробы)
}
greet (1 , 4 , 9);



//task 6
function getRectArea ( a,b){
    if ( arguments.length == 2 ) {
    return a*b;
} else if ( arguments.length == 1){
    return a**2;
}
}
let rectArea = getRectArea (5,6);
console.log(rectArea);