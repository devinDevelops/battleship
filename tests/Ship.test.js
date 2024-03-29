import Ship from '../Ship';

test('Creates Ship object with a given length of 2, and starts with 0 hits and is not sunken', () => {
  expect(new Ship(2, [1, 1])).toEqual({
    length: 2,
    fullCoordinates: [
      [1, 1],
      [2, 1],
    ],
    hitCount: 0,
    sunken: false,
    isVertical: false,
  });
});

test('ship.fullCoordinates should be an array with the first index being the startCoordinates', () => {
  const ship = new Ship(1, [2, 2]);
  expect(ship.fullCoordinates).toEqual([[2, 2]]);
});

test('A ship with a length > 1, the coordinates in fullCoordinates are generated by incrementing the appropriate coordinate plane until fullCoordinates.length is equal to ship.length', () => {
  const ship = new Ship(3, [4, 2], true);
  expect(ship.fullCoordinates).toEqual([
    [4, 2],
    [4, 3],
    [4, 4],
  ]);
});

test('Ship hit count increments by one', () => {
  const damagedShip = new Ship(4, [1, 4], true);
  damagedShip.hit();
  expect(damagedShip.hitCount).toEqual(1);
});

test('Ship with the length equal to the hit count is sunken', () => {
  const sunkenShip = new Ship(1, [3, 1]);
  sunkenShip.hit();
  expect(sunkenShip.isSunk()).toBeTruthy();
});

test('Ship with differing length and hit count is not sunken', () => {
  const damagedShip = new Ship(2, [3, 5]);
  damagedShip.hit();
  expect(damagedShip.isSunk()).not.toBeTruthy();
});
