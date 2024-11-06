import React, { useEffect, useState } from 'react';
import { fetchProtectedData } from '../api';

function Dashboard() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetchProtectedData();
                setMessage(response.data.message);
            } catch (error) {
                setMessage('Error al cargar datos');
            }
        };
        getData();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{message}</p>
        </div>
    );
}

export default Dashboard;
