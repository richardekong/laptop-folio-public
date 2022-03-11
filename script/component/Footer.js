
import {content} from '../template/Footer.js'

const footer = document.getElementById("footer");

export function displayFooter(){
    footer.innerHTML = content
}