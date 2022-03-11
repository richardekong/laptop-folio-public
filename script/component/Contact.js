
import {content} from '../template/Contact.js';

export function displayContact(){
    const main = document.getElementById("main");
    const contactItem = document.getElementById("contact-item");
    contactItem.onclick = (clickEvent) => main.innerHTML = content;
}