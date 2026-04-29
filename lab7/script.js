const button = document.getElementById('startBt');
const circle = document.getElementById('circle-shape');

button.addEventListener('click', function() {

    circle.classList.toggle('spinning');

    if (circle.classList.contains('spinning')) {
    button.textContent = "Стоп";
  } else {
    button.textContent = "Старт";
  }
})

