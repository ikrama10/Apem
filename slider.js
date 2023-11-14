document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        // Optional parameters
        grabCursor:true,
        direction: "horizontal",
        loop: true,
        autoHeight: false,
        centeredSlides: true,
        slidesPerView: 2,
        // spaceBetween:20,
        // Responsive breakpoints
        breakpoints: {
          320:
          {
            slidesPerView: 1,
            spaceBetween:0,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          992: {
            slidesPerView: 3,
            // spaceBetween: 0,
          },
        },
    
        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },
    
        // Navigation arrows
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
    
         
        scrollbar: {
    el: '.swiper-scrollbar',
    },
      });
  });