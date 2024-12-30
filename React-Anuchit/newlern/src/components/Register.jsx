import '../App.css';
import React, { useState } from 'react';
import { apiCaller } from '../until/Api';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

const Title = () => <h1 className="title">โปรแกรมวิเคราะห์ข้อมูลใน Data Base เบื้องต้น</h1>;

const Description = () => <p className="description">หน้าสมัครเข้าใช้งาน</p>;

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault(); // ป้องกันการรีเฟรชหน้า

    if (password !== confirmPassword) {
      setMessage('รหัสผ่านไม่ตรงกัน กรุณาลองอีกครั้ง');
      return;
    }

    try {
      const url = 'http://127.0.0.1:5000/api/signup'; // URL API สำหรับสมัครสมาชิก
      const data = { username, password, email };
      const method = 'POST';

      const response = await apiCaller(url, data, method);

      setMessage(`สมัครสมาชิกสำเร็จ: ยินดีต้อนรับ ${response.name}`);
      navigate('/login'); // นำผู้ใช้งานไปยังหน้าลงชื่อเข้าใช้
    } catch (error) {
      setMessage('สมัครสมาชิกล้มเหลว กรุณาลองอีกครั้ง');
    }
  };

  return (
    <div className="container">
      <Title />
      <Description />
      <form className="form" onSubmit={handleSignup}>
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
          <label htmlFor="email" className="form-label">อีเมล:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="กรอกอีเมล"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        <div className="form-group">
          <label htmlFor="confirmPassword" className="form-label">ยืนยันรหัสผ่าน:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="ยืนยันรหัสผ่าน"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="form-input"
            required
          />
        </div>

        <button type="submit" className="form-button">สมัครสมาชิก</button>
        {message && <p>{message}</p>}
      </form>
      <Link to="/login">กลับไปยังหน้าลงชื่อเข้าใช้</Link>
    </div>
  );
}

export default Signup;