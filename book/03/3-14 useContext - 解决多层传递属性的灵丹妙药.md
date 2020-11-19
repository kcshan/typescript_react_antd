### useContext - 解决多层传递属性的灵丹妙药
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
interface IThemeProps {
  [key: string]: {color: string; background: string;}
}
const themes: IThemeProps = {
  'light': {
    color: '#000',
    background: '#eee',
  },
  'dark': {
    color: '#fff',
    background: '#000'
  }
}
export const ThemeContext = React.createContext(themes.dark);
function App() {
  const [show, setShow] = useState(true)
  const [data, loading] = useURLLoader('https://dog.ceo/api/breeds/image/random', [show])
  const dogResult = data as IShowResoult
  return (
    <div className="App">
      <ThemeContext.Provider value={themes.dark}>
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
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

```
LikeButton.tsx
``` javascript
import React, { useState, useEffect, useRef, useContext } from 'react'
import { ThemeContext } from '../App'

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  const likeRef = useRef(0)
  const didMountRef = useRef(false)
  const domRef = useRef<HTMLInputElement>(null)
  const theme = useContext(ThemeContext)
  console.log(theme)
  const style = {
    background: theme.background,
    color: theme.color
  }
  useEffect(() => {
    console.log('document title effect is running')
    document.title = `点击了${like}次`
  }, [like])
  useEffect(() => {
    if (didMountRef.current) {
      console.log('this is updated')
    } else {
      didMountRef.current = true
    }
  })
  useEffect(() => {
    if (domRef && domRef.current) {
      domRef.current.focus()
    }
  })
  function handleAlertClick() {
    setTimeout(() => {
      alert('you clicked on ' + likeRef.current)
    }, 3000)
  }
  return (
    <>
      <input type="text" ref={domRef}/>
      <button onClick={() => {setLike(like + 1); likeRef.current++}}>
        {like} 👍
      </button>
      <button style={style} onClick={() => {setOn(!on) }}>
        {on ? 'ON' : 'OFF'}
      </button>
      <button onClick={handleAlertClick}>Alert</button>
    </>
  )
}

export default LikeButton

```