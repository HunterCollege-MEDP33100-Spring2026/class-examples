// Exercise 1: Change the text of an element using getElementById()
// 1. selecting the element
const title = document.getElementById('ex1-heading');
console.log(title);
// 2. change the text
title.innerText = 'New text';


// Exercise 2:  Change the background color of multiple elements using getElementsByClassName()
// 1. select the elements
const boxes = document.getElementsByClassName('colored-box');
console.log(boxes);
Array.from(boxes).forEach(function(box){
    box.style.background = 'red';
})


// Excecise 3: Hide or show an element using querySelector()
// select an element
const box = document.querySelector('#ex3-box');
console.log(box);
box.style.display = 'block';


// Exercise 4: click the button and change the background
// select the element
const button = document.getElementById('color-btn');
console.log(button);
button.addEventListener('click', function() {
    document.body.style.background = 'red';
})