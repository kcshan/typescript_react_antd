### React 测试工具 - react-testing-library
#### react-testing-library
- testing-library/jest-dom
- testing-library/react
- testing-library/user-event

src/components/Button/button.test.tsx
``` javascript
import React from 'react'
import { render } from '@testing-library/react'
import Button from './index'

test('our first react test case', () => {
  const wrapper = render(<Button>Nice</Button>)
  const element = wrapper.queryByText('Nice')
  expect(element).toBeTruthy()
})
```
``` shell
npm run test
```