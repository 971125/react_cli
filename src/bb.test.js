const sum = require('./add');
const forEach = require('./abb')

const mockCallback = jest.fn(x => 42 + x);

test('2+2=4', () => {
  expect(sum(2, 2)).toBe(4)
})

test('forEach mock function', () => {
  forEach([0, 1], mockCallback);
})
