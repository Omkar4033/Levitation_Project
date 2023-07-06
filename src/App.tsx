import React from 'react'
import {  Routes, Route } from 'react-router-dom';

import LoginPage from './LoginPage'
import ForgotPasswordPage from './ForgotPasswordPage'
import HeroSection from './HeroSection';
import MultiStepForm from './MultiStepForm';

const App = () => {
  return (
    <div>
       <Routes>
        <Route path='/' element={<HeroSection/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path='/form' element={<MultiStepForm/>}/>
       
      </Routes>
    </div>
  )
}

export default App