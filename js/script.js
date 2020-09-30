"use strict";

const modal = document.querySelector('.modal'),
      modalTrigger = document.querySelectorAll('[data-open]'),
      modalCloseBtn = document.querySelector('[data-close]'),
      modalContent = document.querySelector('.modal_body');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', openModal);
    });
    
function openModal() {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = "hidden";
}      

function closeModal() {
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = "";
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modalContent) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')) { 
        closeModal();
    }
});