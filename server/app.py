#!/usr/bin/env python3

from models import db, User, TvShow, Movie, Channel, ChannelShow, ChannelMovie
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask import Flask, make_response, jsonify, request
from flask_login import LoginManager, login_user, logout_user, current_user, login_required
from flask_bcrypt import Bcrypt
import dotenv
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
bcrypt = Bcrypt(app)
api = Api(app)
dotenv.load_dotenv()
secret_key = os.getenv('SECRET_KEY_1')

migrate = Migrate(app, db)

db.init_app(app)

login_manager = LoginManager()
login_manager.init_app(app)

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class Login(Resource):
    def post(self):
        data = request.get_json()
        user = User.query.filter_by(User.username == data['username']).first()
        if not user:
            return make_response(({"error": "username not found"}), 404)
        password = data['password']
        if bcrypt.checkpw(password.encode('utf-8'), user.password):
            login_user(user)
            return make_response(({"message": "login successful"}), 200)

class Logout(Resource):
    def post(self):
        logout_user()
        return make_response(({"message": "logout successful"}), 200)

class SignUp(Resource):
    def post(self):
        data = request.get_json()
        username = data["username"]
        password = data["password"]
        hashed = bcrypt.hashpw(password.encode("utf8"), bcrypt.gensalt())
        user = User(username=username, password=hashed)
        db.session.add(user)
        db.session.commit()
        return make_response(({"message": "signup successful"}), 200)    
@app.route("/server/app")
def wow():
    pass

api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')
api.add_resource(SignUp, '/signup')
if __name__ == '__main__':
    app.run(port=5555, debug=True)