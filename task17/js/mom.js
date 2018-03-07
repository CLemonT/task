var momObj = function(){
	this.x;
	this.y;
	this.angle;
	this.bigBody = new Image();

	this.momTailTimer = 0;
	this.momTailCount = 0;

	this.momEyeTimer = 0;
	this.momEyeCount = 0;
	this.momEyeInterval = 1000;

	this.momBodyCount = 0;		
}
momObj.prototype.init = function(){
	this.x = canWidth / 2;
	this.y = canHeight / 2;
	this.angle = 0;
	this.bigBody.src = "./img/bigSwim0.png";
}
momObj.prototype.draw = function(){
	// 趋向鼠标X,Y
	this.x = lerpDistance(mx, this.x, 0.985);
	this.y = lerpDistance(my, this.y, 0.985);

	// 旋转角度
	// Math.atan2(y, x)
	var deltaX = mx - this.x;
	var deltaY = my - this.y;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI;	

	// 角度趋向鼠标
	this.angle = lerpAngle(beta, this.angle, 0.6);

	// 大鱼尾巴
	this.momTailTimer += deltaTime;
	if(this.momTailTimer > 50){
		this.momTailCount = (this.momTailCount + 1) % 8;
		this.momTailTimer %= 50;
	}

	// 大鱼眼睛
	this.momEyeTimer += deltaTime;
	if(this.momEyeTimer > this.momEyeInterval){
		this.momEyeCount = (this.momEyeCount + 1) % 2;
		this.momEyeTimer %= this.momEyeInterval;
		if(this.momEyeCount == 0){
			this.momEyeInterval = Math.random() * 1500 + 2000;
		}else{
			this.momEyeInterval = 200;
		}
	}

	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	var momTailCount = this.momTailCount;
	ctx1.drawImage(momTail[momTailCount], -momTail[momTailCount].width * 0.5 + 30, -momTail[momTailCount].height * 0.5);
	var momBodyCount = this.momBodyCount;
	// 判断吃了蓝色还是橙色果实
	if(data.double == 1){
		ctx1.drawImage(momBodyOrange[momBodyCount], -momBodyOrange[momBodyCount].width * 0.5, -momBodyOrange[momBodyCount].height * 0.5);
	}else{
		ctx1.drawImage(momBodyBlue[momBodyCount], -momBodyBlue[momBodyCount].width * 0.5, -momBodyBlue[momBodyCount].height * 0.5);
	}		
	var momEyeCount = this.momEyeCount;
	ctx1.drawImage(momEye[momEyeCount], -momEye[momEyeCount].width * 0.5, -momEye[momEyeCount].height * 0.5);
	ctx1.restore();
}