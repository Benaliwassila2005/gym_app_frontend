import { useState } from 'react'

import './App.css'
import Home from './pages/Home';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home></Home>}></Route>

        {/* <Route path="/About" element={<About></About>}></Route>
        
        <Route path="/Services" element={<Services></Services>}></Route>
        
        <Route path="/" element={<Contact></Contact>}></Route> */}

      </Routes>

    </BrowserRouter>
  )
}

export default App
