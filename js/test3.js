function findSubArray(arr, a, b) {
    var aIndex = arr.indexOf(a);
    var bIndex = arr.indexOf(b);

    if (~aIndex && ~bIndex) {
        return (aIndex <= bIndex) ?  subArray(arr, aIndex, bIndex) : subArray(arr, bIndex, aIndex);
    }
}

function subArray(mass, a, b) {
    var res = [];

    for (var i = a; i <= b; i++) {   
        res.push(mass[i]);
    }

    return res;
}

function filter(arr, a, b) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) {
            result.push(arr[i]);
        }        
    }

    return result;
}


// var cards = ['defile', 'sylvana', 'frostbolt'];

// cards.pop();
// cards.push(1);
// cards.shift();
// cards.unshift({
//     name: 'Eldar',
//     params : '40px'
// })
var array = [1, '2', 3, 4, 5, '8', 23, 45, 2, [1,2,3], 'mass'];

console.log(filter(array, 4, 23));
console.log(findSubArray(array, 1, 1));

