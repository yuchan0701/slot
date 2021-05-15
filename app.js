document.getElementById("ome").style.display = "none";


var money = 300;
var count = 0;
document.getElementById("money").textContent = money;

	var e11 = Math.floor( Math.random() * (5 + 1 - 1) ) + 1 ;
	var e21 = Math.floor( Math.random() * (5 + 1 - 1) ) + 1 ;
	var e31 = Math.floor( Math.random() * (5 + 1 - 1) ) + 1 ;

//役
function hantei(){
	if(e11 == e21){
		if(e21 == e31){
			switch (e11){
				case 1:
				  money += 1000;
				  break;
				case 0:
					money += 100;
				  break;
				default:
				  money += 500;
			  }
			  document.getElementById("ome").style.display = "block";

		}
	}
	document.getElementById("money").textContent = money

	console.log(e11);

}



function startSlot(){
	money -= 30;
	document.getElementById("money").textContent = money;
	document.getElementById("ome").style.display = "none";

	document.getElementById("js-startBtn").style.display = "none";



	count = 0;
	e11 = Math.floor( Math.random() * (5 + 1 - 1) ) + 1 ;

	while(e21 == e11){
		e21 = Math.floor( Math.random() * (5 + 1 - 1) ) + 1 ;
	};
	
	while(e31 ==e11){
		e31 = Math.floor( Math.random() * (5 + 1 - 1) ) + 1 ;
		while(e31 == e21){
			e31 = Math.floor( Math.random() * (5 + 1 - 1) ) + 1 ;
		};
	};



	
	
	
	//egara1
	
	function e1sys(){
	e11 ++;
	document.getElementById("e1").src = "egara-"+e11+".png";
	if(e11 == 6){
		e11 = 0;
	};
	};
	
	
	e1Timer=setInterval(function(){
	e1sys()
	} , 100);
	
	//egara2
	function e2sys(){
	e21 ++;
	document.getElementById("e2").src = "egara-"+e21+".png";
	if(e21 == 6){
		e21 = 0;
	};
	};
	
	
	e2Timer=setInterval(function(){
	e2sys()
	} , 100);
	
	
	//egara3
	function e3sys(){
	e31 ++;
	document.getElementById("e3").src = "egara-"+e31+".png";
	if(e31 == 6){
		e31 = 0;
	};
	};
	
	
	e3Timer=setInterval(function(){
	e3sys()
	} , 100);
	

};
	
	



	function a(){
		

	count++;
	clearInterval(e1Timer)
	
	if(count > 2){
		document.getElementById("js-startBtn").style.display = "block";

	hantei()
	}
	};
		
	function b(){
		
	count++;
	clearInterval(e2Timer)
	
	if(count > 2){
		document.getElementById("js-startBtn").style.display = "block";
hantei()
	};
	};
		
	function c(){
		
	count++;
	clearInterval(e3Timer)
	
	if(count > 2){
		document.getElementById("js-startBtn").style.display = "block";

	hantei()
	};
	};
	



