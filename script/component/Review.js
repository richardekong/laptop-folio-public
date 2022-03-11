
import {content} from '../template/Review.js';

export function displayReview(){
    const main = document.getElementById("main");
    const reviewItem = document.getElementById("review-item");
    reviewItem.onclick = (_clickEvent) => main.innerHTML = content;
}

