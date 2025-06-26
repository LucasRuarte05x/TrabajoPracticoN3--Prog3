const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const operacion = document.getElementById('operacion');
const calcularBtn = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

operacion.addEventListener('change', function () {
  if (operacion.value === 'dividir') {
    calcularBtn.disabled = true;
  } else {
    calcularBtn.disabled = false;
  }
});

calcularBtn.addEventListener('click', function () {
  const valor1 = parseFloat(numero1.value);
  const valor2 = parseFloat(numero2.value);
  let res = '';

  switch (operacion.value) {
    case 'sumar':
      res = valor1 + valor2;
      break;
    case 'restar':
      res = valor1 - valor2;
      break;
    case 'multiplicar':
      res = valor1 * valor2;
      break;
    default:
      res = 'Operación no válida';
  }

  resultado.textContent = res;
});