### 通用测试框架
#### Jest
- 断言

#### 测试
src/jest.test.js
``` javascript
test('test common matcher', () => {
  expect(2 + 2).toBe(4)
  expect(2 + 3).not.toBe(4)
})

test('test to be true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy
})

test('test number', () => {
  expect(4).toBeGreaterThan(3)
  expect(3).toBeLessThan(4)
})

test('test object', () => {
  expect({ name: 'kcs' }).toEqual({ name: 'kcs' })
})
```
``` shell
cnpm install jest -g
jest ./jest.test.js
jest ./jest.test.js --watch
```