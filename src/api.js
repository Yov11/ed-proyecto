// src/api.js

import axios from 'axios';

export function fetchProtectedData() {
    const token = localStorage.getItem('token');

    return axios.get('/api/protected-route', {  // Cambia la URL para que use el proxy
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
}
