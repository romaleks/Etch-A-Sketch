const board = document.querySelector('.content__board');

for (let i = 0; i < 16; i++) {
   for (let j = 0; j < 16; j++) {
      const pixel = document.createElement('div');
      pixel.className = 'content__pixel';
      board.appendChild(pixel);
   }
}

const buttons = document.querySelectorAll('.btn')

buttons.forEach(function(button) {
   button.addEventListener('click', function() {
      buttons.forEach((button) => button.classList.remove('active'));
      button.classList.add('active');
   });
});

const slider = document.getElementById('range');
const output = document.getElementById('value');

output.textContent = `${slider.value} x ${slider.value}`;

slider.oninput = () => output.innerHTML = `${slider.value} x ${slider.value}`;

slider.addEventListener('mousemove', function() {
   const x = slider.value;
   const color = 'linear-gradient(90deg, rgb(160, 160, 160)' + x +
   '%, rgb(230, 230, 230)' + x + '%)';
   slider.style.background = color;
});