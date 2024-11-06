// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <Router>
            <Routes>
                {/* Ruta pública para el login */}
                <Route path="/login" element={<LoginForm />} />

                {/* Ruta protegida para el dashboard */}
                <Route 
                    path="/dashboard" 
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    } 
                />

                {/* Puedes agregar más rutas aquí */}
            </Routes>
        </Router>
    );
}

export default App;
