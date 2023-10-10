-- Creacion de la base de datos
CREATE DATABASE proypagvet;

USE proypagvet;

-- Definición de la tabla "contactos"
CREATE TABLE contactos (
  id serial PRIMARY KEY,
  nombre varchar(80),
  telefono varchar(40),
  email varchar(80),
  mensaje TEXT,
  created_at timestamp
);

-- Definición de la tabla "usuarios"
CREATE TABLE usuarios (
  id serial PRIMARY KEY,
  nombre varchar(80),
  telefono varchar(40),
  email varchar(80),
  rol varchar(20)
);

-- Definición de la tabla "servicios"
CREATE TABLE servicios (
  id serial PRIMARY KEY,
  nom_servicio varchar(80),
  descripcion varchar(255),
  precio_hora int
);

-- Definición de la tabla "publicaciones"
CREATE TABLE publicaciones (
  id serial PRIMARY KEY,
  titulo varchar(80),
  informacion varchar(255),
  autor varchar(40),
  fecha timestamp
);

-- Definición de la tabla "usuarios_servicios"
CREATE TABLE usuarios_servicios (
  id_usuario int REFERENCES usuarios(id),
  id_servicio int REFERENCES servicios(id),
  horas_contratadas int,
  PRIMARY KEY (id_usuario, id_servicio)
);

-- Definición de la tabla "usuarios_contactos"
CREATE TABLE usuarios_contactos (
  id_usuario int REFERENCES usuarios(id),
  id_contacto int REFERENCES contactos(id),
  PRIMARY KEY (id_usuario, id_contacto)
);

-- Definición de la tabla "usuarios_publicaciones"
CREATE TABLE usuarios_publicaciones (
  id_usuario int REFERENCES usuarios(id),
  id_publicacion int REFERENCES publicaciones(id),
  PRIMARY KEY (id_usuario, id_publicacion)
);