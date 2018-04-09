function Calculator() {
    var methods = {
        "+" : function (a,b) {
            return a+b;
        },
        "-" : function (a,b) {
            return a-b;           
        }
    }

    this.addMethod = function (operator, func) {
        methods[operator] = func;
    }
    
    this.calculate = function (str) {
        var a = +(str.split(' '))[0];
        var operator = (str.split(' '))[1];
        var b = +(str.split(' '))[2];
        
        if (isNaN(a) || isNaN(b) || !methods[operator]) {
            return "Неверный формат строки";
        }
        return methods[operator](a,b);       
    }
}

var powerCalc = new Calculator;
powerCalc.addMethod("*", function(a, b) {
  return a * b;
});
powerCalc.addMethod("/", function(a, b) {
  return a / b;
});
powerCalc.addMethod("**", function(a, b) {
  return Math.pow(a, b);
});

console.log(powerCalc.calculate("2 + 3"));