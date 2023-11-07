const openBtn = document.querySelector('#modalOpen');
const closeBtn = document.querySelector('#modalClose');
const modal = document.querySelector('.modal');


const toggling = (removing, adding) => {
  removing.classList.remove('hidden');
  adding.classList.add('hidden');
}
openBtn.addEventListener('click', () => {
  toggling(modal, openBtn);
})

closeBtn.addEventListener('click', () => {
  toggling(openBtn, modal);
})