import React, { useState } from "react";
import { apiCaller } from '../until/Api';

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleSendText = async () => {
    if (text.trim() === "") {
      setMessage("กรุณาใส่ข้อความก่อน.");
      return;
    }

    try {
      const url = "http://127.0.0.1:5000/api/aiget"; // URL ของ API Flask
      const data = { text }; // ข้อมูลที่ต้องส่ง
      const method = "POST";

      // เรียก API ผ่าน apiCaller
      const response = await apiCaller(url, data, method);

      if (response) {
        // // รับไฟล์เสียงที่สร้างจาก API
        // const blob = new Blob([response], { type: "audio/mpeg" });
        // const audioUrl = URL.createObjectURL(blob);
        // const audio = new Audio(audioUrl);
        // audio.play(); // เล่นเสียง
        setMessage("ข้อความของคุณถูกแปลงเป็นเสียงเรียบร้อย!");
      }
    } catch (error) {
      setMessage("การแปลงข้อความเป็นเสียงล้มเหลว กรุณาลองอีกครั้ง.");
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Text-to-Speech</h1>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter your text here..."
        rows="5"
        cols="40"
        style={{ marginBottom: "10px", padding: "10px", fontSize: "16px" }}
      />
      <br />
      <button onClick={handleSendText} style={{ padding: "10px 20px" }}>
        Generate Speech
      </button>
      <p>{message}</p>
    </div>
  );
};

export default TextToSpeech;
