class Grawl extends Character {

  constructor() {
    super()
    this.images = {
      rest: "js/lib/images/grawl_rest.jpg",
      hit: "js/lib/images/grawl_hit.jpg",
      miss: "js/lib/images/grawl_miss.jpg",
    }
    this.phrases = {
      greeting: `Euhhhhhhhh. Yes.`,
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
      place: [
        `it's time to place a boat.`,
        `why not place a boat.`,
        `place a boat.`
      ],
      greeting: `... Leonard is out again. It's the only time I feel free. Let us play.`,
      hit: [
        `What a lark! What a plunge! `,
        `Hit. You hit the ${gameData.checkFor}.`
      ],
      tried: [
        `Not quite on the mark.`
      ]
    };
  }
  shipPlace(currentShip) {
    let phraseArray = [
  `Very good spot for a ${currentShip}. Well done.`
];
  return phraseArray[0];
}
}

const virginia = new Virginia;

class Sadhguru extends Character {

  constructor() {
    super()
    this.images = {
      rest: "js/lib/images/sadhguru_rest.jpg",
      hit: "js/lib/images/sadhguru_hit.jpg",
      miss: "js/lib/images/sadhguru_miss.jpg",
    };
    this.phrases = {
      greeting: `What a silly little game. Ha ha! Quite human of us. Isn't it?`,
      hit: [
        `What a lark! What a plunge! `,
        `Hit. You hit the ${gameData.checkFor}.`
      ]
    };
  }
}

const sadhguru = new Sadhguru;

class Kamala extends Character {

  constructor() {
    super()
    this.images = {
      rest: "js/lib/images/kamala_rest.jpg",
      hit: "js/lib/images/kamala_hit.jpg",
      miss: "js/lib/images/kamala_miss.jpg",
    };
    this.phrases = {
      greeting: `God bless America. Let's win. Let's win big.`,
      hit: [
        `What a lark! What a plunge! `,
        `Hit. You hit the ${gameData.checkFor}.`
      ]
    };
  }
}

const kamala = new Kamala;

class Corey extends Character {

  constructor() {
    super()
    this.images = {
      rest: "js/lib/images/corey_rest.jpg",
      hit: "js/lib/images/corey_hit.jpg",
      miss: "js/lib/images/corey_miss.jpg",
    };
    this.phrases = {
      greeting: `Hey there bud`,
      hit: [
        `What a lark! What a plunge! `,
        `Hit. You hit the ${gameData.checkFor}.`
      ]

    };
  }
}

const corey = new Corey;