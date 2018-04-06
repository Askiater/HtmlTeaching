function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
}

var menu = {
    weight : 300,
    height: 450,
    title : 'MainWindow',
    padding : 30,
    margin : '30px'
}

for (const key in menu) {
    if (isNumeric(menu[key]) || parseInt(menu[key])) {
        menu[key] = parseInt(menu[key]) * 2;
    }
}

console.log(parseInt(menu['margin']));

console.log(menu);