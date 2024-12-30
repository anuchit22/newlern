from flask import Flask
import pymysql


app = Flask(__name__)  # แก้ _name_ เป็น __name__
conn=pymysql.connect('localhost','root','','newlern')


@app.route("/")
def hello():
    return "Hello, world!"

if __name__ == "__main__":  # แก้ _main_ เป็น __main__ __
    app.run(debug=True)



# from flask import Flask, request, jsonify

# app = Flask(__name__)

# @app.route('/login', methods=['POST'])
# def login():
#     data = request.json  # รับข้อมูล JSON จาก React
#     username = data.get('username')  # ดึงตัวแปร username
#     password = data.get('password')  # ดึงตัวแปร password

#     # ตัวอย่าง: ตรวจสอบข้อมูล
#     if username == "admin" and password == "1234":
#         return jsonify({"message": "Login successful!"}), 200
#     else:
#         return jsonify({"message": "Invalid credentials!"}), 401

# if __name__ == "__main__":
#     app.run(debug=True)
 

