from flask import Flask, request, render_template_string

app = Flask(__name__)

# HTML Template
login_page = """
<!DOCTYPE html>
<html>
<head>
    <title>Login Page</title>
</head>
<body>
    <h2>Login</h2>
    <form method="POST" action="/login">
        Username: <input type="text" name="username" required><br>
        Password: <input type="password" name="password" required><br>
        <input type="submit" value="Login">
    </form>
</body>
</html>
"""

@app.route("/", methods=["GET"])
def home():
    return render_template_string(login_page)

@app.route("/login", methods=["POST"])
def login():
    username = request.form.get("username")
    password = request.form.get("password")

    # ตรวจสอบข้อมูล
    if username == "admin" and password == "password123":
        return "ยินดีต้อนรับ, Admin!"
    else:
        return "Username หรือ Password ไม่ถูกต้อง", 401

if __name__ == "__main__":
    app.run(debug=True)
