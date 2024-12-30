import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { apiCaller } from './until/Api';
import { useNavigate } from 'react-router-dom';  

  



const Title = () => <h1 className="title">โปรแกรมวิเคราะห์ข้อมูลใน Data Base เบื้องต้น</h1>;

const Description = () => <p className="description">หน้าลงชื่อเข้าใช้</p>;
// const Transaction = () =>{
//   return (

//   );
// }

  function App() {
    
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
           // สมมุติว่า API ส่งกลับชื่อผู้ใช้งาน
           
      } catch (error) {
          setMessage('Login failed. Please try again.');
      }
  };
      return (
        <div className="container">
      <Title />
      <Description />
      <form className="form">
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

        <button onClick={handleLogin} type="submit" className="form-button">บันทึกข้อมูล</button>
        {message && <p>{message}</p>}
      </form>
    </div>
     
   
    
    );
}

export default App;


