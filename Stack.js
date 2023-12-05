function push(){

}

function pop(){


}

function stackTop(){

}

function assign(){ //出現輸入列 然後交給真正的build
    let board = document.getElementById('input');
    let blank = document.createElement('input');
    let submit = document.createElement('div');
    
    board.className = 'input';
    blank.type = Number;
    blank.placeholder = '請輸入0~10之間的數字';

    board.appendChild(blank);


}   

function build(){
    let table = document.createElement('table');

}