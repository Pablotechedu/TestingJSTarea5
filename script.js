// Función para guardar el nombre ingresado y mostrar el saludo
function saveName() {
  let userName = document.getElementById("name").value;
  document.getElementById("greeting").textContent = userName
    ? `¡Hola, ${userName}!`
    : "¡Hola!";
}

// Función para generar la predicción
function generatePrediction() {
  // Obtener la condición del clima
  let weatherCondition = document.getElementById("weather").value;
  document.getElementById(
    "weather-condition"
  ).textContent = `El clima hoy es: ${weatherCondition}`;

  // Mostrar en la consola la condición del clima ingresada
  console.log(`Condición del clima ingresada: ${weatherCondition}`);

  // Generar número aleatorio entre 0 y 5
  let randomPrediction = Math.floor(Math.random() * 6);

  // Asignar predicción según el número generado
  let prediction;
  switch (randomPrediction) {
    case 0:
      prediction = "Hoy será un día increíble, ¡disfrútalo!";
      break;
    case 1:
      prediction = "Mantente alerta, puede haber sorpresas inesperadas.";
      break;
    case 2:
      prediction = "Será un día productivo si te organizas bien.";
      break;
    case 3:
      prediction = "No dejes que los pequeños problemas arruinen tu día.";
      break;
    case 4:
      prediction = "Hoy es un buen día para probar algo nuevo.";
      break;
    case 5:
      prediction =
        "Confía en tu intuición, tomará las mejores decisiones por ti.";
      break;
  }

  // Mostrar predicción con mensaje de despedida
  document.getElementById(
    "prediction"
  ).textContent = `${prediction} ¡Que tengas un buen día!`;
}
