import { useState } from 'react'
import './App.css'
import Barron from 'components/Burron'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <Barron />
       
        
      </div>
      <h1>Vite + React</h1>
      <div className="card text-3xl font-bold underline ">
        <button className="card text-3xl font-bold underline shadow-inner shadow md:shadow-lg "  onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-3xl font-bold underline">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
