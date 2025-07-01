const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const operacion = document.getElementById('operacion');
const calcularBtn = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

function verificarDivisionPorCero() {
  const op = operacion.value;
  const n2 = parseFloat(numero2.value);

  if (op === "division" && n2 === 0) {
    calcularBtn.disabled = true;
  } else {
    calcularBtn.disabled = false;
  }
}

operacion.addEventListener("change", verificarDivisionPorCero);
numero2.addEventListener("input", verificarDivisionPorCero);

calcularBtn.addEventListener("click", () => {
  const n1 = parseFloat(numero1.value);
  const n2 = parseFloat(numero2.value);
  let res = 0;

  if (operacion.value === "suma") {
    res = n1 + n2;
  } else if (operacion.value === "resta") {
    res = n1 - n2;
  } else if (operacion.value === "multiplicacion") {
    res = n1 * n2;
  } else if (operacion.value === "division") {
    res = n1 / n2;
  }

  resultado.textContent = "Resultado: " + res;
});
