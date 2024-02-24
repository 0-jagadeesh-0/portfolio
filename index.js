document.addEventListener('scroll', function () {
    let sections = document.querySelectorAll('.section');
    let navLinks = document.querySelectorAll('nav a');
    let scrollPosition = window.scrollY;
    sections.forEach(function (current, index) {
        let top = current.offsetTop;
        let bottom = top + current.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
            navLinks[index].classList.add('active');
        } else {
            navLinks[index].classList.remove('active');
        }
    });
});