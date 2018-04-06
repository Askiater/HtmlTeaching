function inBetween(a,b) {      
    return function (number) {
        return a <= number && number <= b;
    };
}

function inArray(array) {
    return function (x) {
        return ~array.indexOf(x);
    }
}

function filter(arr, func) {
    var result = [];

    for (let i = 0; i < arr.length; i++) {       
        var temp = arr[i];
        if (func(temp)) {
            result.push(temp);
        }
    }
    return result;
}

var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(arr, function(a) {
  return a % 2 == 0
}));

console.log(filter(arr, inBetween(3, 6))); 

console.log(filter(arr, inArray([1, 2, 10]))); 
