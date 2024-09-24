import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home'
import Login from './pages/login/Login';
import SignIn from './pages/sigin/SignIn';

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
