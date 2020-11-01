### Effect Hook 1
- 无需清除的Effect
- 代码时间：使用useEffect使用DOM完成标题更新

#### 在class中怎样实现
``` javascript
componentDidMount() {
  document.title = `You click ${this.state.count} times`
}
componentDidUpdate() {
  document.title = `You click ${this.state.count} times`
}
```
LikeButton.tsx
``` javascript
import React, { useState, useEffect } from 'react'

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  useEffect(() => {
    document.title = `点击了${like}次`
  })
  return (
    <>
      <button onClick={() => {setLike(like + 1)}}>
        {like} 👍
      </button>
      <button onClick={() => {setOn(!on) }}>
        {on ? 'ON' : 'OFF'}
      </button>
    </>
  )
}

export default LikeButton

```