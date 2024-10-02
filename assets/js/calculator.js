
let sonuc = document.querySelector('.sonuc h1');
let btns = document.querySelectorAll('.keyboard button:not(.reset, .esit, .del)');

function handleCalculatorClick() {
  sonuc.innerText += this.innerText;
}
for(let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', handleCalculatorClick);
}

let esit= document.querySelector('.esit');
function handleSonucClick() {
  sonuc.innerText = eval(sonuc.innerText);
}
esit.addEventListener('click', handleSonucClick);

let reset = document.querySelector('.reset');
function handleResetClick() {
  sonuc.innerText = '';
}
reset.addEventListener('click', handleResetClick);


let del = document.querySelector('.del');
function handleDeleteClick() {
  sonuc.innerHTML = sonuc.innerHTML.substring(0, sonuc.innerHTML.length - 1);
}
del.addEventListener('click', handleDeleteClick);