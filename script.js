function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return "Error: Dividiste por cero!";
  }
  return a / b;
}

function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Ingresaste valores invalidos!";
    }

    if (operacion === "sumar") {
        resultado = add(num1, num2);
    }
    else if (operacion === "restar") {
        resultado = substract(num1, num2);
    }
    else if (operacion === "multiplicar") {
        resultado = multiply(num1, num2);
    }
    else if (operacion === "dividir") {
        resultado = divide(num1, num2);
    }
    document.getElementById("resultado").innerText = resultado;
}