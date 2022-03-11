
import {displayHeader} from './component/Header.js'
import {displayFooter} from './component/Footer.js'
import {home} from './component/Home.js';
import { navigate } from './component/Menu.js';

const main = document.getElementById("main");

displayHeader()
displayFooter();
home();
navigate();

