DROP DATABASE IF EXISTS chartz_user_db;

CREATE DATABASE chartz_user_db;

\c chartz_user_db

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30),
    password VARCHAR(50)
);

CREATE TABLE saved_song (
    id SERIAL PRIMARY KEY,
    apiPath VARCHAR(100)
);

CREATE TABLE user_songs (
    userId INT NOT NULL,
    songId INT NOT NULL,
    FOREIGN KEY (userId)
    REFERENCES users(id)
    ON DELETE CASCADE
    FOREIGN KEY (songId)
    REFERENCES saved_song(id)
    ON DELETE CASCADE
);