const DeckList = (deckName) => {

	const self = {
		deckName: deckName,
		cards: []
	};

	return Object.assign(self);
};

module.exports = DeckList;