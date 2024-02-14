create database dbtravel_280;
use dbtravel_280;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin123';


CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email varchar(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(255) NOT NULL
);


CREATE TABLE posts (
id INT auto_increment PRIMARY KEY,
title varchar(255) not null,
descr VARCHAR(255) not null,
img VARCHAR(255) NOT NULL,
travelDate datetime ,
returnDate datetime,
uId INT NOT NULL,
category VARCHAR(255),
FOREIGN KEY (uId) REFERENCES users(id)
);

INSERT INTO posts(title, descr, img, travelDate, returnDate, category, uId) values
('5 noćenja u Francuskoj','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
"https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
'2024-02-10 12:00:00',
'2024-02-20 12:00:00',
'Europa',
6
);


INSERT INTO posts(title, descr, img, travelDate, returnDate, category, uId) values
('7 noćenja u Budimpešti','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
"https://images.pexels.com/photos/73796/budapest-hungary-parliament-building-73796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
'2024-04-05 12:00:00',
'2024-04-12 12:00:00',
'Europa',
6
);

INSERT INTO posts(title, descr, img, travelDate, returnDate, category, uId) values
('10 noćenja u Veneciji','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
"https://images.pexels.com/photos/18969581/pexels-photo-18969581/free-photo-of-canal-grande-and-santa-maria-della-salute-in-venecia-italy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
'2024-05-10 12:00:00',
'2024-05-20 12:00:00',
'Europa',
6
);

INSERT INTO posts(title, descr, img, travelDate, returnDate, category, uId) values
('Maldivi','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
"https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
'2024-05-20 12:00:00',
'2024-05-30 12:00:00',
'Ljetovanja',
6
);


INSERT INTO posts(title, descr, img, travelDate, returnDate, category, uId) values
('Egypt','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
"https://images.pexels.com/photos/931881/pexels-photo-931881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
'2024-06-20 12:00:00',
'2024-06-30 12:00:00',
'Daleka',
6
);




