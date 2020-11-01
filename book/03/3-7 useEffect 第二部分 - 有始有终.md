### Effect Hook 2
- 需要清除的Effect
- 代码时间：使用useEffect完成一个鼠标跟踪器

#### 在class中怎样实现
``` javascript
componentDidMount() {
  document.addEventListener('click', this.updateMouse)
}
componentWillUnmount() {
  document.removeEventListener('click', this.updateMouse)
}
```

#### 鼠标跟踪器
在**src/components**目录下面新建**MouseTracker.tsx**文件<br/>
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
  })
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
useEffect函数参数中返回一个函数，意思就是要处理某些逻辑，类似componentWillUnmount<br/>
**App.jsx**中引入MouseTracker组件<br/>
App.jsx
``` javascript
import React from 'react';
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton/>
        <MouseTracker/>
      </header>
    </div>
  );
}

export default App;
```