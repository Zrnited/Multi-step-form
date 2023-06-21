// import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </Router>
  )
}

export default App
