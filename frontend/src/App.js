import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import UserDashboard from './components/UserDashboard'
import VerifierDashboard from './components/VerifierDashboard'
import AdminDashboard from './components/AdminDashboard'

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/user-dashboard" element={<UserDashboard />} />
      <Route exact path="/verifier-dashboard" element={<VerifierDashboard />} />
      <Route exact path="/admin-dashboard" element={<AdminDashboard />} />
    </Routes>
  </Router>
)

export default App