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
