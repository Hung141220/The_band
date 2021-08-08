var btnBuys = document.querySelectorAll('.js-buy-ticket');
var modal = document.querySelector('.modal');
var btnClose = document.querySelector('.modal-btn-close');
for (item of btnBuys) {
    item.onclick = function () {
        modal.setAttribute('style', 'display:flex');
    }
}
btnClose.onclick = function () {
    modal.setAttribute('style', 'display:none');
}