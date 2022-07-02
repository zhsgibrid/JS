let a = prompt('Please enter the desired contribution');
let b = prompt('Please enter the desired date');
let c = 365;
let d = 5;
let e = ( (a*d*b*30/c)/100).toFixed(2);
alert(e);


/*
 2 && 0 && 3 (false)

 2 || 0 || 3 (true)

2 && 0 || 3  (true)
*/