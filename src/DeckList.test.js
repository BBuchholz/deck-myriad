const DeckList = require('./DeckList');
const Card = require('./Card');
let testDeck;
let testCard;

beforeEach(() => {

	testDeck = DeckList("Test List");
	testDeck.addSuit("H", "Hearts");
	testDeck.addRank("2", 2);
	testCard = Card("2H", "Two of Hearts");
	testDeck.addCard(testCard);
});

test('should have at least one test', () => {
	expect(true).toBe(true);
});

test('should contain a card list with card keys', () => {

	expect(testDeck.getCardMap().size).toBe(1);
});

test('should be able to parse suit from card keys', () => {

	expect(testDeck.parseSuit(testCard.getCardKey())).toBe("H");
})

test('should be able to parse rank from card keys', () => {
	
	expect(testDeck.parseRank(testCard.getCardKey())).toBe("2");
})