let display = [];
let screen = document.getElementById('screen');



let numbers = document.querySelectorAll('#number');
numbers.forEach((number) => { 
number.addEventListener('click', () => {
        display.push(parseInt(number.className));
        console.log(display);
        console.log(display.join(''));
        screen.innerHTML = display.join('');
    })
});

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
}

)

