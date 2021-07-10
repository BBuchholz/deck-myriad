const Card = (key, name) => {

	const self = {
		
		key: key,
		name: name,
		imgSrc: ""
	};

	return Object.assign(self);
}

module.exports = Card;