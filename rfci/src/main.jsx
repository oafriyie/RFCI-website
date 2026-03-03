import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import OurWork from './pages/OurWork.jsx'
import ProgramsPage from './pages/ProgramsPage.jsx'
import Donate from './pages/Donate.jsx'
import Contact from './pages/Contact.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* The '/*' is the fix for the nested routes in App.jsx */}
        <Route path="/*" element={<App />} /> 
        <Route path="/work" element={<OurWork />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)