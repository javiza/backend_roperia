
create database ctd2;
select * from video;
create table usr(
id serial PRIMARY KEY , name VARCHAR(100) NOT NULL, email VARCHAR(50) UNIQUE NOT NULL,
phone VARCHAR(12) UNIQUE, password VARCHAR(50) NOT NULL, photo VARCHAR(500)
);


create table admin(
id serial PRIMARY KEY, name VARCHAR(100) NOT NULL, email VARCHAR(50) UNIQUE NOT NULL,
phone VARCHAR(12) UNIQUE, password VARCHAR(10) NOT NULL, photo VARCHAR(500)
);

drop table admin;


create table clickcount(id serial, number_click INT,
id_user INT NOT NULL,
FOREIGN KEY(id_user) REFERENCES usr(id));

CREATE TABLE favorite (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES usr(id),
  video_id INT NOT NULL REFERENCES video(id),
  date_agregate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
select * from favorite;
CREATE TABLE video (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  description TEXT,
  duration INT NOT NULL,
  date_publication TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  route_archive VARCHAR(255) NOT NULL,
  user_id INT NOT NULL REFERENCES usr(id)
);

CREATE TABLE view (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES usr(id),
  video_id INT NOT NULL REFERENCES video(id),
  date_view TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE notification(
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES usr(id),
  message TEXT,
  read BOOLEAN DEFAULT false,
  date_send TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE trash (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES usr(id),
  notification_id INT NOT NULL REFERENCES notification(id)
);





