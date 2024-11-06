# database.py
from werkzeug.security import generate_password_hash

# Genera el hash una vez y almacénalo
hashed_password = generate_password_hash("mi_contraseña")

def get_user_from_db(username):
    fake_users_db = {
        'user1': {'username': 'user1', 'password_hash': hashed_password}
    }
    return fake_users_db.get(username)