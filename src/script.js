// переменные
const card = document.querySelector('.card');
const controls = document.querySelectorAll('.article-projects__controls');
const link = card.querySelector('.card__link');
const image = card.querySelector(".card__image");
const description = card.querySelector(".card__text");
let cardIndex = 0;

// функция показа карточки
const showCard = (index) => {
	cardIndex = index
	link.href = projects[cardIndex].link;
	image.src = projects[cardIndex].src;
	image.alt = projects[cardIndex].alt;
	description.textContent = projects[cardIndex].description;
}

// добавляем переключение карточки по клику
controls.forEach((buttonControl) =>{
	buttonControl.addEventListener('click', (evt)=>{
		if(evt.target.classList.contains('button-next')){
			let index = cardIndex + 1;
			if(index >= projects.length){
				index = 0;
			}
			showCard(index)
		} else if(evt.target.classList.contains('button-prev')){
			let index = cardIndex - 1;
			if(index < 0){
				index = projects.length - 1;
			}
			showCard(index)
		}
	})
})

// выводим карточку на страницу
showCard(cardIndex);
