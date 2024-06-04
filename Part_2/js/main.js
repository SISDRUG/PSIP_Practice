$('#email-form').parsley();


// Получаем все кнопки с классом 'filter'
const filters = document.querySelectorAll('.filter');

// Функция для сброса класса 'active' и скрытия всех блоков
function resetActiveAndHideBlocks() {
  filters.forEach(filter => {
    filter.classList.remove('active'); // Убираем класс 'active' у всех кнопок
    const category = filter.id; // Получаем id кнопки, который соответствует категории
    document.querySelectorAll(`.col--${category}`).forEach(col => {
      col.style.display = 'none'; // Скрываем все блоки этой категории
    });
  });
}

// Функция для установки класса 'active' и отображения блоков определенной категории
function setActiveAndShowBlocks(category) {
  document.querySelector(`#${category}`).classList.add('active'); // Добавляем класс 'active' выбранной кнопке
  document.querySelectorAll(`.col--${category}`).forEach(col => {
    col.style.display = 'block'; // Показываем все блоки этой категории
  });
}

// Добавляем обработчик событий на каждую кнопку
filters.forEach(filter => {
  filter.addEventListener('click', () => {
    resetActiveAndHideBlocks(); // Сбрасываем все до начального состояния
    setActiveAndShowBlocks(filter.id); // Устанавливаем 'active' и показываем блоки для выбранной категории
  });
});
