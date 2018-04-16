var user =
{ 
    firstName:"Василий",
    surname:"Петров", 
    patronym:"Иванович"
};

function showFullName(firstPart, lastPart){
    alert(this[firstPart]+" "+this[lastPart]);
}

function ConstructorOfGod(param) {
    this.obj = 
    {
        "cooked" : param
    };
}

// f.call(контекст, аргумент1, аргумент2, ...)
showFullName.call(user,'firstName','surname'); // "Василий Петров"
showFullName.call(user,'firstName','patronym'); // "Василий Иванович"

//Забирать значения от конструктора используя call или apply нельзя
(new ConstructorOfGod).call(user, true);

console.log(user);