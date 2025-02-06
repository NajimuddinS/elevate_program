import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const timer = useRef(null)
  // () => 
  function start(){
    if(timer.current===null){
      timer.current=setInterval(() => {
        setCount((count) => count + 1)
      }, 1000);
    }

  }

  function pause(){
    clearInterval(timer.current)
    timer.current=null
  }

  function reset(){
    clearInterval(timer.current)
    timer.current=null
    setCount(0)
  }
  return (
    <>
      
      <div className="card">
        <h1>Timer</h1>
        <h2>{count}s</h2>
        <div>
        <button onClick={start}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  )
}

export default App
