"use strict"

//Задача 1
/*
const getBody = document.body
console.log(getBody.firstElementChild)
*/
//Задача 2
/*
function createList(count = 1) {
    const ul = document.createElement('ul')
    const body = document.querySelector('body')
    if (body) {
        body.prepend(ul)
    }
    for (let item = 0; item < count; item++){
        const createli = document.createElement('li')
        const addli = ul.prepend(createli)
    }
}
createList(8)
*/
//Задача 3
/*
const body = document.body;
if (body){
	body.classList.add('loaded');
	if (body.classList.contains('loaded')){
		body.style.backgroundColor = 'green';
	}
}
*/
//Задача 4
/*
const itemElements = document.querySelectorAll('.item');
if (itemElements.length === 0){
	console.log('We can`t find')
}
else{
	itemElements.forEach((itemElement, index) =>{
		itemElement.textContent = `Element №${index+1}`;
		itemElement.classList.add('active')
	})
}
*/
//Задача 5
/*
const button = document.querySelector('.button')
if (button){
	const block = button.dataset.block || "start";
	function scrollTo(element) {
		element.scrollIntoView({
			block: block,
			inline: "nearest",
			behavior: 'smooth'
		});
	};
	scrollTo(button);
}
else{
	console.log("000")
}
*/
//Задача 6
/*
const link = document.querySelector('.link')
if (link){
	let number = parseFloat(link.dataset.number) || 250;
	if (number < 200){
		link.style.color = "red";
	}
	else{
		link.style.color = "green";
	}
	
}
else{
	console.log("000")
}
*/