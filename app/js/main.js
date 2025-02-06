const fixedHeaderWhenScrolling = () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 0){
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }
}

const resizeBlockHeight = (block, example) => {
    const blockElements = document.querySelectorAll(block);
    const exampleElement = document.querySelector(example);
    const exampleHeight =  window.getComputedStyle(exampleElement).height;

    blockElements.forEach(el => {
        el.style.height = exampleHeight
    });
}


document.addEventListener('DOMContentLoaded', () => {

    resizeBlockHeight('.advantages__img', '.advantages__info');
    
    window.addEventListener('scroll', function () {
        fixedHeaderWhenScrolling();
    });

    window.onresize = () => {
        resizeBlockHeight('.advantages__img', '.advantages__info');
    };
});