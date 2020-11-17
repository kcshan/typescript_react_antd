import React, { useState, useEffect } from 'react'
import useMousePosition from '../hooks/useMoussePosition'

const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0)
  const [on, setOn] = useState(true)
  const positions = useMousePosition()
  useEffect(() => {
    console.log('document title effect is running')
    document.title = `点击了${like}次`
  }, [like])
  function handleAlertClick() {
    setTimeout(() => {
      alert('you clicked on ' + like)
    }, 3000)
  }
  return (
    <>
      <button onClick={() => {setLike(like + 1)}}>
        {like} 👍
      </button>
      <button onClick={() => {setOn(!on) }}>
        {on ? 'ON' : 'OFF'}
      </button>
      <button onClick={handleAlertClick}>Alert</button>
      <p>
        X: {positions.x},
        Y: {positions.y}
      </p>
    </>
  )
}

export default LikeButton
