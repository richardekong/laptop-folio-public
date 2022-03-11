
import {content} from '../template/Home.js';

export function home(){

    const main = document.getElementById("main");
    window.onload = () => main.innerHTML = content;
}

