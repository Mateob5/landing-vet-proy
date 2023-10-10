const { Client } = require('pg');

const client = new Client({
  user: '',
  host: '',
  database: '',
  password: '',
  port: 5432,
});

client.connect();

const nombre = '';
const telefono = '';
const email = '';
const mensaje = '';

const query = 'INSERT INTO contactos (nombre, telefono, email, mensaje) VALUES ($nombre, $telefono, $email, $mensaje)';
const values = [nombre, telefono, email, mensaje];

client.query(query, values, (err, res) => {
  if (err) {
    console.error('Error al insertar en la base de datos:', err);
  } else {
    console.log('Datos insertados con éxito');
  }
  client.end();
});