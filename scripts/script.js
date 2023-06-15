//script.js
function showAuthor() {
  var author = "4032 Храпичева Алина";
  alert(author);
}



// Функция для отображения текущего времени
function showTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();

  // Форматирование времени в строку
  var timeString = "сейчас " + hours + " часов " + minutes + " минут";

  // Обновление содержимого каждого элемента с именем "clock"
  var clockElements = document.getElementsByName("clock");
  for (var i = 0; i < clockElements.length; i++) {
    clockElements[i].textContent = timeString;
  }
}

// Функция для удаления отображения времени
function hideTime() {
  var clockElements = document.getElementsByName("clock");
  for (var i = 0; i < clockElements.length; i++) {
    clockElements[i].textContent = "Наведите курсор мыши, чтобы увидеть время";
  }
}

// Получаем коллекцию элементов с именем "clock"
var clockElements = document.getElementsByName("clock");

// Добавляем обработчик события "mouseover" для каждого элемента
for (var i = 0; i < clockElements.length; i++) {
  clockElements[i].addEventListener("mouseover", showTime);
  clockElements[i].addEventListener("mouseout", hideTime);
}


// Функция для добавления пустой строки в таблицу
function addEmptyRow() {
  // Получаем коллекцию элементов с именем "mainTable"
  var tableElements = document.getElementsByName("mainTable");

  // Проверяем, что есть элементы с именем "mainTable"
  if (tableElements.length > 0) {
    // Выбираем первый элемент из коллекции
    var tableElement = tableElements[0];

    // Создаем пустую строку
    var emptyRow = document.createElement("tr");

    // Добавляем пустую строку в таблицу
    tableElement.appendChild(emptyRow);
  }
}

// Вызываем функцию addEmptyRow
addEmptyRow();


// Функция для изменения размера и цвета заголовка
function modifyClock() {
  // Получаем коллекцию элементов с тегом "clock"
  var clocksElements = document.getElementsByName("clock");

  // Проверяем, что есть элементы с тегом "clock"
  if (clocksElements.length > 0) {
    // Выбираем первый элемент из коллекции
    var clocksElement = clocksElements[0];

    // Изменяем размер
    clocksElement.style.fontSize = "24px";

    // Изменяем цвет
    clocksElement.style.color = "blue";
  }
}
