let money = prompt('Please enter the amount of your funds');
let choco = prompt('Please enter the cost of 1 chocolate');
let chocoBuy = ('amount chocos ' + Math.floor(money/choco));
alert(chocoBuy);
let mod = ('remainder you money '+money%choco);
alert(mod);


let num = prompt('Please enter any three-digit number');
function reverse_a_number(num){
    num = num + "";
    return num.split('').reverse().join('');
}

alert(reverse_a_number(num));