const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());

app.get('/sensores/:id', (req, res) => {
  const itemId = req.params.id;
  console.log(itemId);
  res.json({ id: itemId, name: 'Sensor Activado' });
});

app.listen(3000, () => console.log('Servidor iniciado en el puerto 3000'));