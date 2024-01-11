import Ship from '../Ship';

test('Given a length of 0 or nothing, the ship is initialized with a length of 1', () => {
  const lengthZeroShip = new Ship(0);
  const lengthNothingShip = new Ship();
  expect(lengthZeroShip.length).toEqual(1);
  expect(lengthNothingShip.length).toEqual(1);
});

test('Creates Ship object with a given length of 2, and starts with 0 hits and is not sunken', () => {
  expect(new Ship(2)).toEqual({ length: 2, hitCount: 0, sunken: false });
});

test('Ship hit count increments by one', () => {
  const damagedShip = new Ship(4);
  damagedShip.hit();
  expect(damagedShip.hitCount).toEqual(1);
});

test('Ship with the length equal to the hit count is sunken', () => {
  const sunkenShip = new Ship();
  sunkenShip.hit();
  expect(sunkenShip.isSunk()).toBeTruthy();
});

test('Ship with differing length and hit count is not sunken', () => {
  const damagedShip = new Ship(2);
  damagedShip.hit();
  expect(damagedShip.isSunk()).not.toBeTruthy();
});
