const sensorButtons = document.querySelectorAll('button');

sensorButtons.forEach(boton => {
    boton.addEventListener('click', () => {
      console.log(`Enviando Alarma: ${boton.id}`);
      sendActiveSensor(boton.id);
    });
});

function sendActiveSensor(idSensor) {
  fetch(`http://localhost:3000/sensores/${idSensor}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al enviar la solicitud');
      }
      return response.json();
    })
    .then(data => {
      console.log('Respuesta del backend:', data);
    })
    .catch(error => {
      console.error(error);
    });
}