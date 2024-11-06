// src/auth.js

export function isAuthenticated() {
    const token = localStorage.getItem('token');
    return token !== null;
}
