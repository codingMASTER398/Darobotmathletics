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


/*
MIT License

Copyright (c) 2021 codingMASTER398

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
