let display = [];
let screen = document.getElementById('screen');



let numbers = document.querySelectorAll('button');
numbers.forEach((number) => { 
number.addEventListener('click', () => {
        display.push(parseInt(number.className));
        console.log(display);
        console.log(display.join(''));
        screen.innerHTML = display.join('');
    })
});
