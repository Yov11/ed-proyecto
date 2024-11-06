import time
import datetime
import jwt
from flask import Flask, request, jsonify
from werkzeug.security import check_password_hash
from database import get_user_from_db
from auth_utils import token_required
import config  # Importa el archivo de configuración


app = Flask(__name__)
app.config['SECRET_KEY'] = config.SECRET_KEY
@app.route('/time')
def get_current_time():
    return {'time': time.time()}

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    
    # Aquí, busca al usuario en la base de datos
    user = get_user_from_db(username)
    
    if user and check_password_hash(user['password_hash'], password):
        token = jwt.encode({
            'username': username,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=1)
        }, app.config['SECRET_KEY'], algorithm="HS256")
        return jsonify({'token': token})

    return jsonify({'message': 'Credenciales inválidas'}), 401

@app.route('/protected-route', methods=['GET'])
@token_required
def protected_route():
    return jsonify({'message': 'Acceso autorizado a ruta protegida'})