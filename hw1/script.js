// Вы разрабатываете веб-страницу для отображения расписания занятий в спортивном клубе. Каждое занятие имеет название, время проведения, максимальное количество участников и текущее количество записанных участников.

// 1. Создайте веб-страницу с заголовком "Расписание занятий" и областью для отображения занятий.

// 2. Загрузите информацию о занятиях из предоставленных JSON-данных. Каждое занятие должно отображаться на странице с указанием его названия, времени проведения, максимального количества участников и текущего количества записанных участников.

// 3. Пользователь может нажать на кнопку "Записаться" для записи на занятие. Если максимальное количество участников уже достигнуто, кнопка "Записаться" становится неактивной.

// 4. После успешной записи пользователя на занятие, обновите количество записанных участников и состояние кнопки "Записаться".

// 5. Запись пользователя на занятие можно отменить путем нажатия на кнопку "Отменить запись". После отмены записи, обновите количество записанных участников и состояние кнопки.

// 6. Все изменения (запись, отмена записи) должны сохраняться и отображаться в реальном времени на странице.

// 7. При разработке используйте Bootstrap для стилизации элементов.

const employmentsJSON =
  '[{"name": "растяжка","time": "17-00", "count": 20, "maxCount": 20}, {"name": "пилатес","time": "18-00", "count": 10, "maxCount": 20}, {"name": "йога","time": "19-00", "count": 0, "maxCount": 20}]';
const employments = JSON.parse(employmentsJSON);
// функция для сохранения данных в Local Storage после обновления счетчика:
const setInLocalStorage = (data) => {
  try {
    localStorage.setItem(data.name, JSON.stringify(data));
    return true;
    getFromLocalStorage();
  } catch (e) {
    return false;
  }
};
// получения данных из Local Storage:
const getFromLocalStorage = (data) => {
  try {
    return JSON.parse(localStorage.getItem(data.name));
  } catch (e) {
    return null;
  }
};

function createEmployments(data) {
  const emplEl = document.createElement("div");
  emplEl.classList.add("item");
  if (data.maxCount === data.count) {
    emplEl.innerHTML = `
    <h3 class="name">${data.name}</h3>
    <p class="time">время: ${data.time}</p>
    <p class="max_count">максимальное количество: ${data.maxCount}</p>
    <p class="count">всего записалось: ${data.count}</p>
    <h3>Запись невозможна</h3>
    `;
  } else {
    emplEl.innerHTML = `
    <h3 class="name">${data.name}</h3>
    <p class="time">время: ${data.time}</p>
    <p class="max_count">максимальное количество: ${data.maxCount}</p>
    <p class="count">всего записалось: ${data.count}</p>
    <button id="add_button">Записаться</button>
    <button id="del_button">Удалить запись</button>
    `;
  }

  const addCount = emplEl.querySelector("#add_button");
  addCount &&
    addCount.addEventListener("click", () => {
      if (data.count < data.maxCount) {
        data.count++;
        const count = emplEl.querySelector(".count");
        count.textContent = `всего записалось: ${data.count}`;
        setInLocalStorage(data);
        addCount.style.display = "none";
        delCount.style.display = "block";
      }
    });
  const delCount = emplEl.querySelector("#del_button");
  delCount &&
    delCount.addEventListener("click", () => {
      if (data.count > 0) {
        data.count--;
        const count = emplEl.querySelector(".count");
        count.textContent = `всего записалось: ${data.count}`;
        setInLocalStorage(data);
        delCount.style.display = "none";
        addCount.style.display = "block";
      } else return;
    });

  document.body.appendChild(emplEl);
}
employments.forEach((data) => {
  const savedData = getFromLocalStorage(data);
  if (savedData) {
    // Обновите данные в соответствии с данными из Local Storage
    data.count = savedData.count;
  }
  createEmployments(data);
});

