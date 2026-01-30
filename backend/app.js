const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'backend' });
});

app.get('/data', (req, res) => {
  res.json({ message: 'Datos desde el backend' });
});

app.listen(3000, () => {
  console.log('Backend ejecutándose en puerto 3000');
});
