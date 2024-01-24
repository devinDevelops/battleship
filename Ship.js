export default class Ship {
  constructor(length, startCoordinates, isVertical) {
    this.length = length;
    this.fullCoordinates = this.#getFullCoordinates(length, startCoordinates);
    this.hitCount = 0;
    this.sunken = false;
    this.isVertical = isVertical || false;
  }

  #getFullCoordinates(length, coordinates, fullCoordinates = []) {
    if (fullCoordinates.length == this.length) return fullCoordinates;

    const [x, y] = coordinates;
    fullCoordinates.push(coordinates);
    length -= 1;

    if (this.isVertical) {
      return this.#getFullCoordinates(length, [x, y + 1], fullCoordinates);
    } else {
      return this.#getFullCoordinates(length, [x + 1, y], fullCoordinates);
    }
  }

  isSunk() {
    return this.length === this.hitCount;
  }

  hit() {
    return this.hitCount++;
  }
}
