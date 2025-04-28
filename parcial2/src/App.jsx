import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Battle from './pages/Battle'
import Ranking from './pages/Ranking'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/battle/:name' element={<Battle/>}/>
          <Route path='/ranking' element={<Ranking/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
