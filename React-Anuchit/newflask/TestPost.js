const handleSignup = async () => {
    const url = "http://127.0.0.1:5000/api/signup"; // URL ของ Flask API
    const payload = {
      username: "testuser",
      password: "password123",
    };
  
    try {
      const response = await fetch(url, {
        method: "POST", // ใช้ HTTP Method POST
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      if (response.ok) {
        const result = await response.json();
        console.log("Success:", result);
      } else {
        const error = await response.json();
        console.error("Error:", error);
      }
    } catch (error) {
      console.error("Error in fetch:", error);
    }
  };
  