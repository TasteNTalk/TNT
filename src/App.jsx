import React from 'react'
import Querypage from './components/Querypage/Querypage'
import { Route, Routes } from 'react-router-dom'
import Firstpage from './components/Firstpage/Firstpage'
import Navbar from './components/Navbar/Navbar'
import Landingpage from './components/Landingpage/Landingpage'


const App = () => {
  return (
    <div>

      <Routes>

        <Route path = "/" element= {<Firstpage/>} />
        <Route path = "/query" element= {<Querypage/>} />
        <Route path = "/home" element= {<Landingpage/>} />
        {/* <Route path = "" element= {</>} /> */}

      </Routes>
    </div>
  )
}

export default App
