document.addEventListener('DOMContentLoaded', () => {
  const botones = document.querySelectorAll('.menu-btn');
  const secciones = document.querySelectorAll('.seccion');

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      // 1. Quitar clase 'active' de todos los botones
      botones.forEach(btn => btn.classList.remove('active'));
      
      // 2. Activar el botón presionado
      boton.classList.add('active');

      // 3. Ocultar todas las secciones
      secciones.forEach(sec => sec.classList.remove('activa'));

      // 4. Mostrar únicamente la sección vinculada al data-target
      const idObjetivo = boton.getAttribute('data-target');
      const seccionMostrar = document.getElementById(idObjetivo);
      if (seccionMostrar) {
        seccionMostrar.classList.add('activa');
      }
    });
  });
});