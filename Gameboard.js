import Ship from './Ship';

export default class Gameboard {
  constructor() {
    this.ships = [];
    this.missedAttacks = [];
  }

  placeShip(length, startCoordinates, isVertical) {
    this.ships.push(new Ship(length, startCoordinates, isVertical));
    return this.ships;
  }

  receiveAttack([x1, y1]) {
    const targetedShip = this.ships.find(ship =>
      ship.fullCoordinates.some(([x2, y2]) => x1 === x2 && y1 === y2)
    );

    if (targetedShip) {
      targetedShip.hit();
      targetedShip.sunken = targetedShip.isSunk();
      return targetedShip;
    } else {
      this.missedAttacks.push([x1, y1]);
      return this.missedAttacks;
    }
  }

  areAllShipsSunken() {
    return this.ships.every(ship => ship.sunken);
  }
}

// horiz axis - in dom, display letter but use data-xAxis with the corresponding number
// [a, b, c, d, e, f, g, h, i, j]
