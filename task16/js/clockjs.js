var clock = document.getElementById("clock");
var ctx = clock.getContext("2d");
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var r = width / 2;
var rate = width / 200;

function drawBackground(){
	ctx.save();
	ctx.translate(r, r);
	ctx.beginPath();
	ctx.lineWidth = 10 * rate;
	ctx.arc(0, 0, r - ctx.lineWidth / 2, 0, 2 * Math.PI, false);		// 设圆点为(0,0)是因为canvas已经位移了(r,r)
	ctx.stroke();

	var hourNumbers = [3,4,5,6,7,8,9,10,11,12,1,2];
	ctx.font = 18 * rate + "px Arial";
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	hourNumbers.forEach(function(number, i){
		var rad = 2 * Math.PI / 12 * i;
		var x = Math.cos(rad) * (r - 30 * rate);
		var y = Math.sin(rad) * (r - 30 * rate);
		ctx.fillText(number, x, y);
	});

	for(var i = 0; i < 60; i++){
		var rad = 2 * Math.PI / 60 * i;
		var x = Math.cos(rad) * (r - 16 * rate);
		var y = Math.sin(rad) * (r - 16 * rate);
		ctx.beginPath();
		if(i % 5 === 0){
			ctx.fillStyle = "#000";
			ctx.arc(x, y, 2 * rate, 0, 2 * Math.PI, false);
		}else{
			ctx.fillStyle = "#ccc";
			ctx.arc(x, y, 2 * rate, 0, 2 * Math.PI, false);
		}
		ctx.fill();
	}
}

function drawHour(hour, minute){
	ctx.save();
	ctx.beginPath();
	var rad = 2 * Math.PI / 12 * hour;
	var mrad = 2 * Math.PI / 12 / 60 * minute;
	ctx.rotate(rad + mrad);
	ctx.lineWidth = 6 * rate;
	ctx.lineCap = "round";
	ctx.moveTo(0, 10 * rate);
	ctx.lineTo(0, -r / 2);
	ctx.stroke();
	ctx.restore();
}

function drawMinute(minute){
	ctx.save();
	ctx.beginPath();
	var rad = 2 * Math.PI / 60 * minute;
	ctx.rotate(rad);
	ctx.lineWidth = 4 * rate;
	ctx.lineCap = "round";
	ctx.moveTo(0, 10 * rate);
	ctx.lineTo(0, -r + 30 * rate);
	ctx.stroke();
	ctx.restore();
}

function drawSecond(second){
	ctx.save();
	ctx.beginPath();
	ctx.fillStyle = "#c14543";
	var rad = 2 * Math.PI / 60 * second;
	ctx.rotate(rad);
	ctx.moveTo(-2 * rate, 20 * rate);
	ctx.lineTo(2 * rate, 20 * rate);
	ctx.lineTo(1, -r + 18 * rate);
	ctx.lineTo(-1, -r + 18 * rate);
	ctx.fill();
	ctx.restore();
}

function drawDot(){
	ctx.beginPath();
	ctx.fillStyle = "#fff";
	ctx.arc(0, 0, 3 * rate, 0, 2 * Math.PI, false);
	ctx.fill();
}



function draw(){
	ctx.clearRect(0, 0, width, height);
	var now = new Date();
	var hour = now.getHours();
	var minute = now.getMinutes();
	var second = now.getSeconds();
	drawBackground();
	drawHour(hour, minute);
	drawMinute(minute);
	drawSecond(second);
	drawDot();
	ctx.restore();
}

draw();
setInterval(draw, 1000);