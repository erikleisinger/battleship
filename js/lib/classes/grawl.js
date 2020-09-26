 class Grawl extends Character {

    constructor() {
      super()
      this.phrases = {
        hit: [
          `Fantastic. There is nothing better than a cabbage soup`,
          `You hit their ${gameData.checkFor}. Why? Is the rustling of the fields and birdsong not enough for you? Will you ever find rest?`
        ]
      };
    }
  };

  const grawl = new Grawl;
