//copyright codingMASTER398 2021

script = document.createElement('script');
script.type = 'text/javascript';
script.async = true;
script.onload = function(){
	setInterval(function(){
	if(﻿!document.getElementById("Nono")){
	if(document.getElementsByClassName("question-input-form")[0]){
		element = document.createElement("h4")
		element.textContent = "Thinking..."
element.id="Nono"
   		document.getElementsByClassName("question-input-form")[0].appendChild(element);
	}
}

	if(document.getElementsByClassName("questions-input-adjustment")[0]){
	document.getElementsByClassName("questions-input-adjustment")[0].classList.add("ng-dirty");
h=document.getElementsByClassName("question-size-v4")[0].textContent
if(h.includes("+    =")||h.includes("×    =")||h.includes("÷    =")){
element.textContent = "Wat the? 2 texts boxes? That not epic."
}else{
	try{
	element.textContent = "Da robot thinks: "+math.evaluate(document.getElementsByClassName("question-size-v4")[0].textContent.replace("=","").replace("×","*").replace("÷","/"))}catch{element.textContent = "Da robot cannot do that math"}
	}}
	},10)
};
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjs/9.4.4/math.js';
document.getElementsByTagName('head')[0].appendChild(script);
