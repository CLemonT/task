function drawAuthor(){
	ctx1.save();
	ctx1.shadowBlur = 10;
	ctx1.shadowColor = "#fff";
	ctx1.fillStyle = "rgba(240, 248, 255, 0.3)";
	ctx1.font = "14px Verdana";
	ctx1.textAlign = "left";
	ctx1.fillText("dzj", canWidth - 40, canHeight - 15);
	ctx1.restore();
}