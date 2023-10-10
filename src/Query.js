const { Client } = require('pg');

const client = new Client({
  user: 'tu_usuario',
  host: 'localhost',
  database: 'tu_base_de_datos',
  password: 'tu_contraseña',
  port: 5432,
});

client.connect();

const nombre = 'Nombre del contacto';
const telefono = 'Número de teléfono';
const email = 'correo@ejemplo.com';
const mensaje = 'Mensaje opcional';

const query = 'INSERT INTO contactos (nombre, telefono, email, mensaje) VALUES ($1, $2, $3, $4)';
const values = [nombre, telefono, email, mensaje];

client.query(query, values, (err, res) => {
  if (err) {
    console.error('Error al insertar en la base de datos:', err);
  } else {
    console.log('Datos insertados con éxito');
  }
  client.end();
});