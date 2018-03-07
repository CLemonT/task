var fruitObj = function(){
	this.alive = [];	// boolean值
	this.orange = new Image();
	this.blue = new Image();
	this.x = [];
	this.y = [];
	this.l = [];
	this.hkNO = [];
	this.spd = [];		// 每个果实的速度
	this.fruitType = [];	
}

fruitObj.prototype.num = 30;	// 果实池有30个果实
fruitObj.prototype.init = function(){
	for(var i = 0; i < this.num; i++){
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.l[i] = 0;
		this.hkNO[i] = 0;
		this.spd[i] = Math.random() * 0.017 + 0.003;		// [0.003, 0.02)
		this.fruitType[i] = '';
	}
	this.orange.src = "./img/orange.png";
	this.blue.src = "./img/blue.png";
}
fruitObj.prototype.draw = function(){
	for (var i = 0; i < this.num; i++){
		if(this.alive[i]){
			var pic;
			if(this.fruitType[i] == "blue"){
				pic = this.blue;
			}else{
				pic = this.orange;
			}
			if(this.l[i] <= 15 ){
				var NO = this.hkNO[i];
				this.x[i] = hk.headx[NO];
				this.y[i] = hk.heady[NO];
				this.l[i] += this.spd[i] * deltaTime;
			}else{
				this.y[i] -= this.spd[i] * 7 * deltaTime;
			}
			ctx2.drawImage(pic, this.x[i] - this.l[i] * 0.5, this.y[i] - this.l[i] * 0.5, this.l[i], this.l[i]);
			if(this.y[i] < 10){
				this.alive[i] = false;
			}
		}
	}
}
fruitObj.prototype.born = function(i){
	this.hkNO[i] = Math.floor(Math.random() * hk.num);		// 随机找到一个海葵
	this.l[i] = 0;
	this.alive[i] = true;
	var ran = Math.random();
	if(ran < 0.2){
		this.fruitType[i] = "blue";
	}else{
		this.fruitType[i] = "orange";
	}
}
fruitObj.prototype.dead = function(i){
	this.alive[i] = false;
}
function fruitMonitor(){
	var num = 0;
	for(var i = 0; i < fruit.num; i++){
		if(fruit.alive[i]){
			num++;
		}
	}
	if(num < 15){
		// 发出果实
		sendFruit();
		return ;
	}
}
function sendFruit(){
	for(var i = 0; i < fruit.num; i++){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}
// fruitObj.prototype.update = function(){
// 	var num;
// 	for(var i = 0; i < this.num; i++){
// 		if(this.alive[i]){
// 			num++;
// 		}

// 	}
// }