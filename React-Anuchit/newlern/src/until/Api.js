// utils/apiCaller.js

/**
 * Function สำหรับส่งข้อมูลไปยัง Backend
 * @param {string} url - URL ปลายทาง
 * @param {object} data - ข้อมูลที่ต้องการส่ง เช่น { username: 'test', password: '1234' }
 * @param {string} method - HTTP Method เช่น 'POST', 'GET', 'PUT', 'DELETE'
 * @returns {Promise} - Response จาก Backend
 */
export async function apiCaller(url, data, method = 'POST') {
    try {
        const response = await fetch(url, {
            method: method, // HTTP Method
            headers: {
                'Content-Type': 'application/json', // ระบุว่าเป็น JSON
            },
            body: method !== 'GET' ? JSON.stringify(data) : undefined, // ใส่ข้อมูลเฉพาะเมื่อไม่ใช่ GET
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status}`); // จัดการ error
        }

        return await response.json(); // แปลง response เป็น JSON
    } catch (error) {
        console.error('API call error:', error);
        throw error; // ส่งต่อ error เพื่อจัดการในจุดที่เรียกใช้
    }
}