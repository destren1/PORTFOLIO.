// переменные
const card = document.querySelectorAll('.card');
const controls = document.querySelectorAll('.article-projects__controls');
let cardIndex = 0;

// функция показа карточки
const showCard = (index) => {
	card[cardIndex].classList.remove('card__active');
	card[index].classList.add('card__active');
	cardIndex = index;
}

// добавляем переключение карточки по клику
controls.forEach((buttonControl) =>{
	buttonControl.addEventListener('click', (evt)=>{
		if(evt.target.classList.contains('button-next')){
			let index = cardIndex + 1;
			if(index >= card.length){
				index = 0;
			}
			showCard(index)
		} else if(evt.target.classList.contains('button-prev')){
			let index = cardIndex - 1;
			if(index < 0){
				index = card.length - 1;
			}
			showCard(index)
		}
	})
})

// выводим карточку на страницу
showCard(cardIndex);
