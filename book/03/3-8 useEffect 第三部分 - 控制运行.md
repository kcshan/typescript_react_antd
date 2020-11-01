### Effect Hook 3
- 每次渲染都执行useEffect，有没有办法控制执行
- 代码时间：控制useEffect的执行
- 代码时间：修改前面俩个例子的代码

#### 鼠标跟踪器
MouseTracker.tsx
``` javascript
import React, { useState, useEffect } from 'react'

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({x: 0, y: 0})
  useEffect(() => {
    console.log('add effect', positions.x)
    const updateMouse = (e: MouseEvent) => {
      console.log('inner')
      setPositions({x: e.clientX, y: e.clientY})
    }
    document.addEventListener('click', updateMouse)
    return () => {
      console.log('remove effect', positions.x)
      document.removeEventListener('click', updateMouse)
    }
  }, [])
  console.log('before render', positions.x)
  return (
    <p>
      X: {positions.x},
      Y: {positions.y}
    </p>
  )
}

export default MouseTracker
```
App.tsx
``` javascript
import React, { useState } from 'react';
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import './App.css';

function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={() => { setShow(!show) }}>Toggle Tracker</button>
        </p>
        <LikeButton/>
        { show && <MouseTracker/> }
      </header>
    </div>
  );
}

export default App;
```
LikeButton.tsx
``` typescript
import React, { useState, useEffect } from 'react'

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  useEffect(() => {
    console.log('document title effect is running')
    document.title = `点击了${like}次`
  }, [like])
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