const DeckUtils = () => {

  const self = {
    useHardCodedScenarios: true,
  };

  const deckCapabilities = self => ({
    
    getScenarios: () => {

      if(self.useHardCodedScenarios){
        return self.getHardCodedScenarios();
      }else{
        return self.getDynamicScenarios();
      }
    },

    getDynamicScenarios: () => {


    },

    cardToDescription: (cardValue) => {

      return '';
    },

    getHardCodedScenarios: () => {

      // You can add new scenarios, but make sure that there is exactly...
      // * 1 daemonCard per scenario
      // * 3 playerCards per scenario

      var scenarios = [
        {
          daemonCard : {
            description : "Four of Disks",
            power : "4D",
          },
          playerCards : [
            {
              description : "Five of Wands",
              power : "5W",
            },
            {
              description : "Three of Cups",
              power : "3C",
            },
            {
              description : "Two of Swords",
              power : "2S",
            }
          ]
        },
        {
          daemonCard : {
            description : "Six of Disks",
            power : "6D",
          },
          playerCards : [
            {
              description : "Five of Swords",
              power : "5S",
            },
            {
              description : "Three of Disks",
              power : "3D",
            },
            {
              description : "Two of Wands",
              power : "2W",
            }
          ]
        },
        {
          daemonCard : {
            description : "Nine of Disks",
            power : "9D",
          },
          playerCards : [
            {
              description : "Six of Wands",
              power : "6W",
            },
            {
              description : "Eight of Cups",
              power : "8C",
            },
            {
              description : "Four of Swords",
              power : "4S",
            }
          ]
        },
        {
          daemonCard : {
            description : "Five of Cups",
            power : "5C",
          },
          playerCards : [
            {
              description : "Eight of Disks",
              power : "8D",
            },
            {
              description : "Three of Swords",
              power : "3S",
            },
            {
              description : "Two of Disks",
              power : "2D",
            }
          ]
        },
        {
          daemonCard : {
            description : "Five of Cups",
            power : "7D",
          },
          playerCards : [
            {
              description : "Eight of Disks",
              power : "5D",
            },
            {
              description : "Three of Swords",
              power : "3W",
            },
            {
              description : "Two of Disks",
              power : "10S",
            }
          ]
        },
        {
          daemonCard : {
            description : "Five of Cups",
            power : "7W",
          },
          playerCards : [
            {
              description : "Eight of Disks",
              power : "8W",
            },
            {
              description : "Three of Swords",
              power : "6S",
            },
            {
              description : "Two of Disks",
              power : "9S",
            }
          ]
        },
        {
          daemonCard : {
            description : "Five of Cups",
            power : "7C",
          },
          playerCards : [
            {
              description : "Eight of Disks",
              power : "10D",
            },
            {
              description : "Three of Swords",
              power : "9W",
            },
            {
              description : "Two of Disks",
              power : "2C",
            }
          ]
        },
        {
          daemonCard : {
            description : "Five of Cups",
            power : "10W",
          },
          playerCards : [
            {
              description : "Eight of Disks",
              power : "10C",
            },
            {
              description : "Three of Swords",
              power : "9C",
            },
            {
              description : "Two of Disks",
              power : "4C",
            }
          ]
        },
        {
          daemonCard : {
            description : "Eight of Swords",
            power : "8S",
          },
          playerCards : [
            {
              description : "Seven of Swords",
              power : "7S",
            },
            {
              description : "Four of Wands",
              power : "4W",
            },
            {
              description : "Six of Cups",
              power : "6C",
            }
          ]
        }
      ];

      return scenarios;
    },

    getHDeltaFromSuit: (suit) => {
    
      switch (suit) {      

        case 'D':
          // console.log("disks found");
          return -1;
       
        case 'C':
          // console.log("cups found");
          return -1;
       
        case 'S':
          // console.log("swords found");
          return 1;
        
        case 'W':
          // console.log("wands found");
          return 1;
        
        default:
          return 0;
      }
    },

    getMDeltaFromSuit: (suit) => {
      
      switch (suit) {      

        case 'D':
          // console.log("disks found");
          return -1;
       
        case 'C':
          // console.log("cups found");
          return 1;
       
        case 'S':
          // console.log("swords found");
          return 1;
        
        case 'W':
          // console.log("wands found");
          return -1;
        
        default:
          return 0;
      }
    }
  });

  const newSelf = Object.assign(
            self, 
            deckCapabilities(self)
          );

  return newSelf;
}

module.exports = DeckUtils;