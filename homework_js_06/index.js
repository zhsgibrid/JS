//task 1
class goods{
    constructor( name, amount, price){
        this.name = name;
        this.amount = amount;
        this.buy = false;
        this.price = price;
        this.sum = this.amount * this.price;
    }
 }
const goodsA = new goods("apple", 2 , 2.5);
const goodsB = new goods("banana", 5 , 3);
const goodsC = new goods("milk", 1 , 15);
const goodsD = new goods("noodles", 1 , 13);
const goodsE = new goods("chocolate", 2 , 5);

let list = [ goodsA, goodsB, goodsC, goodsD, goodsE];
console.log(list);


//МИНИМУМ
//1.

function fuSort(list){
    list = list.sort(function(x, y) {
        // true values first
        // return (x === y)? 0 : x? -1 : 1;
        // false values first
        return (x.buy === y.buy)? 0 : x.buy? 1 : -1;
    });
}
fuSort(list);
console.log(list);   





 //2.
function bought( list , name){
    for( let v = 0; v < list.length; v++){
        if (list[v].name === name ){
            list[v].buy = true; 
        }
    }
    fuSort(list);
}

 bought(list, "banana");
 console.log(list);



 //НОРМА


 //1.
function newList(name){
    return list.filter((item) => item.name !== name);
};
console.log(newList( "banana"));



//2.
function addList(name, amount, list, price){
    for ( let b = 0; b < list.length; b++){
        if( list[b].name === name ){
            list[b].amount = list[b].amount + amount;
            list[b].sum = list[b].amount * list[b].price;
            return;
        }
        
        
    }
    const goodsF = new goods(name, amount, price);
    list.unshift(goodsF);
}
addList( "milk", 10, list);
console.log(list);







 //МАКСИМУМ

 //1.
 function Sum(list){
    let allSum = 0;
    for( let a = 0; a < list.length; a++){
        allSum = allSum + list[a].sum;
    }
    return allSum;
 }

 console.log(Sum(list));



 //2. 
 function separatedSum(list){
    let notSum = 0;
    let buySum = 0;
    for( let a = 0; a < list.length; a++){ 
        if (list[a].buy === false){
            notSum = notSum + list[a].sum;

        }else{
            buySum = buySum + list[a].sum; 
        }
    }
    return [notSum , buySum];
 }

 console.log(separatedSum(list));



 //3.
 function priceSort( list, sortDirection){
    
    let sortlist =  list.sort(function (a, b) {
        if (a.sum > b.sum) {
          return 1;
        }
        if (a.sum < b.sum) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });
    if (sortDirection === false){

        return sortlist.reverse();
    }else{
        return sortlist;  
    }


 }
 console.log(priceSort( list, false));
