var canvas, backgroundI;
var GameState = 0;
var PlayerCount, database, form, player, game;

function setup(){
  database = firebase.database();
  canvas = createCanvas(400,400);

  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){

  
}