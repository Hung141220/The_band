var btnBuys = document.querySelectorAll('.js-buy-ticket');
var modal = document.querySelector('.modal');
var btnClose = document.querySelector('.modal-btn-close');
var modalContainer = document.querySelector('.modal-container');
// popup buy tickets modal
for (item of btnBuys) {
    item.onclick = function () {
        modal.setAttribute('style', 'display:flex');
    }
}
btnClose.onclick = function () {
    modal.setAttribute('style', 'display:none');
}

modal.onclick = function (e) {
    modal.setAttribute('style', 'display:none');
}
modalContainer.addEventListener('click', function (e) {
    e.stopPropagation();
})


// menu mobile 
var header = document.getElementById('header');
var btnMobile = document.querySelector('.mobile-menu-btn');
var headerHeight = header.clientHeight;
btnMobile.onclick = function () {
    if (header.clientHeight === headerHeight) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}
// click menu 
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
var subnav = document.querySelector('.subnav');


for (menuItem of menuItems) {
    menuItem.onclick = function (e) {

        var isParentMenu = this.nextElementSibling && 
        this.nextElementSibling.classList.contains('subnav');
        if (!isParentMenu) {
            header.style.height = null;
        } else {
            e.preventDefault();
            var isActive = subnav.classList.contains('active');
            if (!isActive) {
                subnav.classList.add('active');
            } else
                subnav.classList.remove('active');
        }
    }
}