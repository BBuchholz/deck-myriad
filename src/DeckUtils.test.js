const DeckUtils = require('./DeckUtils');
const testUtils = DeckUtils();


it('should have at least one test', () => {
	expect(true).toBe(true);
});

describe('scenarios', () => {

	const expectedScenarios = 
		[
			[0, '4D', '5W', '3C', '2S'],
			[1, '6D', '5S', '3D', '2W'],
			[2, '9D', '6W', '8C', '4S'],
			[3, '5C', '8D', '3S', '2D'],
			[4, '7D', '5D', '3W', '10S'],
			[5, '7W', '8W', '6S', '9S'],
			[6, '7C', '10D', '9W', '2C'],
			[7, '10W', '10C', '9C', '4C'],
			[8, '8S', '7S', '4W', '6C']
		];

	var scenarios = testUtils.getScenarios();			

	test.each(expectedScenarios)(
		"given scenario index %p, returns four cards, %p, %p, %p, and %p",
		(scenarioIndex, daemonCard, playerCardOne, playerCardTwo, playerCardThree) => {

			var scenario = scenarios[scenarioIndex];
			expect(scenario.daemonCard.power).toBe(daemonCard);
			expect(scenario.playerCards[0].power).toBe(playerCardOne);
			expect(scenario.playerCards[1].power).toBe(playerCardTwo);
			expect(scenario.playerCards[2].power).toBe(playerCardThree);

		}
	);
});

describe('delta utils', () => {

	const suitToHDeltaCases = 
		[
			['W', 1], 
			['C', -1], 
			['S', 1], 
			['D', -1], 
			['?', 0]
		];

	test.each(suitToHDeltaCases)(
		"given suit %p as arg, returns HDelta of %p",
		(suitArg, expectedResult) => {
			const result  = testUtils.getHDeltaFromSuit(suitArg);
			expect(result).toEqual(expectedResult);
		}
	);

	const suitToMDeltaCases = 
		[
			['W', -1], 
			['C', 1], 
			['S', 1], 
			['D', -1], 
			['?', 0]
		];

	test.each(suitToMDeltaCases)(
		"given suit %p as arg, returns MDelta of %p",
		(suitArg, expectedResult) => {
			const result  = testUtils.getMDeltaFromSuit(suitArg);
			expect(result).toEqual(expectedResult);
		}
	);
});

