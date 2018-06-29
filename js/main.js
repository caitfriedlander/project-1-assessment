//state
var sum=0;

//cached elements
var display = document.querySelector('h1');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var input = document.querySelector('input');

//event listeners
// document.querySelectorAll('button').addEventListener('click', handleBtnClick)
document.querySelectorAll('button').forEach(function(el) {
    el.addEventListener("click", function() {
        el.textContent == '+' ? sum += parseFloat(input.value) 
        : sum -= parseFloat(input.value);
        render();
    });
  });

//functions

function init() {
    display.textContent = 0;
    input.value = 1;
    render()
}

function render() {
    display.textContent = sum;
    display.style.color = sum >= 0 ? 'black' : 'red';
}

init()