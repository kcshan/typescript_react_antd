### State Hook
- Hook是什么？
- 什么时候会用useState Hook?
  
#### 点赞示例
在**src/components**目录下面新建**LikeButton.tsx**文件<br/>
LikeButton.tsx
``` javascript
import React, { useState } from 'react'

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  return (
    <button onClick={() => { setLike(like + 1) }}>
      {like} 👍
    </button>
  )
}

export default LikeButton

```
**App.jsx**中引入LikeButton组件<br/>
App.jsx
``` javascript
import React from 'react';
import LikeButton from './components/LikeButton'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeButton/>
      </header>
    </div>
  );
}

export default App;
```
优化一下<br/>
LikeButton.tsx
``` javascript
import React, { useState } from 'react'

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)

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