$(document).ready(function () {
    // Mask for phone
    $('input.phone').mask("+7(000) 000 00-00");
    
    $('.modal__btn').on('submit', function (e) {
        e.preventDefault();
    });
});