from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)
    # user_channels = db.relationship('Channel', backref='user')
    is_active = db.Column(db.Boolean, default=False)

class Channel(db.Model, SerializerMixin):
    __tablename__ = 'channels'

    id = db.Column(db.Integer, primary_key=True)
    vidurl = db.Column(db.String)
    imgurl = db.Column(db.String)
    title = db.Column(db.String)
    # movie = db.relationship("Movie", back_populates="movies")
    # show_id = db.relationship('ChannelShow', backref='channel')
    # movie_id = db.relationship('ChannelMovie', backref='channel')
    # user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

class ChannelShow(db.Model, SerializerMixin):
    __tablename__ = 'channel_shows'

    id = db.Column(db.Integer, primary_key=True)
    tv_id = db.Column(db.Integer, db.ForeignKey('shows.id'))
    channel_id = db.Column(db.Integer, db.ForeignKey('channels.id'))

class ChannelMovie(db.Model, SerializerMixin):
    __tablename__ = 'channel_movies'

    id = db.Column(db.Integer, primary_key=True)
    movie_id = db.Column(db.Integer, db.ForeignKey('movies.id'))
    channel_id = db.Column(db.Integer, db.ForeignKey('channels.id'))

class Show(db.Model, SerializerMixin):
    __tablename__ ='shows'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    date_added = db.Column(db.DateTime, default = db.func.now())
    season = db.Column(db.Integer)
    episode = db.Column(db.Integer)
    rating = db.Column(db.Integer)
    synopsis = db.Column(db.Text)
    release_date = db.Column(db.DateTime)
    year = db.Column(db.Integer)
    imdb_id = db.Column(db.Integer)
    genre = db.Column(db.String)
    people = db.Column(db.Text)

class Movie(db.Model, SerializerMixin):
    __tablename__ ='movies'

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    rating = db.Column(db.String)
    synopsis = db.Column(db.Text)
    year = db.Column(db.Integer)

class Genre(db.Model, SerializerMixin):
    __tablename__ = "genres"

    id = db.Column(db.Integer, primary_key=True)
    theme = db.Column(db.String)