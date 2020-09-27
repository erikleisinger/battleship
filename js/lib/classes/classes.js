class Andrea extends Character {

  constructor() {
    super()
    this.images = {
      rest: "js/lib/images/andrea_rest.jpg",
      hit: "js/lib/images/andrea_hit.jpg",
      miss: "js/lib/images/andrea_miss.jpg",
    }
    this.phrases = {
      place: [
        `it's time to place a boat.`,
        `why not place a boat.`,
        `place a boat.`
      ],
      resting: [
        `I knew Alan Ginsberg. He was a pedophile.`,
        `I know only one thing: there is no food we can eat that will make the polar bears come back.`,
        `Where's the can?`,
        `While gossip among women is universally ridiculed as low and trivial, gossip among men is called theory, or idea, or fact.`,
        `I think the essence of romantic love for women is being the special one, and that's an absolutely terrible trap.`,
        `It is no secret that fear and hatred of homosexuals permeate our society.`,
        `I have spent 20 years writing these books. Had I wanted to say men are beasts and scream, that takes 30 seconds.`,
        `I know a hell of a lot about intercourse. I wish I knew less.`,
        `The Left cannot have its whores and its politics too.`,
        `One needs either equality or political and economic superiority.`,
        `Woman is not born: she is made.`,
        `Feminism is hated because women are hated.`,
        `“If you want a definition of what a coward is, it’s needing to push a whole class of people down so that you can walk on top of them.”`,
        `Have you ever seen the movie Contact? Don't.`,
        `I'd love for this game to be over.`,
        `Battleship. Battles, ships, war. The tiny fantasy of a tiny man.`,
        `I think I'm going to order some new throw pillows for the apartment.`,
        `Hurry up, would you?`
      ],
      greeting: `Euhhhhhhhh. Yes.`,
      hit: [
        `Fantastic. There is nothing better than a cabbage soup`,
        `You hit their ${gameData.checkFor}. Why? Is the rustling of the fields and birdsong not enough for you? Will you ever find rest?`
      ],
      tried: [
        `Not quite on the mark.`,
        `Why does it matter if you win?`,
        `Miss.`,
        `its a miss brenda`,
        `miss`
      ]
    };
  }
  shipPlace(currentShip) {
    let phraseArray = [
  `Very good spot for a ${currentShip}. Well done.`
];
  return phraseArray[0];
}
};

const andrea = new Andrea;

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
      resting: [
        `I feel ill again, like a dark cloud is overhead.`,
        `How I long for the rush of the city.`,
        `There is no hope for women.`
      ],
      hit: [
        `What a lark! What a plunge! `,
        `Hit. You hit the ${gameData.checkFor}.`
      ],
      tried: [
        `Not quite on the mark.`,
        `Suddenly, staring down at them, Virginia couldn't help but feel a sudden horror, a sudden jolt of consciousness that only reinforced what she already knew: it was a miss.`,
        `She could only watch as the game slipped through her fingers.`,
        `Oh! Enough of these failures. How I long to be in the city`,
        `Have you almost lost? Olivia will soon be over for afternoon tea.`,
        `Hmm...? Oh, another miss. Don't bother me.`,
        `If you keep it up like this, you'll soon be dead.`
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
      place: [
        `it's time to place a boat.`,
        `why not place a boat.`,
        `place a boat.`
      ],
      greeting: `What a silly little game. Ha ha! Quite human of us. Isn't it?`,
      resting: [
        `I just thought of something funny. `,
        `Life is is really no problem at all, isn't it?`,
        `Hehehehehe`
      ],
      hit: [
        `What a lark! What a plunge!`,
        `Hit. You hit the ${gameData.checkFor}.`
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
      place: [
        `it's time to place a boat.`,
        `why not place a boat.`,
        `place a boat.`
      ],
      greeting: `God bless America. Let's win. Let's win big.`,
      resting: [
        `I believe in equality under the law. For all.`,
        `We should talk later. I have some big ideas to tell you about.`,
        `I am assessing you.`
      ],
      hit: [
        `What a lark! What a plunge! `,
        `Hit. You hit the ${gameData.checkFor}.`
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
      place: [
        `it's time to place a boat.`,
        `why not place a boat.`,
        `place a boat.`
      ],
      greeting: `Hey there bud`,
      resting: [
        `Oh man, I have a craft beer you gotta try later.`,
        `What time are we gonna be finished? I'm podcasting with Brad later.`,
        `Ever listen to Rush?`
      ],
      hit: [
        `What a lark! What a plunge! `,
        `Hit. You hit the ${gameData.checkFor}.`
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

const corey = new Corey;