var can1, can2;

var ctx1, ctx2;

var canWidth, canHeight;

var lastTime, deltaTime;
 
var bgPic = new Image();

var hk;
var fruit;

var mom;

var mx;
var my;

var baby;

var babyTail = [];
var babyEye = [];
var babyBody = [];

var momTail = [];
var momEye = [];
var momBodyOrange = [];
var momBodyBlue = [];

var data;

var wave;
var circle;

var dust;
var dustPic = [];

var restart;
var loopId;

document.body.onload = game;

function game(){
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameLoop();
}

function init(){
	can1 = document.getElementById("canvas1");		// 鱼、浮动物、分数、吃与喂的特效
	ctx1 = can1.getContext("2d");
	can2 = document.getElementById("canvas2");		// 背景、海葵、果实
	ctx2 = can2.getContext("2d");

	can1.addEventListener("mousemove", onMouseMove, false);

	bgPic.src = "./img/background.jpg";

	canWidth = can1.width;
	canHeight = can1.height;

	hk = new hkObj();
	hk.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();

	mx = canWidth / 2;
	my = canHeight / 2;

	for(var i = 0; i < 8; i++){
		babyTail[i] = new Image();
		babyTail[i].src = "./img/babyTail" + i + ".png"; 
	}

	for(var i = 0; i < 2; i++){
		babyEye[i] = new Image();
		babyEye[i].src = "./img/babyEye" + i + ".png";
	}

	for(var i = 0; i < 20 ; i++){
		babyBody[i] = new Image();
		babyBody[i].src = "./img/babyFade" + i + ".png";
	}

	for(var i = 0; i < 8; i++){
		momTail[i] = new Image();
		momTail[i].src = "./img/bigTail" + i + ".png";
	}

	for(var i = 0; i < 2; i++){
		momEye[i] = new Image();
		momEye[i].src = "./img/bigEye" + i + ".png";
	}

	data = new dataObj();
	data.init();

	for(var i = 0; i < 8; i++){
		momBodyOrange[i] = new Image();
		momBodyBlue[i] = new Image();
		momBodyOrange[i].src = "./img/bigSwim" + i + ".png";
		momBodyBlue[i].src = "./img/bigSwimBlue" + i + ".png";
	}

	ctx1.font = "30px Verdana";
	ctx1.textAlign = "center";

	wave = new waveObj();
	wave.init();

	circle = new circleObj();
	circle.init();

	for(var i = 0; i < 7; i++){
		dustPic[i] = new Image();
		dustPic[i].src = "./img/dust" + i + ".png";
	}
	dust = new dustObj();
	dust.init();

	restart = new restartObj();
	restart.init();
}

function gameLoop(){
	restartId = window.requestAnimFrame(gameLoop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	// 优化果实变大的bug
	if(deltaTime > 40){			
		deltaTime = 40;
	}

	drawBackground();
	hk.draw();
	fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0, 0, canWidth, canHeight);
	mom.draw();
	momFruitsCollision();
	momBabyCollision();
	baby.draw();
	data.draw();
	wave.draw();
	circle.draw();
	dust.draw();
	drawAuthor();
	restart.show();
}

function onMouseMove(e){
	if(!data.gameOver){
		if(e.offSetX || e.layerX){
			mx = e.offSetX == undefined ? e.layerX : e.offSetX;
			my = e.offSetY == undefined ? e.layerY : e.offSetY;
		}
	}
}