window.addEventListener('DOMContentLoaded', () => {
  fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data => {
   const completadas = data.filter(tarea => tarea.completed === true); 
    });
});