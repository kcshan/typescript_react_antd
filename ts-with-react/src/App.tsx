import React, { useState } from 'react';
import LikeButton from './components/LikeButton'
import MouseTracker from './components/MouseTracker'
import WithLoader from './components/WithLoader'
import './App.css';

interface IShowResoult {
  message: string;
  status: string;
}

const DogShow: React.FC<{data: IShowResoult}> = ({ data }) => {
  return (
    <>
      <h2>Dog show: {data.status}</h2>
      <img src={data.message}/>
    </>
  )
}

function App() {
  const [show, setShow] = useState(true)
  const WrappedDogShow = WithLoader(DogShow, 'https://dog.ceo/api/breeds/image/random')
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={() => { setShow(!show) }}>Toggle Tracker</button>
        </p>
        <WrappedDogShow/>
        <LikeButton/>
        { show && <MouseTracker/> }
      </header>
    </div>
  );
}

export default App;
