const Card = require('./Card');

test('should have at least one test', () => {
	expect(true).toBe(true);
});

test('should have a card key', () => {

	const newCard = Card("2H", "Two of Hearts");

	expect(newCard.getCardKey()).toBeDefined();
});