import pymysql


db_config = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "newlern"
}

# เชื่อมต่อฐานข้อมูล
conn = pymysql.connect(**db_config)
with conn.cursor() as cur:
    cur.execute("SELECT * FROM user")  # แก้ไขคำสะกดผิดจาก "selct" เป็น "SELECT"
    rows = cur.fetchall()
    print("Rows fetched:", rows)  # พิมพ์ข้อมูลใน Python Shell
conn.close()




# ส่งค่าผ่านฟังก์ชัน login


