let Length = 3;
let boardExist = false;


function push() {

}

function pop() {


}

function stackTop() {

}

function clearAll(){

    
    console.log('ClearAll function is activated.');
    let board = document.getElementById('input');
    boardExist = false;
    board.innerHTML = '';
    board.setAttribute('background-color','transparent');

}

function assign() { //出現輸入列 然後交給真正的build

    if (!boardExist) {
        boardExist = true;
        let board = document.getElementById('input');
        let inputBoard = document.createElement('input');
        let submit = document.createElement('button');
        board.setAttribute('background-color','white');

        board.className = 'input';
        inputBoard.type = Number;
        inputBoard.id = 'inputBoard';
        inputBoard.placeholder = '請輸入0~10之間的數字';

        submit.value = 'submit';
        submit.addEventListener('click', build, false);

        board.appendChild(inputBoard);
        board.appendChild(submit);
    }


}

function build() {
    let getVal = document.getElementById('inputBoard');
    Length = parseInt(getVal.value);
    getVal.innerHTML = '';


    let table = document.createElement('table');


}