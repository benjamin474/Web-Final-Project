let Length = 3;
let boardExist = false;
// import * as base from 'baseDataStructure.js';

// function assign() { 
//     console.log('assign()');
//     base.assign(); 
// }
// function clearAll() { base.clearAll(); }
// function removeInput() { base.removeInput(); }


// function stackTop() {
//     let summonBoard = document.getElementById('board');
// }

function push() {
    
}

function pop() {
    let summonBoard = document.getElementById('board');

}
function buildStack() {
    let summonBoard = document.getElementById('board');
    let stackContainer = document.createElement('table');
    let getVal = document.getElementById('inputBoard');
    Length = parseInt(getVal.value);
    getVal.innerHTML = '';


    let table = document.createElement('table');


}


// import { Length, boardExist } from "./Stack";

function clearAll() {

    removeInput();

}


function removeInput() {

    console.log('removeInput function is activated.');
    let board = document.getElementById('input');
    boardExist = false;
    board.innerHTML = '';
    board.setAttribute('background-color', 'transparent');

}

function assign() { //出現輸入列 然後交給build
    console.log('assign()');
    if (!boardExist) {
        boardExist = true;
        let inputBoard = document.createElement('input');
        let inputBoardContainer = document.getElementById('input');
        let submit = document.createElement('button');
        let cancel = document.createElement('button');
        

        inputBoardContainer.setAttribute('background-color', 'white');

        inputBoardContainer.className = 'input';
        inputBoard.type = Number;
        inputBoard.id = 'inputBoard';
        inputBoard.placeholder = '請輸入0~10之間的數字';

        submit.value = 'submit';
        submit.addEventListener('click', buildStack, false);

        cancel.value = 'cancel';
        cancel.addEventListener('click', removeInput, false);


        inputBoardContainer.appendChild(inputBoard);
        inputBoardContainer.appendChild(submit);
    }


}