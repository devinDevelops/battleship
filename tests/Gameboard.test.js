import Gameboard from '../Gameboard';

test('Places ship on the [2, 2] coordinate', () => {
  const gameboard = new Gameboard();
  const [ship] = gameboard.placeShip(1, [2, 2]);

  expect(ship.length).toBe(1);
  expect(ship.fullCoordinates).toEqual([[2, 2]]);
});

test('Places ship on the [4, 2] coordinate with a vertical length of 2', () => {
  expect(new Gameboard().placeShip(2, [4, 2], true)[0]).toEqual({
    length: 2,
    fullCoordinates: [
      [4, 2],
      [4, 3],
    ],
    hitCount: 0,
    sunken: false,
    isVertical: true,
  });
});

test('Places ship on the [6, 6] coordinate with a horizontal length of 4', () => {
  expect(new Gameboard().placeShip(4, [6, 6])[0]).toEqual({
    length: 4,
    fullCoordinates: [
      [6, 6],
      [7, 6],
      [8, 6],
      [9, 6],
    ],
    hitCount: 0,
    sunken: false,
    isVertical: false,
  });
});

test('Gameboard receives attack and a ship gets hit', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(1, [1, 2]);
  expect(gameboard.receiveAttack([1, 2])).toEqual({
    length: 1,
    isVertical: false,
    fullCoordinates: [[1, 2]],
    hitCount: 1,
    sunken: true,
  });
});

test('Gameboard receives attack and a ship with a length > than 1 gets hit', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(3, [1, 2]);
  expect(gameboard.receiveAttack([1, 2])).toEqual({
    length: 3,
    isVertical: false,
    fullCoordinates: [
      [1, 2],
      [2, 2],
      [3, 2],
    ],
    hitCount: 1,
    sunken: false,
  });
});

test('Gameboard receives attack and nothing gets hit', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(1, [1, 2]);
  expect(gameboard.receiveAttack([1, 4])).toEqual([[1, 4]]);
});

test('All ships are sunken', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(1, [2, 3]);
  gameboard.receiveAttack([2, 3]);
  expect(gameboard.areAllShipsSunken()).toBeTruthy();
});

test('All but 1 ship is sunken', () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(1, [2, 3]);
  gameboard.placeShip(3, [4, 5]);
  gameboard.receiveAttack([2, 3]);
  expect(gameboard.areAllShipsSunken()).not.toBeTruthy();
});
