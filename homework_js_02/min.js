let a = 0.1;
let b = 0.2;
let c = (a+b).toFixed(10);
console.log(c);


let d = +'1';
let e = 2;
let f = (e+d);
console.log(f);


let valume =  prompt('Please enter the size of the flash drive,Gb');
let valumeFile = 820;
const valumeGb = 1024;
let count = Math.floor(valume*valumeGb/valumeFile);
console.log(count);