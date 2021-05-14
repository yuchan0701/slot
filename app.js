var e11 = 1;
var e21 = 4;
var e31 = 3;

document.getElementById("ome").style.display = "none";

var count = 0;





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



function a(){
count++;
clearInterval(e1Timer)

if(count > 2){
if(e11 == e21){
	if(e21 == e31){
		document.getElementById("ome").style.display = "block";
	}

};
};
};
	
function b(){
count++;
clearInterval(e2Timer)

if(count > 2){
if(e11 == e21){
	if(e21 == e31){
		document.getElementById("ome").style.display = "block";
	}

};
};
};
	
function c(){
count++;
clearInterval(e3Timer)

if(count > 2){
if(e11 == e21){
	if(e21 == e31){
		document.getElementById("ome").style.display = "block";
	}

};
};


};
	

function retry(){
	document.location.reload()

}