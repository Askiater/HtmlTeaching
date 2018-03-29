var today = new Date();
var hour = today.getHours();
var greetings;

if (hour>18) {
    greetings = 'Good evening';
}
else if (hour>12) {
    greetings = 'Good day. To die';
}
else if (hour>0) {
    greetings = 'Good morning';
}

document.write('<h3>' + greetings + '</h3>');