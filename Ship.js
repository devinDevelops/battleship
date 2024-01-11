export default class Ship {
  constructor(length) {
    this.length = length || 1;
    this.hitCount = 0;
    this.sunken = false;
  }

  isSunk() {
    return this.length === this.hitCount;
  }

  hit() {
    this.hitCount++;
  }
}
