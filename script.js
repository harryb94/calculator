let display = [];
let screen = document.getElementById('currentDisplay');
let displayHistory;
let history = document.getElementById('history');


//When a number is pressed
let numbers = document.querySelectorAll('#number');
numbers.forEach((number) => { 
number.addEventListener('click', () => {
        display.push(parseInt(number.className));
        console.log(display);
        console.log(display.join(''));
        screen.innerHTML = display.join('');
    })
});

//When the 'dot' or 'decimal' button is pressed
let dot = document.querySelector('#dot');
dot.addEventListener('click', () => {
    if (display.includes('.'))
    {return}
    else{
    display.push(dot.className);
    console.log(display);
    console.log(display.join(''));
    screen.innerHTML = display.join('');
    }
});

//When a function button is pressed eg. x / = - 
let functionButton = document.querySelectorAll('#function');
functionButton.forEach((func) => {
    func.addEventListener('click', () => {
        displayHistory = display.join('');
        history.innerHTML = displayHistory;
        display.length = 0;
        screen.innerHTML = display.join('');
        let functionProcess = func.className;
        console.log(functionProcess);
    })
})

