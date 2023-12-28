//area0

// Area 1
function setup() {
  createCanvas(700, 600);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraPessonagens();
  movimentaCarro();
  movimentaAtor();
  voltarPosicaoInicial();
  indentificaColisao();
  mostraPessonagens2();
  movimentaCarro2();
  indentificaColisao2();
  voltarincial();
  incluipontos();
  marcaPontos();
}

// Area 2
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarros;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let somDaTrilha;
let somDaColisao;
let somDoPonto;

let colisao = false;
let xCarros = [700, 700, 700];
let yCarros = [70, 155, 235];
let velocidadeCarros = [3, 4, 6];

//variaveis do Ator
let yAtor = 555;
let xAtor = 85;
let meusPontos = 0;

//Area 3
function mostraPessonagens() {
  //Ator
  image(imagemDoAtor, xAtor, yAtor, 40, 40);
  //carro 1 , 2 e 3
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    image(imagemCarros[i], xCarros[i], yCarros[i], 60, 50);
  }
}

function preload() {
  imagemDaEstrada = loadImage("./material/estrada.png");
  imagemDoAtor = loadImage("./material/ator-1.png");
  imagemCarro1 = loadImage("./material/carro-1.png");
  imagemCarro2 = loadImage("./material/carro-2.png");
  imagemCarro3 = loadImage("./material/carro-3.png");
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3];
  imagemCarro4 = loadImage("./material/carro-4.png");
  imagemCarro5 = loadImage("material/carro-5.png");
  imagemCarro6 = loadImage("./material/carro-6.png");
  imagemCarro2 = [imagemCarro4, imagemCarro5, imagemCarro6];

  somDaTrilha = loadSound("./material/trilha.mp3");
  somDaColisao = loadSound("./material/pontos.wav");
  somDoPonto = loadSound("./material/pontos.wav");
}

//area 4
function movimentaCarro() {
  for (let i = 0; i < velocidadeCarros.length; i = i + 1) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltarPosicaoInicial() {
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    if (passoutodaATela(xCarros[i])) {
      xCarros[i] = 700;
    }
  }
}

function passoutodaATela(xCarro) {
  return xCarro < -50;
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtor += 3;
  }
}

function incluipontos() {
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);
}

function marcaPontos() {
  if (yAtor < 15) {
    meusPontos += 1;
    somDoPonto.play();
    yAtor = 555;
  }
}

function indentificaColisao() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      60,
      50,
      xAtor,
      yAtor,
      15
    );
    if (colisao) {
      voltaAPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meuspontos -= 1;
      }
    }
  }
}

function voltaAPosicaoInicial() {
  yAtor = 555;
}

function pontosMaiorQueZero() {
  return meusPontos > 0;
}

function podeSeMover() {
  return yAtor < 366;
}

//base 1
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;

let xCarros2 = [-50, -50, -50];
let yCarros2 = [325, 410, 490];
let velocidadeCarros2 = [6, 4, 3];

// base 2
function mostraPessonagens2() {
  for (let i = 0; i < imagemCarro2.length; i = i + 1) {
    image(imagemCarro2[i], xCarros2[i], yCarros2[i], 60, 50);
  }
}

function movimentaCarro2() {
  for (let i = 0; i < velocidadeCarros2.length; i = i + 1) {
    xCarros2[i] += velocidadeCarros2[i];
  }
}

function voltarincial() {
  if (xCarros2[0] > 700) {
    xCarros2[0] = -50;
  }
  if (xCarros2[1] > 700) {
    xCarros2[1] = -50;
  }
  if (xCarros2[2] > 700) {
    xCarros2[2] = -50;
  }
}

function indentificaColisao2() {
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarro2.length; i = i + 1) {
    colisao2 = collideRectCircle(
      xCarros2[i],
      yCarros2[i],
      60,
      50,
      xAtor,
      yAtor,
      15
    );
    if (colisao2) {
      voltaAPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()) {
        meuspontos -= 1;
      }
    }
  }
}

function colidiu2() {
  yAtor = 555;
}

