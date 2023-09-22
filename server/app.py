#!/usr/bin/env python3

from models import db, User, Show, Movie, Channel, ChannelShow, ChannelMovie, Genre
from flask_restful import Api, Resource
from flask_migrate import Migrate
from flask import Flask, make_response, jsonify, request
from flask_login import LoginManager, login_user, logout_user, current_user, login_required
from flask_cors import CORS
import bcrypt
import dotenv
import os
import requests

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DATABASE = os.environ.get(
    "DB_URI", f"sqlite:///{os.path.join(BASE_DIR, 'app.db')}")

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False
api = Api(app)
CORS(app, origins=["http://localhost:3000"])
dotenv.load_dotenv()
secret_key = os.getenv('SECRET_KEY_1')
api_key = os.getenv('API_KEY')
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
        user = User.query.filter(User.username == data['username']).first()
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
        hashed = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())
        user = User(username=username, password=hashed)
        db.session.add(user)
        db.session.commit()
        return make_response(({"message": "signup successful"}), 200)    
@app.route("/server/app")

class Lusers(Resource):
    def get(self):
        users = [user.to_dict()
                   for user in User.query.all()]
        return make_response(users, 200)


class Movies(Resource):
    def post(self):
        data = request.get_json()
        title = data["title"]
        rating = data["rating"]
        synopsis = data["synopsis"]
        year = data["year"]
        movie = Movie(title=title, rating=rating, synopsis=synopsis, year=year )
        db.session.add(movie)
        db.session.commit()
        return make_response(({"message": "Movie add was successful"}), 200)   \

class Channels(Resource):
    def get(self):
        channels = [channel.to_dict()
                   for channel in Channel.query.all()]
        return make_response(channels, 200)
    def post(self):
        data = request.get_json()
        vidurl = data["vidurl"]
        imgurl = data["imgurl"]
        title = data["title"]
        channel = Channel(vidurl=vidurl,imgurl=imgurl,title=title )
        db.session.add(channel)
        db.session.commit()
        return make_response(({"message": "Channel add was successful"}), 200)

class ChannelById(Resource):
    def delete(self, id):
        channel = Channel.query.filter(Channel.id == id).first()

        if channel is None:
            return make_response({"error": "Channel not found"},404)
        
        db.session.delete(channel)
        db.session.commit()
        return make_response({},204)

class Genres(Resource):
    def post(self):
        data = request.get_json()
        theme = data["theme"]
        genre = Genre(theme=theme)
        db.session.add(genre)
        db.session.commit()
        return make_response(({"message": "Genre add was successful"}), 200)
    
    def get(self):
        themes = [theme.to_dict()
                   for theme in Genre.query.all()]
        return make_response(themes, 200)
class Users(Resource):



    def get(self):

        url = "http://100.115.158.146:8096/Users?8f1cdb89c3614f5eb8254f01e31ee383"

        headers = {
        "Accept": "application/json",
        "Authorization": "MediaBrowser Token=8f1cdb89c3614f5eb8254f01e31ee383"

        }

        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            users = response.json()
            return make_response((users),200)
    
        else:
            print(response.status_code)


  

class Videos(Resource):
    def get(self):
        url = "http://100.115.158.146:8096/Videos/2578bc93048e3d85da6ef2c4cb250add/Stream"
        headers = {
            "Accept": "application/json",
            "Authorization": f"MediaBrowser Token={api_key}"
        }

        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            items = response.json()


            return make_response(items, 200)

        else:
            print("T-T", str(response.status_code))
class Items(Resource):
    def get(self):

        url = "http://100.115.158.146:8096/Items"

        headers = {
            "Accept": "application/json",
            "Authorization": f"MediaBrowser Token={api_key}"
        }

        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            items = response.json()


            return make_response(items, 200)

        else:
            print("T-T", str(response.status_code))

class Libraries(Resource):

    def post(self):
        url = "http://100.115.158.146:8096/Libraries/Add"

        json_body = {
            "Name": "Films",
            "Paths": ["C:\\Users\\Domenique\\Videos\\Movies"],
            "Protocol": "SMB"
        }
        headers = {
            "Accept": "application/json",
            "X-Emby-Token": "MediaBrowser Token=08f1cdb89c3614f5eb8254f01e31ee383"
        }
        response = requests.post(url, headers=headers, json=json_body)

        if response.status_code == 201:

            media_library_id = response.json()["Id"]

            print(f"Media library added with ID: {media_library_id}")
        else:
            print(f"Error adding media library: {response.status_code}")

api.add_resource(Channels, "/channels")
api.add_resource(ChannelById, "/channels/<int:id>")
api.add_resource(Lusers, '/lusers')
api.add_resource(Login, '/login')
api.add_resource(Logout, '/logout')
api.add_resource(SignUp, '/signup')
api.add_resource(Movies, '/movies')
api.add_resource(Users, '/users')
api.add_resource(Items, '/items')
api.add_resource(Libraries, '/libraries')
api.add_resource(Videos, '/videos')
api.add_resource(Genres, '/genres')
if __name__ == '__main__':
    app.run(port=5555, debug=True)