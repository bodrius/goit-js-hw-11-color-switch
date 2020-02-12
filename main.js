"use strict";

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];



// const choiseBody = document.querySelector('body');
const choiseButtonStart = document.querySelector('button[data-action="start"]');
const choiseButtonStop = document.querySelector('button[data-action="stop"]');
choiseButtonStart.addEventListener("click", onStart);


function changeColor() {
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
  const choiseArray = colors[randomIntegerFromInterval(0, colors.length - 1)];
  document.body.style.backgroundColor = choiseArray;
}

let timerId;

function onStart(){
    timerId = setInterval(changeColor,1000);
    choiseButtonStart.removeEventListener("click", onStart);
    choiseButtonStart.setAttribute('disabled', 'disabled');
    choiseButtonStop.addEventListener('click', onStop); 
}

function onStop (){
    clearInterval(timerId);
    choiseButtonStop.removeEventListener('click', onStop)
    choiseButtonStart.removeAttribute('disabled'); 
    choiseButtonStart.addEventListener("click", onStart);
}