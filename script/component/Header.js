
import {content} from '../template/Header.js';

const header = document.getElementById("header");

export function displayHeader(){
    header.innerHTML = content; 
}

