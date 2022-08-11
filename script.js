let display = '';
let screen = document.getElementById('currentDisplay');
let displayHistory = '';
let history = document.getElementById('history');
let result;


//When a number is pressed
let numbers = document.querySelectorAll('#number');
numbers.forEach((number) => { 
number.addEventListener('click', () => {
        if (display.length > 8){
            return;
        }
        else {
        display += number.className;
        console.log(display);
        console.log('display ' + display);
        console.log('history ' + displayHistory);
        screen.innerHTML = display;
        }
    })
});

//When the 'dot' or 'decimal' button is pressed
let dot = document.querySelector('#dot');
dot.addEventListener('click', () => {
    if (display.includes('.'))
    {return;}

    if (display.length > 8){
        return;
    }

    else{
    display += dot.className;
    console.log(display);
    screen.innerHTML = display;
    }
});

//When a function button is pressed eg. + x / -     
let functionButton = document.querySelectorAll('#function');
functionButton.forEach((func) => {
    func.addEventListener('click', () => {
        funcProcess = func.className; 
        funcPress(display,displayHistory);

    })
})

function funcPress() {
            console.log('display ' + display);
            displayHistory = display;
            console.log('history ' + displayHistory);
            history.innerHTML = displayHistory + ' ' + funcProcess;
            display = '';
            screen.innerHTML = display;
            console.log(funcProcess);
}

//When equals button is pressed
let equalsButton = document.querySelector('#equals')
equalsButton.addEventListener('click', () => {
    calculate();
})

//When clear button is pressed
let clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', () => {
    clear();
})

//When delete button is pressed
let deleteButton = document.querySelector('#delete')
deleteButton.addEventListener('click', () => {
    display = display.slice(0,-1);
    screen.innerHTML = display;
})

function clear(){
    display = "";
    displayHistory = '';
    result = '';
    funcProcess = '';
    screen.innerHTML = display;
    history.innerHTML = displayHistory + ' ' + funcProcess;
}

function calculate() {
    if (funcProcess == '*'){
        result = (parseFloat(display) * parseFloat(displayHistory)).toFixed(2).replace(/[.,]00$/, "");
        screen.innerHTML = result;
        display = result;
        }

    if (funcProcess == '+'){
        result = (parseFloat(display) + parseFloat(displayHistory)).toFixed(2).replace(/[.,]00$/, "");
        screen.innerHTML = result;
        display = result;
        console.log('result ' + result);
    }

    if (funcProcess == '/'){
        if (display == 0){
            result = 'Cannot divide by zero';
            screen.innerHTML = result;
        }
        else {
        result = parseFloat(displayHistory) / (parseFloat(display)).toFixed(2).replace(/[.,]00$/, "");
        screen.innerHTML = result;
        display = result;
        }
    }

    if (funcProcess == '-'){
        result = (parseFloat(displayHistory) - parseFloat(display)).toFixed(2).replace(/[.,]00$/, "");
        screen.innerHTML = result;    
        display = result; 
    }
    }



