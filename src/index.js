import './sass/main.scss';

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const refs = {
    btnStart: document.querySelector('[data-action="start"]'),
    btnStop: document.querySelector('[data-action="stop"]'),
    body: document.body,
}

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let id = null;
let hello = '';

function onStart() {
    id = setInterval(() => {
        refs.body.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)]
    }, 1000)
    refs.btnStart.disabled = true;
    refs.btnStart.classList.add('black')
    refs.btnStart.classList.remove('btn-start')
    hello = console.log('Hello, Dima!)');
}

function onStop() {
    clearInterval(id);
    refs.btnStart.disabled = false;
    refs.body.style.background = null
    refs.btnStart.classList.remove('black')
    refs.btnStart.classList.add('btn-start')
    console.clear()
}

// function randomColor() {
//     return `rgb(${randomIntegerFromInterval(0, 255)}, 
//     ${randomIntegerFromInterval(0, 255)}, 
//     ${randomIntegerFromInterval(0, 255)})`
// }

refs.btnStart.addEventListener('click', onStart);
refs.btnStop.addEventListener('click', onStop);
