var babyObj = function(){
	this.x;
	this.y;
	this.angle;

	this.babyTailTimer = 0;
	this.babyTailCount = 0;

	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeInterval = 1000;		// 该图片需要持续多长时间

	this.babyBodyTimer = 0;
	this.babyBodyCount = 0;

}
babyObj.prototype.init = function(){
	this.x = canWidth * 0.5 - 50;
	this.y = canHeight * 0.5 + 50;
	this.angle = 0;
}
babyObj.prototype.draw = function(){
	// 趋向于大鱼的x,y
	this.x = lerpDistance(mom.x, baby.x, 0.98);
	this.y = lerpDistance(mom.y, this.y, 0.98);

	// 旋转小鱼，小鱼朝着大鱼
	var deltaX = mom.x - this.x;
	var deltaY = mom.y - this.y;
	var beta = Math.atan2(deltaY, deltaX) + Math.PI;
	this.angle = lerpAngle(beta, this.angle, 0.6);

	// 小鱼尾巴
	this.babyTailTimer += deltaTime;
	if(this.babyTailTimer > 50){
		this.babyTailCount = (this.babyTailCount + 1) % 8;		// [0,7]之间循环
		this.babyTailTimer %= 50;			// 计时器清零					
	}

	// 小鱼眼睛
	this.babyEyeTimer += deltaTime;
	if(this.babyEyeTimer > this.babyEyeInterval){
		this.babyEyeCount = (this.babyEyeCount + 1) % 2;		// [0,1]之间循环
		this.babyEyeTimer %= this.babyEyeInterval;
		if(this.babyEyeCount == 0){
			this.babyEyeInterval = Math.random() * 1500 + 2000;		// 睁眼[2000,3500)ms
		}else{
			this.babyEyeInterval = 200;			// 闭眼200ms
		}
	}

	// 小鱼身体
	this.babyBodyTimer += deltaTime;
	if(this.babyBodyTimer > 170){
		this.babyBodyCount = this.babyBodyCount + 1;
		this.babyBodyTimer %= 170;
		if(this.babyBodyCount > 19){
			this.babyBodyCount = 19;
			// game over
			data.gameOver = true;
		}
	}

	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);

	var babyTailCount = this.babyTailCount;
	ctx1.drawImage(babyTail[babyTailCount], -babyTail[babyTailCount].width * 0.5 + 24, -babyTail[babyTailCount].height * 0.5);
	var babyBodyCount = this.babyBodyCount;
	ctx1.drawImage(babyBody[babyBodyCount], -babyBody[babyBodyCount].width * 0.5, -babyBody[babyBodyCount].height * 0.5);
	var babyEyeCount = this.babyEyeCount;
	ctx1.drawImage(babyEye[babyEyeCount], -babyEye[babyEyeCount].width * 0.5, -babyEye[babyEyeCount].height * 0.5);
	ctx1.restore();
}