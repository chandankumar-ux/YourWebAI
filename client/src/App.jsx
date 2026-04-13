import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
export const serverUrl="http://localhost:8000";
function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>} />

   </Routes>
   </BrowserRouter>
  )
}

export default App


