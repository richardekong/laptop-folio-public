import { displayAbout } from './About.js';
import { displayContact } from './Contact.js';
import { home } from './home.js';
import {displayProducts} from './Product.js'
import { displayReview } from './Review.js';

export function navigate(){
    
     home();
     displayProducts();
     displayContact();
     displayReview();
     displayAbout();

}

