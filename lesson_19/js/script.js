document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.nav__burger');
    const navList = document.querySelector('.nav__list');
    
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        navList.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const choices = document.querySelectorAll('[class^="choose__"]');
    
    choices.forEach((choice, index) => {
        choice.addEventListener('click', function() {
            choices.forEach((el, i) => {
                el.classList.remove(`opinion${i + 1}`);
            });
            choice.classList.add(`opinion${index + 1}`);
        });
    });
});