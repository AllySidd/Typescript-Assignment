
let personName = '';
personName = prompt('What is your Name?') || '';
if (personName !== null && personName !== '') {
    alert('Hello $(personName), would you like to learn some Python today?');
}
else {
    alert('You have to Fill your name !');
}
