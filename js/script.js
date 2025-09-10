const menuList = document.querySelector('.menu-list')
const menuBtn = document.querySelector('.menu__btn')

menuBtn.addEventListener('click', function() {
    menuList.classList.toggle('menu-list--active')
})