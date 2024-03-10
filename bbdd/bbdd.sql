-- Database: ctd_celula

-- DROP DATABASE IF EXISTS ctd_celula;

CREATE DATABASE ctd_celula;
 
	-- Crear tabla "usuarios"
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  correo VARCHAR(100) NOT NULL UNIQUE,
  contrasena VARCHAR(100) NOT NULL,
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  foto VARCHAR(255)
);

-- Crear tabla "videos"
CREATE TABLE videos (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  descripcion TEXT,
  duracion INT NOT NULL,
  fecha_publicacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ruta_archivo VARCHAR(255) NOT NULL,
  ussuario_id INT NOT NULL REFERENCES usuario(id)
  
);
INSERT INTO videos(
  titulo,descripcion,duracion,ruta_archivo, ussuario_id)
   values('titanic','barco que se hunde en medio del atlantico polar',255, 'http://video.com', 4
  );
-- Crear tabla "favoritos"
CREATE TABLE favoritos (
  id SERIAL PRIMARY KEY,
  usuario_id INT NOT NULL REFERENCES usuario(id),
  video_id INT NOT NULL REFERENCES videos(id),
  fecha_agregado TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla "vistas"
CREATE TABLE vistas (
  id SERIAL PRIMARY KEY,
  usuario_id INT NOT NULL REFERENCES usuario(id),
  video_id INT NOT NULL REFERENCES videos(id),
  fecha_vista TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla "notificaciones"
CREATE TABLE notificaciones (
  id SERIAL PRIMARY KEY,
  usuario_id INT NOT NULL REFERENCES usuario(id),
  mensaje TEXT,
  leido BOOLEAN DEFAULT false,
  fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla "admin"
CREATE TABLE admin (
  id SERIAL,
  nombre VARCHAR(50) NOT NULL,
  contrasena VARCHAR(100) NOT NULL
);
CREATE TABLE clickcount(
id SERIAL PRIMARY KEY,
nombre VARCHAR(25) NOT NULL,
usuario_id INT NOT NULL,
number_click INT,
FOREIGN KEY (usuario_id) REFERENCES usuario(id));