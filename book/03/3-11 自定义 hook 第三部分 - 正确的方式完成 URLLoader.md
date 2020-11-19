### 自定义hook
#### 自定义hook解决hoc的劣势
src/hooks/useURLLoader.tsx
``` javascript
import { useState, useEffect } from 'react'
import axios from 'axios'

const useURLLoader = (url: string, deps: any[] = []) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get(url).then(result => {
      setData(result.data)
      setLoading(false)
    })
  }, deps)
  return [data, loading]
}

export default useURLLoader
```
App.tsx
``` javascript
import React, { useState } from 'react';
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import useURLLoader from './hooks/useURLLoader'
import './App.css';

interface IShowResoult {
  message: string;
  status: string;
}

function App() {
  const [show, setShow] = useState(true)
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  const dogResult = data as IShowResoult
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={() => { setShow(!show) }}>Refresh dog photo</button>
        </p>
        { loading ? <p>🐕 is loading</p> : 
          <img src={dogResult && dogResult.message}/>
        }
        <LikeButton/>
        { show && <MouseTracker/> }
      </header>
    </div>
  );
}

export default App;

```