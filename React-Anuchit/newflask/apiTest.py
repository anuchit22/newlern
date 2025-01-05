from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
import pymysql

app = Flask(__name__)
CORS(app)  # ตั้งค่า CORS ให้รองรับการร้องขอจาก React



# def insertSignup(username, password):
#     db_config = {
#         "host": "localhost",
#         "user": "root",
#         "password": "",
#         "database": "newlern"
#     }
    
#     # เชื่อมต่อฐานข้อมูล
#     conn = pymysql.connect(**db_config)
#     with conn.cursor() as cur:
#         # ดึงค่า id สูงสุดในตาราง
#         cur.execute("SELECT MAX(id) FROM `user`")
#         max_id = cur.fetchone()[0]
        
#         # กำหนด id ใหม่
#         new_id = (max_id + 1) if max_id is not None else 1
        
#         # เพิ่มข้อมูลลงในตาราง
#         sql = "INSERT INTO `user` (`id`, `username`, `password`) VALUES (%s, %s, %s)"
#         cur.execute(sql, (new_id, username, password))
#         conn.commit()
    
#     return "Data inserted successfully"


# def selectLogin(username, password):
#     db_config = {
#         "host": "localhost",
#         "user": "root",
#         "password": "",
#         "database": "newlern"
#     }

#     try:
#         # เชื่อมต่อฐานข้อมูล
#         conn = pymysql.connect(**db_config)
        
#         with conn.cursor() as cur:
#             # SQL สำหรับตรวจสอบ username และ password
#             sql = "SELECT * FROM `user` WHERE `username` = %s AND `password` = %s"
#             cur.execute(sql, (username, password))
            
#             # ดึงผลลัพธ์
#             result = cur.fetchone()
#             return result is not None  # คืนค่า True ถ้าพบข้อมูล
    
#     finally:
#         conn.close()

# ##################################################################################################################

# @app.route('/api/signup', methods=['GET', 'POST'])
# def signup():
#     data = request.get_json()
#     if not data:
#         return jsonify({"error": "No data provided"}), 400

#     username = data.get('username')
#     password = data.get('password')

#     if username == password:
#         return jsonify({"error": "Username and password cannot be the same"}), 401

#     # เรียกใช้ฟังก์ชัน insertSigup เพื่อบันทึกข้อมูลลงฐานข้อมูล
#     result = insertSignup(username, password)
#     return jsonify({"success": True, "message": result}), 200

# @app.route('/api/login', methods=['POST'])
# def login():
#     data = request.get_json()
#     if not data:
#         return jsonify({"error": "No data provided"}), 400

#     username = data.get('username')
#     password = data.get('password')

#     if not username or not password:
#         return jsonify({"error": "Username and password are required"}), 400

#     # เรียกใช้ selectLogin เพื่อตรวจสอบข้อมูล
#     is_valid = selectLogin(username, password)
#     if is_valid:
#         return jsonify({"success": True, "message": "Login successful"}), 200
#     else:
#         return jsonify({"success": False, "message": "Invalid username or password"}), 401



 ##############################  AI CONNECT PART   ##################################################

@app.route('/api/aiget', methods=['GET', 'POST'])
def aiconncet():
    aiget = request.get_json()
    print(aiget)
    return jsonify({"success": True}), 200

if __name__ == '__main__':
    app.run(debug=True)
