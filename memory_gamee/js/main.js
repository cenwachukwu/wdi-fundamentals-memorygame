console.log("Up and running!");

const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = []
const cardOne = cards[1];
cardsInPlay.push('cardOne');
console.log("User flipped queen")
const cardTwo = cards[3];
cardsInPlay.push('cardTwo');
console.log("User flipped king")

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[3]) {
		alert ("You found a match.");	
	}
	else {
		alert("Sorry, try again.");
	}
}

	
