const links = document.querySelectorAll('a');
const hl = document.querySelector(`#hl`);


links.forEach((link) => {
    link.addEventListener('mouseenter',(e) => {
        let elm = e.target;
        console.dir(elm);
        hl.style.width = `${elm.offsetWidth}px`;
        hl.style.height = `${elm.offsetHeight}px`;

        hl.style.transform = `translate(${elm.offsetLeft - window.scrollX}px, ${elm.offsetTop - 20 - window.scrollY}px)`;
    });
});
