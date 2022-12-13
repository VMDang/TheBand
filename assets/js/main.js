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

    var header = document.getElementById('header');
    var mobileMenu = document.getElementById('mobile-menu');
    var headerHeight = header.clientHeight;

    mobileMenu.onclick = function () {
        var isClose = header.clientHeight === headerHeight;
        if (isClose) {
            header.style.height = 'auto';
        } else {
            header.style.height = null;
        }
    }

    var menuItems = document.querySelectorAll('#nav li a[href*="#"]');

    for (let index = 0; index < menuItems.length; index++) {
        var menuItem =  menuItems[index];

        menuItem.onclick = function (event) {
            var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
            
            if (!isParentMenu) {
                header.style.height = null;
            }else {
                event.preventDefault();
            }
        }
    }

});