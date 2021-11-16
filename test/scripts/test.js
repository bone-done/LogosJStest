const buttonPlus = document.querySelector(`.plus`);
const buttonSubtr = document.querySelector(`.subtr`);
const buttonMulti = document.querySelector(`.multi`);
const buttonDivis = document.querySelector(`.divis`);
let rezultHTML = document.getElementById(`rezult`);

let rezult = 0;
let a = 0;
let b = 0;


function sum () {
    a = document.getElementById('a').value
    b = document.getElementById('b').value
    rezult = Number(a) + Number(b); 
    rezultHTML.innerHTML = `Rezult : ${Number(rezult)}`;
}
function substr () {
    a = document.getElementById('a').value
    b = document.getElementById('b').value
    rezult = a - b;
    rezultHTML.innerHTML = `Rezult : ${Number(rezult)}`;
}
function multi () {
    a = document.getElementById('a').value
    b = document.getElementById('b').value
    rezult = a * b;
    rezultHTML.innerHTML = `Rezult : ${Number(rezult)}`;
}
function divis () {
    a = document.getElementById('a').value
    b = document.getElementById('b').value
    rezult = a / b;
    rezultHTML.innerHTML = `Rezult : ${Number(rezult)}`;
}

buttonPlus.addEventListener("click", sum);
buttonSubtr.addEventListener("click", substr);
buttonMulti.addEventListener("click", multi);
buttonDivis.addEventListener("click", divis);