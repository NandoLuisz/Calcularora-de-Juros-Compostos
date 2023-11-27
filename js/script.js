const capitalInput = document.querySelector("#capital");
const jurosInput = document.querySelector("#juros");
const tempoInput = document.querySelector("#tempo");
const formCalc = document.querySelector("#login-form");
const resultado = document.querySelector("#resultado");

formCalc.addEventListener("submit", (event) => {
  event.preventDefault();

  const valueCapital = capitalInput.value;

  const valueJuros = jurosInput.value;

  const valueTempo = tempoInput.value;

  const calculado = calcularJuros(valueCapital, valueJuros, valueTempo);

  resultado.innerHTML = "R$ " + calculado.toFixed(2).replace(".", ",");
});

// Função para calculcar o juros composto

function calcularJuros(capital, juros, tempo) {
  const montante = capital * Math.pow(1 + juros / 100, tempo);

  return montante;
}
