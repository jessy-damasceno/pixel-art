document.querySelector('.color').classList.add('selected');

function criarPixels(n) {
  const linha = document.getElementsByClassName('linha');
  for (let i = 0; i < n; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList = 'pixel';
    linha[i].appendChild(pixel);
  }
}

function criarQuadro(n) {
  const board = document.getElementById('pixel-board');

  for (let i = 0; i < n; i += 1) {
    const novaLinha = document.createElement('div');
    novaLinha.classList = 'linha';
    board.appendChild(novaLinha);
  }
  for (let i = 0; i < n; i += 1) {
    criarPixels(n);
  }
}

let n = 5; // TAMANHO INICIAL DO PIXEL BOARD

criarQuadro(n);

function selectColor(event) {
  const colors = document.body.getElementsByClassName('color');
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function changeColorSelected() {
  const colors = document.getElementById('color-palette');
  colors.addEventListener('click', selectColor);
}

changeColorSelected();

function pixelColor(event) {
  let x = document.querySelector('.selected');
  let color = getComputedStyle(x).getPropertyValue('background-color');
  event.target.style.backgroundColor = color;
}

function changePixelColor() {
  const pixelBoard = document.getElementById('pixel-board');

  pixelBoard.addEventListener('click', pixelColor);
}

changePixelColor();
