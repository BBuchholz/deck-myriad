const Card = require('./Card');

test('should have at least one test', () => {
	expect(true).toBe(true);
});

test('should have a card key', () => {

	const newCard = Card("2H", "Two of Hearts");

	expect(newCard.getCardKey()).toBeDefined();
	expect(newCard.getCardKey()).toEqual("2H");
});

test('should have a card name', () => {

	const newCard = Card("2H", "Two of Hearts");

	expect(newCard.getCardName()).toBeDefined();
	expect(newCard.getCardName()).toEqual("Two of Hearts");
});