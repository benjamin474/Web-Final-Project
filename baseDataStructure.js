
import { Length, boardExist } from "./Stack";

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
        let cancel = document.createElement('button')

        inputBoardContainer.setAttribute('background-color', 'white');

        inputBoardContainer.className = 'input';
        inputBoard.type = Number;
        inputBoard.id = 'inputBoard';
        inputBoard.placeholder = '請輸入0~10之間的數字';

        submit.value = 'submit';
        submit.addEventListener('click', build, false);

        cancel.value = 'cancel';
        cancel.addEventListener('click', removeInput, false);

        inputBoardContainer.appendChild(inputBoard);
        inputBoardContainer.appendChild(submit);
    }


}