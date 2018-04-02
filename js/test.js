'use strict';

function isEmpty(obj) {
    for (var key in obj)
    {
        return false;   
    }
    return true;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)

var salaries = {
    'Fred'      : 300,
    'Meh'       : 900,
    'Draskel'   : 450,
    'Fraer'     : 1200
}


var maxValue = 0;
var maxValueName = '';
for (var key in salaries) {
    if (maxValue < salaries[key]) {
        maxValue = salaries[key];
        maxValueName = key;
    }
}

maxValue = maxValue || 'Object is empty';

console.log(maxValue);