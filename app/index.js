import 'whatwg-fetch';
import Headroom from 'headroom.js';
// import $ from 'jquery';
// import waypoints from '../../package.json/waypoints/lib/noframework.waypoints';

const element = document.querySelector('nav');
const headroom = new Headroom(element);

headroom.init();

// class revealOnScroll {
//   constructor() {
//     this.itemsToReveal = $('.grid-profile');
//     this.hideInitially();
//     this.createWaypoints();
//   }
//
//   hideInitially() {
//     this.itemsToReveal.addClass('reveal-item');
//   }
//
//   createWaypoints() {
//     this.itemsToReveal.each(() => {
//       const currentItem = this;
//       new Waypoint({
//         element: currentItem,
//         handler() {
//           $(currentItem).addClass('reveal-item--is-visible');
//         },
//         offset: '85%'
//       });
//     });
//   }
// }
