//task 1
class circle{
    constructor (radius){
        this.radius = radius;

    }
    get radiusCircle(){
        return `${this.radius}`;
    }
    set radiusCircle(radiusCircle){
        this.radius = radiusCircle;
    }
    get diameterCircle(){
        return `${this.radius * 2}`;
        // return this.radius * 2;
    }
    
    square(){
       return Math.PI*this.radius **2;
    }
    
    long(){
        return 2*Math.PI*this.radius;
    }
}

let myFirstCircle = new circle(1);

console.log(myFirstCircle.square());
console.log(myFirstCircle.long());

console.log(myFirstCircle.diameterCircle);
console.log(myFirstCircle.radiusCircle);

myFirstCircle.radiusCircle = 2;
console.log(myFirstCircle.radiusCircle);



//task 2
class marker{
    constructor(color){
        this.color = color ;
        this.volume = 100;
        this.consumption = 0.5;
    }
    stringColor(text){
        let index = 0;
        let currentVolume = this.volume/this.consumption;
        for (let b = 0; b < currentVolume; b++ ){
          
            if ( text[index] === ' ' ){
                b -= 1;
            }else{
                this.volume -= this.consumption;
            }

            if(index >= text.length - 1){
                break;
            };
            
            index += 1;
        }
        let markerText = text.slice(0, index);
        let textFormat = `color: ${this.color}`;
        console.log(`%c${markerText}`, textFormat); 
    }
}
let fumarker = new marker("green");
fumarker.stringColor('zskdjghklsdjfvnkjxnck  xlvk zlkv  ');
fumarker.stringColor('zskdjghklsdjfvnkjxnck  xlvk zlkv  ');
fumarker.stringColor('zskdjghklsdjfvnkjxnck  xlvk zlkv  ');
fumarker.stringColor('zskdjghklsdjfvnkjxnck  xlvk zlkv  ');
fumarker.stringColor('zskdjghklsdjfvnkjxnck  xlvk zlkv  ');
fumarker.stringColor('zskdjghklsdjfvnkjxnck  xlvk zlkv  ');
fumarker.stringColor('zskdjghklsdjfvnkjxnck  xlvk zlkv  ');
console.log(fumarker.volume);

class marker2 extends marker{
    change(){
        this.volume = 100;
    }
}

let newmarker2 = new marker2('blue');
newmarker2.stringColor('zskdjghklsdjfvnkjxnck  xlvk zlkv  zskdjghklsdjfvnkjxnck  xlvk zlkv  zskdjghklsdjfvnkjxnck  xlvk zlkv  zskdjghklsdjfvnkjxnck  xlvk zlkv  zskdjghklsdjfvnkjxnck  xlvk zlkv  zskdjghklsdjfvnkjxnck  xlvk zlkv  zskdjghklsdjfvnkjxnck  xlvk zlkv  zskdjghklsdjfvnkjxnck  xlvk zlkv  zskdjghklsdjfvnkjxnck  xlvk zlkv  ');
console.log(newmarker2.volume);
newmarker2.change();
newmarker2.stringColor('zskdjghklsdjfvnkjxnck  xlvk zlkv  zskdjghklsdjfvnkjxnck  xlvk zlkv  zskdjghklsdjfvnkjxnck  xlvk zlkv  zskdjghklsdjfvnkjxnck  xlvk zlkv  zskdjghklsdjfvnkjxnck  xlvk zlkv  zskdjghklsdjfvnkjxnck  xlvk zlkv  zskdjghklsdjfvnkjxnck  xlvk zlkv  zskdjghklsdjfvnkjxnck  xlvk zlkv  zskdjghklsdjfvnkjxnck  xlvk zlkv  ');




//3.
class Employee{
    constructor(name, lastname, position, salary){
        this.name = name;
        this.lastname = lastname;
        this.position = position;
        this.salary = salary;
    }
}


const Employee1 = new Employee('Oleg', 'Devedenko', 'manager', 4500);
const Employee2 = new Employee('Kiril', 'Admidakov', 'security', 5000);
const Employee3 = new Employee('Abram', 'Linkol', 'director', 15000);
const Employee4 = new Employee('Olena', 'Kicheva', 'accountant', 5500);


const list = [Employee1, Employee2, Employee3, Employee4];

class EmpTable {
    constructor( list ){
        this.list = list;
        // this.style = "<style> \nsection{ \n   display: flex;\n  justify-content: space-around; \n  }\n </style>";
    }


    getHtml(){

        const table = document.createElement("div");
        table.setAttribute("class", "table");

        const header = document.createElement("div");

        const header_name = document.createElement("div");
        header_name.appendChild(document.createTextNode("Name"));
        header.appendChild(header_name);

        const header_last_name = document.createElement("div")
        header_last_name.appendChild(document.createTextNode("Last Name"));
        header.appendChild(header_last_name );
        
        const position = document.createElement("div")
        position.appendChild(document.createTextNode("Position"));
        header.appendChild(position);

        const salary = document.createElement("div")
        salary.appendChild(document.createTextNode("Salary"));
        header.appendChild(salary);

        header.setAttribute("style", "display: flex; justify-content: space-around");

        table.append(header);
        
        for (let i = 0; i < this.list.length; i++){
            const rowdiv = document.createElement("div");
            
            const row_name = document.createElement("div");
            row_name.appendChild(document.createTextNode(this.list[i].name));
            
            const row_last_name = document.createElement("div");
            row_last_name.appendChild(document.createTextNode(this.list[i].lastname));
            
            const row_pos = document.createElement("div");
            row_pos.appendChild(document.createTextNode(this.list[i].position));
            
            const row_salary = document.createElement("div");
            row_salary.appendChild(document.createTextNode(this.list[i].salary));

            rowdiv.appendChild(row_name);
            rowdiv.appendChild(row_last_name);
            rowdiv.appendChild(row_pos);
            rowdiv.appendChild(row_salary);
            rowdiv.setAttribute("style", "display: flex; justify-content: space-around");

            table.appendChild(rowdiv);
        }

        
        // table.(style);

        return table;
    }
}
const EmployeeTable = new EmpTable(list);
console.log(EmployeeTable.getHtml());

document.querySelector("body").appendChild(EmployeeTable.getHtml());
