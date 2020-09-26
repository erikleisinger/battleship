class Grawl extends Character {

  constructor() {
    super()
    this.images = {
      rest: "js/lib/images/grawl_rest.jpg",
      hit: "js/lib/images/grawl_hit.jpg",
      miss: "js/lib/images/grawl_miss.jpg",
    }
    this.phrases = {
      hit: [
        `Fantastic. There is nothing better than a cabbage soup`,
        `You hit their ${gameData.checkFor}. Why? Is the rustling of the fields and birdsong not enough for you? Will you ever find rest?`
      ]
    };
  }
};

const grawl = new Grawl;

class Virginia extends Character {

  constructor() {
    super()
    this.images = {
      rest: "js/lib/images/virginia_rest.jpg",
      hit: "js/lib/images/virginia_hit.jpg",
      miss: "js/lib/images/virginia_miss.jpg",
    };
    this.phrases = {
      hit: [
        `What a lark! What a plunge! `,
        `Hit. You hit the ${gameData.checkFor}.`
      ]
    };
  }
}

const virginia = new Virginia;