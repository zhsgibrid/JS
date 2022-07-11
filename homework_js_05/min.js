//task 1
const car = {
    monufactor: '21',
    model:'5',
    year: 0,
    averageSpeed: 60,
    volume: 5,
    fuelConsumption: 0.5,
    drivers:[5],


    //1.
    information: function(){
       return `${this.monufactor} ${this.model} ${this.year} ${this.averageSpeed} ${this.volume} ${this.fuelConsumption} ${this.drivers}`;
    },

    //2.
    addDriver: function(a){
        this.drivers.push(a);
    },

    //3.
    isDriver: function(b){
        for ( let i = 0; i < this.drivers.length; i++){
            if ( b === this.drivers[i]){
                return true;
            }
        }
        return false;
    },

    //4.
    timeOfRaid: function(distance){
        let volumeFuel = this.fuelConsumption* distance/100;
        let t = distance/this.averageSpeed;
        t = Math.ceil(t/4) - 1 + t;
        return [volumeFuel, t ]; 
    }
}
    console.log(car.information());
    car.addDriver('Alex');
    console.log(car.information());
    console.log(car.isDriver('A;'));
    console.log(car.timeOfRaid(123));