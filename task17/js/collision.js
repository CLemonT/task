// 判断大鱼与果实的距离
function momFruitsCollision(){
	if(!data.gameOver){
		for(var i = 0; i < fruit.num; i++){
			if(fruit.alive[i]){
				// 判断距离
				var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
				if(l < 900){
					// 果实被吃掉
					fruit.dead(i);
					data.fruitNum++;
					mom.momBodyCount++;
					if(mom.momBodyCount > 7){
						mom.momBodyCount = 7;
					}
					if(fruit.fruitType[i] == "blue")		// 如果是蓝色果实，则加倍
					{
						data.double = 2;
					}
					wave.born(fruit.x[i], fruit.y[i]);
				}
			}
		}
	}
	
}

// 大鱼喂小鱼
function momBabyCollision(){
	if(data.fruitNum > 0 && !data.gameOver){
		var l = calLength2(mom.x, mom.y, baby.x, baby.y);
		if(l < 900){
			// 小鱼恢复
			baby.babyBodyCount = 0;

			mom.momBodyCount = 0;
			// 计算分值
			data.addScore();
			circle.born(baby.x, baby.y);
		}
	}
	
}