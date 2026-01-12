import React from 'react'
import {Routes, Route, BrowserRouter as Router  } from "react-router-dom";
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Homepage from './pages/Homepage';

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/Experience' element={<Experience/>}/>
          <Route path='/Skills' element={<Skills/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/Resume' element={<Resume/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
