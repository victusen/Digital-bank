
const menuIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');


const modalBackDrop = document.querySelector('.modal-container');
const modalOverlay = document.querySelector('.modal-nav-container');
const listElements = document.querySelectorAll('.modal-container li');

// The real work 
menuIcon.addEventListener('click', () => {
  modalBackDrop.style.display = 'flex';
  menuIcon.style.display = 'none'; 
  closeIcon.style.display = 'block';
});
closeIcon.addEventListener('click', () => {
  modalBackDrop.style.display = 'none';
  closeIcon.style.display = 'none';
  menuIcon.style.display = 'block'; 
});
listElements.forEach(element => {
  element.addEventListener('click', () => {
    modalBackDrop.style.display = 'none';
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  });
});


modalOverlay.addEventListener('click', (e) => {
  e.stopPropagation();
})
modalBackDrop.addEventListener('click', (e) => {
  e.stopPropagation();
  modalBackDrop.style.display = 'none';
  closeIcon.style.display = 'none';
  menuIcon.style.display = 'block';
});
