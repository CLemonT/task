$(document).ready(function() {
	
	var ex1=false,ex2=false,ex3=false;
	
	var listBotton=function (i) {
		i.siblings().removeClass("listOn");
		i.addClass("listOn");
	};
	
	$(".selectToggle1").click(function() {
		$(".selectOption1").toggle();
	});
	
	$(".selectToggle2").click(function() {
		$(".selectOption2").toggle();
	});
	
	$(".selectToggle3").click(function() {
		$(".selectOption3").toggle();
	});
	
	$(".list1").click(function(){
		var i=$(".list1");
		listBotton(i);
		$(".NWRTxt1").removeClass("hide");
		$(".NWRTxt2").addClass("hide");
		$(".NWRTxt3").addClass("hide");
	});
		
	$(".list2").click(function(){
		var i=$(".list2");
		listBotton(i);
		$(".NWRTxt1").addClass("hide");
		$(".NWRTxt2").removeClass("hide");
		$(".NWRTxt3").addClass("hide");
	});	
		
	$(".list3").click(function(){
		var i=$(".list3");
		listBotton(i);
		$(".NWRTxt1").addClass("hide");
		$(".NWRTxt2").addClass("hide");
		$(".NWRTxt3").removeClass("hide");
	});
	
	$(".selectToggle1").click(function(){
		if(ex1==false){
			$(".selectOption1").show();
			ex1=true;
		}
		else{
			$(".selectOption1").hide();
			ex1=false;
		}
		
		if(ex2==true){
			$(".selectOption2").hide();
			ex2=false;
		}
		if(ex3==true){
			$(".selectOption3").hide();
			ex3=false;
		}
		
		return false;
	});
	
	$(".selectToggle2").click(function(){
		if(ex2==false){
			$(".selectOption2").show();
			ex2=true;
		}
		else{
			$(".selectOption2").hide();
			ex2=false;
		}
		
		if(ex1==true){
			$(".selectOption1").hide();
			ex1=false;
		}
		if(ex3==true){
			$(".selectOption3").hide();
			ex3=false;
		}
		
		return false;
	});
	
	$(".selectToggle3").click(function(){
		if(ex3==false){
			$(".selectOption3").show();
			ex3=true;
		}
		else{
			$(".selectOption3").hide();
			ex3=false;
		}
		
		if(ex1==true){
			$(".selectOption1").hide();
			ex1=false;
		}
		if(ex2==true){
			$(".selectOption2").hide();
			ex2=false;
		}
		
		return false;
	});
	
	$("body").click(function(){
		if(ex1==true){
			$(".selectOption1").hide();
			ex1=false;
		}
		if(ex2==true){
			$(".selectOption2").hide();
			ex2=false;
		}
		if(ex3==true){
			$(".selectOption3").hide();
			ex3=false;
		}
	});
	
	var Option1=$(".selectOption1").children("li");
	for(var i=0;i<Option1.length;i++){
		(function(j){
			$(Option1[j]).on('click',function(){
			var text=$(Option1[j]).text();
			$(".selectBox1").attr('placeholder',text);
		});
		})(i);		
	}
	
	var Option2=$(".selectOption2").children("li");
	for(var i=0;i<Option2.length;i++){
		(function(j){
			$(Option2[j]).on('click',function(){
			var text=$(Option2[j]).text();
			$(".selectBox2").attr('placeholder',text);
		});
		})(i);		
	}
	
	var Option3=$(".selectOption3").children("li");
	for(var i=0;i<Option3.length;i++){
		(function(j){
			$(Option3[j]).on('click',function(){
			var text=$(Option3[j]).text();
			$(".selectBox3").attr('placeholder',text);
		});
		})(i);		
	}
	
});
