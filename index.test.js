const { Card, CardStack, DeckList } = require('./index');

test('should have Card defined in index', () => {

	const newCard = Card();
	

	//console.log(newCard);

	expect(newCard).toBeDefined();
});

test('should have DeckList defined in index', () => {

	const newDeckList = DeckList();
	

	//console.log(newDeckList);

	expect(newDeckList).toBeDefined();
});

test('should have CardStack defined in index', () => {

	const newCardStack = CardStack();
	

	//console.log(newCardStack);

	expect(newCardStack).toBeDefined();
});