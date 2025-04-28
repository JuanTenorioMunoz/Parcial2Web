import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Battle from './pages/Battle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Battle' element={<Battle/>}/>
          <Route path='/Ranking' element={<Ranking/>}/>
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
