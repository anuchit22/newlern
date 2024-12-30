import React, { useState } from 'react';
import { apiCaller } from '../until/Api';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const url = 'http://127.0.0.1:5000/api/login';
            const data = { username, password };
            const method = 'POST';

            const response = await apiCaller(url, data, method);
            setMessage(`Login success: Welcome ${response.name}`); // สมมุติว่า API ส่งกลับชื่อผู้ใช้งาน
        } catch (error) {
            setMessage('Login failed. Please try again.');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Login;
