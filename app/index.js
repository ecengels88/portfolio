import 'whatwg-fetch';
import Headroom from 'headroom.js';

const element = document.querySelector('nav');
const headroom = new Headroom(element);

headroom.init();
