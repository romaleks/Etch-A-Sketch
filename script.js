const board = document.querySelector('.content__board');

for (let i = 0; i < 16; i++) {
   for (let j = 0; j < 16; j++) {
      const pixel = document.createElement('div');
      pixel.className = 'content__pixel';
      board.appendChild(pixel);
   }
}