/**
 * Javascript for The Band (template We school)
 */

// Button buy tickets
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modalContainer = document.querySelector('.js-modal-container')
const modalOpen = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')

function showBuyTicket() {
    modalOpen.classList.add('open');
}

function hideBuyTicket() {
    modalOpen.classList.remove('open');
}

buyBtns.forEach(buyBtn => {
    buyBtn.addEventListener('click', showBuyTicket);
});

modalClose.addEventListener('click', hideBuyTicket);

modalOpen.addEventListener('click', hideBuyTicket);

modalContainer.addEventListener('click', function (event) {
    event.stopPropagation();
});