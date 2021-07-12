const DeckList = (deckName) => {

	const self = {
		deckName: deckName,
		cards: new Map(),
		suits: new Map(),
		ranks: new Map()
	};

	const deckListCapabilities = self => ({
		
		addCard: (card) => {

			self.cards.set(card.getCardKey(), card);
		},

		getCardMap: () => {
			
			return self.cards;
		},

		parseSuit: (cardKey) => {

			for(let suitKey of self.suits.keys()){

				if(cardKey.endsWith(suitKey)){
					return suitKey;
				}
			}

			return "";
		},

		parseRank: (cardKey) => {

			for(let rankKey of self.ranks.keys()){

				if(cardKey.startsWith(rankKey)){
					return rankKey;
				}
			}

			return "";
		},

		addSuit: (suitKey, suitName) => {

			self.suits.set(suitKey, suitName);
		},

		addRank: (rankKey, rankValue) => {

			self.ranks.set(rankKey, rankValue);
		}
	});

	const newSelf = Object.assign(
						self, 
						deckListCapabilities(self)
					);

	return newSelf;
};

module.exports = DeckList;