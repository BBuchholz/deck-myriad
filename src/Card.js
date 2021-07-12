const Card = (key, name) => {

	const self = {
		
		key: key,
		name: name,
		imgSrc: ""
	};

	const cardCapabilities = self => ({
		
		getCardKey: () => {
			return self.key;
		},

		getCardName: () => {
			return self.name;
		},

		getImageSource: () => {
			return "";
		}
	});

	const newSelf = Object.assign(
						self, 
						cardCapabilities(self)
					);

	return newSelf;
}

module.exports = Card;