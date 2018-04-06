function sum(a) {
    return function (b) {
        return a+b;
    }
}
function makeBuffer() { 
    var arr = [];

    var result = function() {
        for (let i = 0; i < arguments.length; i++) {
            arr.push(arguments[i]);
        }
        return arr.join('');
    }

    result.clear = function () {
        arr = [];
    }

    return result;
 }

var buffer = makeBuffer();

buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

console.log(buffer());

var buffer2 = makeBuffer();

buffer2(1,2,3,'80000');

console.log(buffer2());

buffer2.clear();
buffer2(1);

console.log(buffer2());

console.log(sum(4)(-9));