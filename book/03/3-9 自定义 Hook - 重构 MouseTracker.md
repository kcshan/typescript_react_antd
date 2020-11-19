### 自定义Hook
- 将组件逻辑提取到可重用的函数中
- 代码时间：使用自定义Hook抽象鼠标跟踪器

#### 使用自定义Hook抽象鼠标跟踪器
- 自定义hook必须使用use开头

src/hooks/useMousePosition.tsx
``` javascript
import React, { useState, useEffect } from 'react'

const useMousePosition = () => {
  const [ positions, setPositions ] = useState({x:0, y:0})
  useEffect(() => {
    console.log('add effect', positions.x)
    const updateMouse = (e: MouseEvent) => {
      console.log('inner')
      setPositions({x: e.clientX, y: e.clientY})
    }
    document.addEventListener('mousemove', updateMouse)
    return () => {
      console.log('remove effect', positions.x)
      document.removeEventListener('click', updateMouse)
    }
  }, [])
  return positions
}

export default useMousePosition
```
App.tsx
``` javascript
import React, { useState } from 'react';
import LikeButton from './components/LikeButton'
// import MouseTracker from './components/MouseTracker'
import useMousePosition from './hooks/useMoussePosition'
import './App.css';

function App() {
  const [show, setShow] = useState(true)
  const positions = useMousePosition()
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={() => { setShow(!show) }}>Toggle Tracker</button>
        </p>
        <LikeButton/>
        {/* { show && <MouseTracker/> } */}
        <p>
          X: {positions.x},
          Y: {positions.y}
        </p>
      </header>
    </div>
  );
}

export default App;

```