let display = '';
let screen = document.getElementById('currentDisplay');
let displayHistory = '';
let history = document.getElementById('history');
let result;
//let funcProcess = '*';



//When a number is pressed
let numbers = document.querySelectorAll('#number');
numbers.forEach((number) => { 
number.addEventListener('click', () => {
        display += number.className;
        console.log(display);
        console.log('display ' + display);
        console.log('history ' + displayHistory);
        screen.innerHTML = display;
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

//When a function button is pressed eg. + x / -     
let functionButton = document.querySelectorAll('#function');
functionButton.forEach((func) => {
    func.addEventListener('click', () => {
        funcProcess = func.className; 
        funcPress(display,displayHistory);

    })
})

function funcPress() {
            //calculate(display,displayHistory,funcProcess);
            console.log('display ' + display);
            displayHistory = display;
            console.log('history ' + displayHistory);
            history.innerHTML = displayHistory + ' ' + funcProcess;
            display = '';
            screen.innerHTML = display;
            console.log(funcProcess);
}

let equalsButton = document.querySelector('#equals')
equalsButton.addEventListener('click', () => {
    calculate();
})

function calculate() {
    if (funcProcess == '*'){
        result = (parseInt(display) * parseInt(displayHistory));
        screen.innerHTML = result;
        display = result;
        }

    if (funcProcess == '+'){
        result = (parseInt(display) + parseInt(displayHistory));
        screen.innerHTML = result;
        display = result;
        console.log('result ' + result);
    }

    if (funcProcess == '/'){
        result = parseInt(displayHistory) / (parseInt(display));
        screen.innerHTML = result;
        display = result;
    }

    if (funcProcess == '-'){
        result = (parseInt(displayHistory) - parseInt(display));
        screen.innerHTML = result;    
        display = result; 
    }

    }



