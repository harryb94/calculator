let display = '';
let screen = document.getElementById('currentDisplay');
let displayHistory = '';
let history = document.getElementById('history');
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
        calculate(display,displayHistory,funcProcess);
        displayHistory = display;
        console.log('history ' + displayHistory);
        history.innerHTML = displayHistory;
        display = '';
        screen.innerHTML = display;
        console.log(funcProcess);
    })
})

let equalsButton = document.querySelector('#equals')
equalsButton.addEventListener('click', () => {
    calculate(display,displayHistory,funcProcess);
})

function calculate(display,displayHistory,funcProcess) {
    if (funcProcess == '*'){
        display = (parseInt(display.join('')) * parseInt(displayHistory));
        screen.innerHTML = display;
        }

    if (funcProcess == '+'){
        display = (parseInt(display) + parseInt(displayHistory));
        screen.innerHTML = display;
        console.log('display ' + display);
    }

    if (funcProcess == '/'){
        display = (parseInt(display.join('')) / parseInt(displayHistory));
        screen.innerHTML = display;
    }

    if (funcProcess == '-'){
        display = (parseInt(display.join('')) - parseInt(displayHistory));
        screen.innerHTML = display;        
    }

    }



