const wrapper = document.querySelector('.wrap');
const cards = wrapper.querySelectorAll('.card');

cards.forEach(card => {
    let stacks = card.querySelector('.stack');

    card.addEventListener('mouseenter', (ev) => {
        stacks.className = 'stack stack--show';
    });

    card.addEventListener('mouseleave', (ev) => {
        stacks.className = 'stack stack--hide';
    });
});