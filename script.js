function criarPixels(n) {
  const linha = document.getElementsByClassName('linha');
  console.log(linha);
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

let n = 5;

criarQuadro(n);
