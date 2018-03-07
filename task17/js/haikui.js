var hkObj = function(){
	// 起始点、控制点、结束点（sin）——（用于二次贝塞尔曲线）
	this.rootx = [];
	this.headx = [];
	this.heady = [];
	this.amp = [];
	this.alpha = 0;		// sin的角度
}

hkObj.prototype.num = 50;
hkObj.prototype.init = function(){
	for(var i = 0; i < this.num; i++){
		this.rootx[i] = i * 16 + Math.random() * 20;		// Math.random返回值[0,1)
		this.headx[i] = this.rootx[i];
		this.heady[i] = canHeight - 230 + Math.random() * 50;
		this.amp[i] = Math.random() * 50 + 50;
	}
}
hkObj.prototype.draw = function(){
	this.alpha += deltaTime * 0.0008;
	var l = Math.sin(this.alpha);
	ctx2.save();
	ctx2.globalAlpha = 0.7;
	ctx2.lineWidth = 20;
	ctx2.lineCap = "round";
	ctx2.strokeStyle = "#3E5D36";
	for(var i = 0; i < this.num; i++){
		// beginPath, moveTo, lineTo, stroke, strokeStyle, lineWidth, lineCap, globalAlpha
		ctx2.beginPath();
		ctx2.moveTo(this.rootx[i], canHeight);
		this.headx[i] = this.rootx[i] + l * this.amp[i]; 
		ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i]);
		ctx2.stroke();
	}
	ctx2.restore();
}