import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';

import Authenticator from './components/Authenticator';
import Login from './components/Login'

const App = () => {
    return (
        <Routes>
            <Route path="login" element={<Login />} />
            <Route path="/*" element={<Authenticator />} />
        </Routes>
    )
}

export default App
