function randomColors() {
  const paletaDeCores = ['rgb(0, 0, 0)'];
  const newColors = document.getElementsByClassName('color');
  for (let i = 0; i < 3; i += 1) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 251);
    paletaDeCores.push(`rgb(${r}, ${g}, ${b})`); // MODELO: rgb(68, 98, 105)
  }
  for (let j = 0; j < newColors.length; j += 1) {
    newColors[j].style.backgroundColor = paletaDeCores[j];
  }
}

randomColors();

function criarPixels(n) {
  const linha = document.getElementsByClassName('linha');
  for (let i = 0; i < n; i += 1) {
    const pixel = document.createElement('div');
    pixel.classList = 'pixel';
    linha[i].appendChild(pixel);
  }
}

function criarQuadro(n) {
  // eslint-disable-next-line sonarjs/no-duplicate-string
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

criarQuadro(5);

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

function pixelColor(e) {
  const x = document.querySelector('.selected');
  const color = getComputedStyle(x).getPropertyValue('background-color');
  e.target.style.backgroundColor = color;
}

function changePixelColor() {
  const pixelBoard = document.getElementById('pixel-board');

  pixelBoard.addEventListener('click', pixelColor);
}

changePixelColor();

/* 9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
O que será verificado:
Verifica se o botão tem o id denominado clear-board
Verifica se o botão está posicionado entre a paleta de cores e o quadro de pixels
Verifica se o texto do botão é 'Limpar'
Verifica se ao clicar no botão, o quadro de pixels é totalmente preenchido de branco */

function limpar() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}

function btn() {
  const button = document.getElementById('clear-board');
  button.addEventListener('click', limpar);
}

btn();

/* 10 - Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.
Se nenhum valor for colocado no input ao clicar no botão, mostre um alert com o texto: "Board inválido!";
Verifica se o novo quadro tem todos os pixels preenchidos com a cor branca */

function generateInput() {
  let valor = document.getElementById('board-size').value;

  limpar();

  if (!valor) {
    alert('Board inválido!');
    return;
  }
  if (valor > 50) {
    valor = 50;
  }
  if (valor < 5) {
    valor = 5;
  }
  document.getElementById('pixel-board').innerHTML = '';
  criarQuadro(valor);
  randomColors();
}

const vqv = document.getElementById('generate-board');
vqv.addEventListener('click', generateInput);

document.querySelector('.color').classList.add('selected');
