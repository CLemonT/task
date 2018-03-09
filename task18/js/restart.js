var restartObj = function(){
	this.elem;
	this.opacity;
}
restartObj.prototype.init = function(){
	this.elem = document.getElementById("restart");
	this.opacity = 0;
	this.elem.style.display = "none";
}
restartObj.prototype.show = function(){
	if(data.gameOver){
		this.elem.style.display = "block";
		this.opacity += deltaTime * 0.0005;
		if(this.opacity > 1){
			this.opacity = 1;
		}
		this.elem.style.opacity = this.opacity;
		this.elem.addEventListener("click", function(){
			window.cancelAnimationFrame(restartId);
			game();

		});
	}
}
