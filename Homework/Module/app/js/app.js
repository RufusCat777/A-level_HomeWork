// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	var swiper = new Swiper(".blog-slider", {
		    slidesPerView: 1,
        spaceBetween: 36  ,
        pagination: {
          el: ".blog__slider-pagination",
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 36,
          }
        },
      });

})
