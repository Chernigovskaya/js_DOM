const scheduleData = [
    {
      name: "Занятие 1",
      time: "10:00",
      maxParticipants: 20,
      currentParticipants: 15,
    },
    {
      name: "Занятие 2",
      time: "14:30",
      maxParticipants: 15,
      currentParticipants: 10,
    },
    {
      name: "Занятие 3",
      time: "16:45",
      maxParticipants: 10,
      currentParticipants: 10,
    },
  ];
  
  function createScheduleElement(data) {
    const scheduleElement = document.createElement("div");
    scheduleElement.classList.add("card", "mb-3");
  
    if (data.maxParticipants == data.currentParticipants) {
      scheduleElement.innerHTML = `
      <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">Время: ${data.time}</p>
          <p class="card-text">Макс. участников: ${data.maxParticipants}</p>
          <p class="card-text">Записано: <span id="currentParticipants">${data.currentParticipants}</span></p>
          <button class="btn btn-secondary" id="registerBtn">Запись неактивна</button>
          <button class="btn btn-danger" id="cancelBtn" style="display: none;">Отменить запись</button>
      </div>
  `;
    } else {
      scheduleElement.innerHTML = `
      <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
          <p class="card-text">Время: ${data.time}</p>
          <p class="card-text">Макс. участников: ${data.maxParticipants}</p>
          <p class="card-text">Записано: <span id="currentParticipants">${data.currentParticipants}</span></p>
          <button class="btn btn-primary" id="registerBtn">Записаться</button>
          <button class="btn btn-danger" id="cancelBtn" style="display: none;">Отменить запись</button>
      </div>
  `;
    }
  
    const registerBtn = scheduleElement.querySelector("#registerBtn");
    registerBtn.addEventListener("click", () => {
      if (data.currentParticipants < data.maxParticipants) {
        data.currentParticipants++;
        const currentParticipants = scheduleElement.querySelector(
          "#currentParticipants"
        );
        currentParticipants.textContent = data.currentParticipants;
        registerBtn.style.display = "none";
        const cancelBtn = scheduleElement.querySelector("#cancelBtn");
        cancelBtn.style.display = "block";
      }
    });
  
    const cancelBtn = scheduleElement.querySelector("#cancelBtn");
    cancelBtn.addEventListener("click", () => {
      data.currentParticipants--;
      const currentParticipants = scheduleElement.querySelector(
        "#currentParticipants"
      );
      currentParticipants.textContent = data.currentParticipants;
      cancelBtn.style.display = "none";
      registerBtn.style.display = "block";
    });
  
    document.getElementById("schedule").appendChild(scheduleElement);
  }
  
  scheduleData.forEach(createScheduleElement);



  // employments.forEach(createEmployments);

// for (let index = 0; index < employments.length; index++) {

//     const el = document.createElement('div');
//     el.innerHTML = `
//     <h3 class="name">${employments[index].name}</h3>
//     <p class="time">время: ${employments[index].time}</p>
//     <p class="max_count">максимальное количество: ${employments[index].maxCount}</p>
//     <p class="count">всего записалось: ${employments[index].count}</p>
//     <button class="add_button">Записаться</button>
//     <button class="del_button">Удалить запись</button>`
//     document.body.appendChild(el);

// }

//   const registerBtn = emplEl.querySelector("#add_button");
//   registerBtn && registerBtn.addEventListener("click", () => {
//     if (data.count < data.maxCount) {
//       data.count++;
//       const count = emplEl.querySelector(
//         ".count"
//       );
//       count.textContent = data.count;
//     }
//   });

//   const cancelBtn = emplEl.querySelector("#del_button");
//   cancelBtn.addEventListener("click", () => {
//     data.count--;
//     const count = emplEl.querySelector(
//       ".count"
//     );
//     count.textContent = data.count;

//   });

//   document.getElementById("item").appendChild(emplEl);
