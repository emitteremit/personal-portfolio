import React from 'react'
import Homepage from './components/pages/Homepage'
import {Routes, Route, BrowserRouter as Router  } from "react-router-dom";
import Experience from './components/pages/Experience';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

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
