var precoKg        = parseFloat(prompt("Informe o preço por Kg"));
var pesoRegistrado = parseFloat(prompt("Informe o peso registrado (em gramas)"));

// Calcular a valor a pagar
var valorPagar = (precoKg * (pesoRegistrado / 1000));

// Exibir o resultado
document.writeln("Preço por Kg.: R$ " + precoKg.toFixed(2));
document.writeln("Valor a Pagar: R$ " + valorPagar.toFixed(2));