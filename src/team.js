export default class Team {
  constructor() {
    this.characters = new Set();
  }

  addAll(...characters) {
    for (const character of characters) {
      this.characters.add(character);
    }
    return this.characters;
  }

  * [Symbol.iterator]() {
    for (const member of this.characters) {
      yield member;
    }
  }
}
