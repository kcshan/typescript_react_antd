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
