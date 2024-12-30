import '../App.css';
import React, { useState } from 'react';
import { apiCaller } from '../until/Api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

const Title = () => <h1 className="title">โปรแกรมวิเคราะห์ข้อมูลใน Data Base เบื้องต้น</h1>;

const Description = () => <p className="description">กรุณาลงชื่อเข้าใช้งานระบบ</p>;

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      const url = 'http://127.0.0.1:5000/api/login';
      const data = { username, password };
      const method = 'POST';

      const response = await apiCaller(url, data, method);

      setMessage(`Login success: Welcome ${response.name}`);

      navigate("/content");
    } catch (error) {
      setMessage('Login failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <Title />
        <Description />
      </div>
      <form className="form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">ชื่อผู้ใช้:</label>
          <input 
            type="text" 
            id="username" 
            name="username" 
            placeholder="กรอกชื่อผู้ใช้"
            value={username} 
            onChange={(e) => setUsername(e.target.value)}
            className="form-input" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">รหัสผ่าน:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            placeholder="กรอกรหัสผ่าน" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input" 
            required 
          />
        </div>

        <button type="submit" className="form-button">เข้าสู่ระบบ</button>
        {message && <p className="form-message">{message}</p>}
      </form>
      <div className="footer">
        <Link to="/content" className="link-button">ไปที่ Content</Link>
      </div>
    </div>
  );
}

export default Login;
