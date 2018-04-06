var obj = {
    className : "open menu beatch menu class beatch",
}

function addToClass(obj, value) {
    var classes = obj.className.split(' ') || [];

    for (let i = 0; i < classes.length; i++) {
        if(classes[i] == value || !value)
        {
            return;
        }
    }
    classes.push(value);
    obj.className = classes.join(' ');
}

function removeFromClass(obj, value) {
    var classes = obj.className.split(' ') || [];

    while (~classes.indexOf(value)) {
        classes.splice(classes.indexOf(value),1);
    }

    obj.className = classes.join(' ');
}

function unique(arr) {
    var obj = {};

    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = arr[i];
    }

    return Object.keys(obj);
}

 addToClass(obj, 'mmmmmmmm');
 console.log(obj)
 removeFromClass(obj, 'beatch');
 console.log(obj)

var array = ["open", "menu", "beatch", "menu", "class", "beatch"];

var t = unique(array);
console.log(t)
