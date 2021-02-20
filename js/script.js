$(document).ready(function () {
    $('.food-slider').slick({
        // autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '.prev',
        nextArrow: '.next',
        responsive: [
            {
                breakpoint: 874,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 714,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    })
})


const menuBar = document.querySelector('.menuBar');
const siteWrapper = document.querySelector('.site-content-wrapper');
const navBg = document.querySelector('.nav-bg');
const siteContent = document.querySelector('.site-content');
const main = document.querySelector('.main');
const mobNavigation = document.querySelector('.mobNavigation');

menuBar.addEventListener('click', (e) => {
    e.preventDefault();
    siteWrapper.classList.toggle('navigate');
    main.classList.toggle('overflow');
    siteContent.classList.toggle('overflow-y');
})

mobNavigation.addEventListener('click', () => {
    siteWrapper.classList.remove('navigate');
})