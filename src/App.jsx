import { useState } from 'react'
import reactLogo from './assets/react.svg'
import  MyButton from './components/MyButton'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
        <h1>
          Welcome to My app </h1>
        <MyButton/>
    </div>
  )
}

export default App
