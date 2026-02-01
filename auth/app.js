const express = require('express');
const app = express();

app.get('/login', (req, res) => {
  res.json({ message: 'Usuario autenticado (simulado)' });
});

app.listen(4000, () => {
  console.log('Auth service en puerto 4000');
});