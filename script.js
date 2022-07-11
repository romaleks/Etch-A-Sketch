const board = document.querySelector('.content__pixels');
const slider = document.getElementById('range');
const output = document.getElementById('value');
const colorBtn = document.querySelector('.content__color-mode');
const rainbowBtn = document.querySelector('.content__rainbow-mode');
const eraserBtn = document.querySelector('.content__eraser');
const clearBtn = document.querySelector('.content__clear');

let currentMode = 'color';

for (let i = 0; i < 16 * 16; i++) {
   const pixel = document.createElement('div');
   pixel.className = 'content__pixel';
   board.appendChild(pixel);

   pixel.addEventListener('mouseover', changeColor);
   pixel.addEventListener('mousedown', changeColor);
}  //generate initial 16x16 board

slider.addEventListener('mouseup', function () {
   board.innerHTML = '';
   for (let i = 0; i < slider.value * slider.value; i++) {
      const pixel = document.createElement('div');
      pixel.className = 'content__pixel';
      pixel.style.cssText = `flex: 1 0 ${1 / slider.value * 100}%;`;
      board.appendChild(pixel);

      pixel.addEventListener('mouseover', changeColor);
      pixel.addEventListener('mousedown', changeColor);
   }
});  //change board's size with slider

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

colorBtn.onclick = function () {
   currentMode = 'color';
   rainbowBtn.classList.remove('active')
   eraserBtn.classList.remove('active')
   colorBtn.classList.add('active');
}  //set current button-mode to color and add active class on button

rainbowBtn.onclick = function () {
   currentMode = 'rainbow';
   colorBtn.classList.remove('active')
   eraserBtn.classList.remove('active')
   rainbowBtn.classList.add('active');
}  //set current button-mode to rainbow and add active class on button

eraserBtn.onclick = function () {
   currentMode = 'eraser';
   colorBtn.classList.remove('active')
   rainbowBtn.classList.remove('active')
   eraserBtn.classList.add('active');
}  //set current button-mode to eraser and add active class on button

clearBtn.onclick = function () {
   const pixels = document.querySelectorAll('.content__pixel');
   pixels.forEach((pixel) => pixel.style.backgroundColor = '#fff');
}

function changeColor(e) {
   if (e.type === 'mouseover' && !mouseDown) return;
   if (currentMode === 'color') {
      const selectedColor = document.querySelector('.content__color-btn').value;
      this.style.backgroundColor = selectedColor;
   } else if (currentMode === 'rainbow') {
      const selectedColor = `rgb(${Math.floor(Math.random() * 255)},
         ${Math.floor(Math.random() * 255)},
         ${Math.floor(Math.random() * 255)})`;
      this.style.backgroundColor = selectedColor;
   } else {
      this.style.backgroundColor = '#fff';
   }
}

output.textContent = `${slider.value} x ${slider.value}`;  //display initial size of board

slider.oninput = () => output.innerHTML = `${slider.value} x ${slider.value}`;  //display board's size in real time

slider.addEventListener('mousemove', function () {
   const x = slider.value;
   const color = 'linear-gradient(90deg, rgb(160, 160, 160)' + x / 64 * 100 +
      '%, rgb(230, 230, 230)' + x / 64 * 100 + '%)';
   slider.style.background = color;
});  //move slider's background in real time