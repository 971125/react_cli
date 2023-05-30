const sum = require('./add')


beforeEach(() => {
  console.log('beforeEach开始');
});

afterEach(() => {
  console.log('afterEach开始');
});

describe('test文件',()=>{
  test('1+2=3', () => {
    expect(sum(1, 2)).toBe(3)
})
})


