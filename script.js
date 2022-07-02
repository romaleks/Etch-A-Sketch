const board = document.querySelector('.content__pixels');
for (let i = 0; i < 16 * 16; i++) {
   const pixel = document.createElement('div');
   pixel.className = 'content__pixel';
   board.appendChild(pixel);
}  //generate initial 16x16 board

const slider = document.getElementById('range');
const output = document.getElementById('value');

slider.addEventListener('mouseup', function () {
   board.innerHTML = '';
   for (let i = 0; i < slider.value * slider.value; i++) {
      const pixel = document.createElement('div');
      pixel.className = 'content__pixel';
      pixel.style.cssText = `flex: 1 0 ${1 / slider.value * 100}%;`;
      board.appendChild(pixel);
   }
});  //change board's size with slider

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeColor(e) {
   if (e.type === 'mouseover' && !mouseDown) return
   const selectedColor = document.querySelector('.content__color-btn').value;
   this.style.backgroundColor = selectedColor;
}

output.textContent = `${slider.value} x ${slider.value}`;  //display initial size of board

slider.oninput = () => output.innerHTML = `${slider.value} x ${slider.value}`;  //display board's size in real time

slider.addEventListener('mousemove', function() {
   const x = slider.value;
   const color = 'linear-gradient(90deg, rgb(160, 160, 160)' + x / 64 * 100 +
   '%, rgb(230, 230, 230)' + x / 64 * 100 + '%)';
   slider.style.background = color;
});  //move slider's background in real time


const buttons = document.querySelectorAll('.btn')

buttons.forEach(function(button) {
   button.addEventListener('click', function() {
      buttons.forEach((button) => button.classList.remove('active'));
      button.classList.add('active');
   });
});  //switches active buttons