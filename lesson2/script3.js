const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  if (e.isTrusted) {
    btn.textContent = "Товар добавлен в корзину";
    setTimeout(() => {
        btn.textContent = 'Купить';
    }, 2000);
  }
})
