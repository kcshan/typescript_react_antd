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
