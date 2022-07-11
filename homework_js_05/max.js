//task 1
const fraction_t = {
    numerator : 5 ,
    denominator: 15,
}
const fraction_t2 = {
    numerator : 3 ,
    denominator: 7,
}

const fractionMath = {
    numerator: 0,
    denominator: 0,

    mathSum:function(fraction, fraction2){
        if (fraction.denominator === fraction2.denominator ){
        this.numerator = fraction.numerator + fraction2.numerator;
        this.denominator = fraction.denominator;
        } else if (fraction.denominator !== fraction2.denominator){
            this.numerator = fraction.numerator * fraction2.denominator + fraction2.numerator * fraction.denominator;
            this.denominator = fraction.denominator * fraction2.denominator;
        }
        return this.mathReduction(fractionMath);
       
    },
    mathSubstration:function(fraction, fraction2){
        if (fraction.denominator === fraction2.denominator ){
            this.numerator = fraction.numerator - fraction2.numerator;
            this.denominator = fraction.denominator;
            } else if (fraction.denominator !== fraction2.denominator){
                this.numerator = fraction.numerator * fraction2.denominator - fraction2.numerator * fraction.denominator;
                this.denominator = fraction.denominator * fraction2.denominator;
            }
               return this.mathReduction(fractionMath);

    },
    mathMultiplication:function(fraction,fraction2){
        this.numerator = fraction.numerator * fraction2.numerator;
        this.denominator = fraction.denominator * fraction2.denominator;
               return this.mathReduction(fractionMath);

    },
    mathDevision:function(fraction,fraction2){
        this.numerator = fraction.numerator * fraction2.denominator;
        this.denominator = fraction.denominator * fraction2.numerator;
               return this.mathReduction(fractionMath);

    },
    mathReduction:function(fraction){
        let divisor = this.getNOD(fraction.numerator, fraction.denominator);
        fraction.numerator = fraction.numerator / divisor;
        fraction.denominator = fraction.denominator / divisor;
        return `${fraction.numerator} / ${fraction.denominator}`;
    },

    getNOD: function(c, b){
        c = Math.abs(c);
        b = Math.abs(b);

        while (b){
            let t = b;
            b = c % b;
            c = t;
        }
        return c;
    }
}
console.log(fractionMath.mathSum(fraction_t, fraction_t2));
console.log(fractionMath.mathSubstration(fraction_t, fraction_t2));
console.log(fractionMath.mathMultiplication(fraction_t, fraction_t2));
console.log(fractionMath.mathDevision(fraction_t, fraction_t2));
console.log(fractionMath.mathReduction(fraction_t));