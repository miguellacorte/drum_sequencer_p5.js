import { useState } from 'react'
import './App.css'
import DrumSequencer from './components/DrumSequencer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <DrumSequencer />
      
    </div>
  )
}

export default App
