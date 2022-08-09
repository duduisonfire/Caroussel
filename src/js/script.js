const slideItem = document.querySelectorAll('.item');
const leftButton = document.querySelector('.btn-left');
const rightButton = document.querySelector('.btn-right');
let active = 0;

function toRight(e){
    e.preventDefault;
    if (active === slideItem.length - 1){
        active = 0;
    } else {
        active += 1;
    }

    slideItem[active].scrollIntoView({
        inline: "center",
        behavior: "smooth",
    })
}

leftButton.addEventListener('click', e =>{
    e.preventDefault;
    if (active === 0){
        active = slideItem.length - 1;
    } else {
        active -= 1;
    }

    slideItem[active].scrollIntoView({
        inline: "center",
        behavior: "smooth",
    })
})

rightButton.addEventListener('click', e =>{
    toRight(e);
})

setInterval(() => {toRight(e)}, 5000);