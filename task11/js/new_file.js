$(document).ready(function(){
	
	var navlist=$(".nav").children("li");
	
	for(var i=0;i<navlist.length;i++){
		(function(j){
			$(navlist[j]).click(function(){
				$(navlist[j]).siblings().removeClass("added");
				$(navlist[j]).addClass("added");
			});
		})(i);
	}

	
});
