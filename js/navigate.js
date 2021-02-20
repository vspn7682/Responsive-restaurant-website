const toTop = document.querySelector('#toTop');
const mainNav = document.querySelector('.mainNav');

window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 300 || document.body.scrollTop > 300) {
        toTop.classList.add('topShow');
    } else {
        toTop.classList.remove('topShow');
    }

})

toTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
})

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
        mainNav.classList.add('fixed');
        mainNav.classList.remove('magic-shadow');
    } else {
        mainNav.classList.remove('fixed');
        mainNav.classList.add('magic-shadow');
    }
})