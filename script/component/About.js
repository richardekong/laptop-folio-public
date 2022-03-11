
import {content} from '../template/About.js';

export function displayAbout(){
    const main = document.getElementById("main");
    const aboutItem = document.getElementById("about-item");
    aboutItem.onclick = (_clickListener) => main.innerHTML = content;
}