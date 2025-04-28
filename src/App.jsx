import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Success from './Success'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/success' element={<Success/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
