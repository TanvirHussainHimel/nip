
// text-change

function textChange(){
document.getElementByID('h2').innerHTML="Hello world";
}

// show date
function showDate(){

	document.getElementById('d_h2').innerHTML = Date();
}

// bulb on/off
function bulbOn(){
	document.getElementById('img').src="images/on.gif";

}

function bulboff(){
	document.getElementById('img').src="images/off.gif";

}

// fontChange
function fontChange(){
	document.getElementById('f_h2').style.fontSize = "60px";
}