const cards = ['queen', 'queen', 'king', 'king'];
const cardsInPlay = []

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[2]) {
  console.log("You found a match!");
	} 
	else {
  console.log("Sorry, try again.");
	}
}

function flipCard(cardId) {
	if (cardsInPlay.length === 2) {
		checkForMatch()
	}
	console.log ("User flipped" + cards[cardId])
	cardsInPlay.push(cards[cardId])
}
	
flipCard(1)
flipCard(2)

