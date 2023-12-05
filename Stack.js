let Length = 3;

function push() {

}

function pop() {


}

function stackTop() {

}

function assign() { //出現輸入列 然後交給真正的build
    let board = document.getElementById('input');
    let blank = document.createElement('input');
    let submit = document.createElement('button');

    board.className = 'input';
    blank.type = Number;
    blank.placeholder = '請輸入0~10之間的數字';

    submit.value = 'submit';
    submit.addEventListener('click', build, false);

    board.appendChild(blank);
    board.appendChild(submit);


}

function build() {
    let getVal = document.getElementById('input');
    Length = parseInt(getVal.value);
    getVal.innerHTML = '';
    
    let table = document.createElement('table');


}