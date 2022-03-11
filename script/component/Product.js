

import {content} from '../template/Product.js';


export function displayProducts(){
    const main = document.getElementById("main");
    const productItem = document.getElementById("product-item");
    productItem.onclick = () => main.innerHTML = content;
}

