// const form = document.querySelectorAll('.question');
// const resultBox = document.querySelector('.result')

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   resultBox.innerHTML = '';
//   if (!form['q1'].value || !form['q2'].value) {
//     resultBox.textContent = 'Вы ответили не на все вопросы';
//     return;
//   }
//   const resultMarkup = `
//       <h3>Your Answers</h3>
//       <p>First question: ${form['q1'].value}</p>
//       <p>Second question: ${form['q2'].value}</p>
//     `
//   resultBox.insertAdjacentHTML('beforeend', resultMarkup)
// })

const form = document.querySelector('.form');
const resultBox = document.querySelector('.result')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  resultBox.innerHTML = '';
  if (!form['first'].value || !form['second'].value) {
    resultBox.textContent = 'не на все вопросы';
    return;
  }
  const resultMarkup = `
      <h3>Your Answers</h3>
      <p>First question: ${form['first'].value}</p>
      <p>Second question: ${form['second'].value}</p>
    `
  resultBox.insertAdjacentHTML('beforeend', resultMarkup)
})