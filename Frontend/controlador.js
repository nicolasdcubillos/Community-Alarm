const botones = document.querySelectorAll('button');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
      console.log(`Sensor activado: ${boton.id}`);
    });
});