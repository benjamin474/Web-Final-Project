export let Length = 3;
export let boardExist = false;
import * as base from 'baseDataStructure.js';

function assign() { base.assign(); }
function clearAll() { base.clearAll(); }
function removeInput() { base.removeInput(); }


function stackTop() {
    let summonBoard = document.getElementById('board');
}


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