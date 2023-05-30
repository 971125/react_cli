const sum = require('./add');

function forEach(items, callback) {
  for (let index = 0; index < items.length; index++) {
    callback(items[index]);
  }
}
const mockCallback = jest.fn(x => 42 + x);

test('2+2=4', () => {
  expect(sum(2, 2)).toBe(4)
})

test('forEach mock function', () => {
  forEach([0, 1], mockCallback);
})
