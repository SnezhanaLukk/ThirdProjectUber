window.addEventListener('DOMContentLoaded', ()=>{

    const menu= document.querySelector('.menu'),
          menuItem = document.querySelectorAll('.menu_item'),
          hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click',() => {
        menu.classList.toggle('menu_active');
        hamburger.classList.toggle('hamburger_active');
    });
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
});
// modal dialog
 const modalDialog = document.querySelector('.modal'),
    modalOpenBtn = document.querySelectorAll('[data-modal]');

modalOpenBtn.forEach(btn => {
    btn.addEventListener('click', openModal);
});

modalDialog.addEventListener('click', e => {
    if (e.target === modalDialog || e.target.getAttribute('data-close') == '')
        closeModal();
});

document.addEventListener('keydown', e =>{
    if (e.target === "Escape" &&  modalDialog.classList.contains('show'))
        closeModal();
})

function openModal(){
    modalDialog.classList.remove('hide');
    modalDialog.classList.add('show');
}

function closeModal(){
    modalDialog.classList.remove('show');
    modalDialog.classList.add('hide');
}
    
