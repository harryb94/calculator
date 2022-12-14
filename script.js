let display = '';
let screen = document.getElementById('currentDisplay');
let displayHistory = '';
let history = document.getElementById('history');
let result;
let funcProcess = '';
let keypress;

//when key on keyboard is pressed
window.addEventListener('keydown', function(e) {

    //when a number key is pressed
    if (parseInt(e.key) >= 0 && parseInt(e.key) <10){
        if (display.length > 8){
            return;}
        else{
        display += e.key;
        updateDisplay();}
    }

    //when '=' or 'enter key is pressed
    if (e.key == 'Backspace'){
        display = display.slice(0,-1);
        updateDisplay();
    }

    //when '=' or 'enter key is pressed
    if (e.key == '=' || e.key == 'Enter'){
     calculate();
    }

    //when '.' key is pressed
    if (e.key == '.'){
        if (display.includes('.'))
        {return;}
    
        if (display.length > 8){
            return;
        }
    
        else{
        display += e.key;
        updateDisplay();
        }
    }

    //when '+' key is pressed
    if (e.key == '+'){
        if (funcProcess == ''){
            funcProcess = e.key; 
        }
        funcPress();
        funcProcess = e.key; 
    }

     //when '-' key is pressed
     if (e.key == '-'){
        if (funcProcess == ''){
            funcProcess = e.key; 
        }
        funcPress();
        funcProcess = e.key; 
    }   

    //when '*' key is pressed
    if (e.key == '*'){
        if (funcProcess == ''){
            funcProcess = e.key; 
        }
        funcPress();
        funcProcess = e.key; 
    }    

    //when '+' key is pressed
    if (e.key == '/'){
        if (funcProcess == ''){
            funcProcess = e.key; 
        }
        funcPress();
        funcProcess = e.key; 
    }   
    
})

function updateDisplay() {
    screen.innerHTML = display;
}

//When a number is clicked
let numbers = document.querySelectorAll('#number');
numbers.forEach((number) => { 
number.addEventListener('click', () => {
        if (display.length > 8){
            return;
        }
        else {
        display += number.className;
            updateDisplay();
        }
    })
});

//When the 'dot' or 'decimal' button is clicked
let dot = document.querySelector('#dot');
dot.addEventListener('click', () => {
    if (display.includes('.'))
    {return;}

    if (display.length > 8){
        return;
    }

    else{
    display += dot.className;
    updateDisplay()
    }
});

//When a function button is clicked eg. + x / -     
let functionButton = document.querySelectorAll('#function');
functionButton.forEach((func) => {
    func.addEventListener('click', () => {
        if (funcProcess == ''){
            funcProcess = func.className; 
        }
        funcPress();
        funcProcess = func.className; 
    })
})

function funcPress() {
            if (display != '' && displayHistory != ''){
                calculate();
            }
            
            else{
            displayHistory = display;
            history.innerHTML = displayHistory + ' ' + funcProcess;
            display = '';
            updateDisplay();
            }
}

//When equals button is clicked
let equalsButton = document.querySelector('#equals')
equalsButton.addEventListener('click', () => {
    calculate();
})

//When clear button is clicked
let clearButton = document.querySelector('#clear')
clearButton.addEventListener('click', () => {
    clear();
})

//When delete button is clicked
let deleteButton = document.querySelector('#delete')
deleteButton.addEventListener('click', () => {
    display = display.slice(0,-1);
    updateDisplay();
})

function clear(){
    display = "";
    displayHistory = '';
    result = '';
    funcProcess = '';
    updateDisplay();
    history.innerHTML = displayHistory + ' ' + funcProcess;
}

function calculate() {
    if (funcProcess == '*'){
        result = (parseFloat(display) * parseFloat(displayHistory)).toFixed(2).replace(/[.,]00$/, "");
        screen.innerHTML = result;
        history.innerHTML = displayHistory + ' ' + funcProcess + ' ' + display;
        displayHistory = result;
        display = '';
    }

    if (funcProcess == '+'){
        result = (parseFloat(display) + parseFloat(displayHistory)).toFixed(2).replace(/[.,]00$/, "");
        screen.innerHTML = result;
        history.innerHTML = displayHistory + ' ' + funcProcess + ' ' + display;
        displayHistory = result;
        display = '';
    }

    if (funcProcess == '/'){
        if (display == 0){
            result = 'Cannot divide by zero';
            screen.innerHTML = result;
        }
        else {
        result = parseFloat(displayHistory) / (parseFloat(display)).toFixed(2).replace(/[.,]00$/, "");
        screen.innerHTML = result;
        history.innerHTML = displayHistory + ' ' + funcProcess + ' ' + display;
        displayHistory = result;
        display = '';
    }
    }

    if (funcProcess == '-'){
        result = (parseFloat(displayHistory) - parseFloat(display)).toFixed(2).replace(/[.,]00$/, "");
        screen.innerHTML = result;
        history.innerHTML = displayHistory + ' ' + funcProcess + ' ' + display;
        displayHistory = result;
        display = '';
    }
    }



