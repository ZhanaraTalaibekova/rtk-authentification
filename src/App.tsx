import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router';
import Auth from './pages/Auth';
import Login from './pages/Login';
import Home from './pages/Home';
import { Layout } from './shared/Layout';
import Reset from './pages/Reset';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Navigate to="/auth" replace />} />
          <Route path='/auth' element={<Auth />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/reset' element={<Reset />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
