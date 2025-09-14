const menuList = document.querySelector('.menu-list')
const menuBtn = document.querySelector('.menu__btn')

menuBtn.addEventListener('click', function() {
    menuList.classList.toggle('menu-list--active')
})



const swiper = new Swiper('.projects__slider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },


  navigation: {
    nextEl: '.projects__btn-next',
    prevEl: '.projects__btn-prev',
  },
  
});