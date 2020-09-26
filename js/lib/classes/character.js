class Character {

  constructor() {
    this.phrases = {
      hit: [`wow`]
    };
    this.attribute = 'holy';
  }
    getPhrase(event) {
    let library = this.phrases[event];
    let length = library.length;
    let randomNumber = Math.floor(Math.random() * length);
    console.log(this.phrases[event][randomNumber]);
  }
};

