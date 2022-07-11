//task 1

const clock = {
    hour: 3 ,
    min: 45 ,
    sec: 15 ,


    //1.
    time: function(){
        return `${this.hour}:${this.min}:${this.sec}`;
    },

    //2./3./4./5.
    addHour: function( hour){
        this.hour = hour + this.hour;
    },
    addMin: function( min){
        this.min = this.min + min;
        let hour = Math.trunc(this.min / 60);
        this.addHour(hour);
        this.min = this.min % 60;
    },
    addSec: function( sec){
        this.sec = this.sec +sec;
        let min = Math.trunc (this.sec/60);
        this.addMin(min);
        this.sec = this.sec % 60;
    },
}
console.log(clock.time());

clock.addHour(0);
console.log(clock.time());

clock.addMin(45);
console.log(clock.time());

clock.addSec(59);
console.log(clock.time());


