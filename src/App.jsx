import { useState } from 'react'
import Authform from './pages/Authform/index.jsx'
import './app.css'
import {Routes,Route} from 'react-router-dom';
function App() {
  

  return (
    <Routes>
      <Route path='/Login' element={<Authform/>}/>
    </Routes>
    
  )
}

export default App
