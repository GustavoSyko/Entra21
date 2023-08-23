var precoKg = parseFloat(prompt('Informe o preço por Kg'));
var pesoRegistrado = parseFloat(prompt('Informe o peso registrado(em gramas)'));

// calcular o valor a pagar
var valorPagar = (precoKg * (pesoRegistrado / 1000));

// Exibir o resultado
document.writeln('Preço por kg.: R$' + precoKg.toFixed(2)+"<br>");
document.writeln('Valor a pagar: R$' + valorPagar.toFixed(2)+"<br>");

// trocar ponto por vírgula
document.writeln(precoKg.toFixed(2).replace('.', ',')+'<br>')

// mostrar real
document.write(precoKg.toLocaleString('pt-BR', {style: 'currency' ,currency:'BRL'})+'<br>')
document.write(precoKg.toLocaleString('pt-BR', {style: 'currency' ,currency:'EUR'})+'<br>')
document.write(precoKg.toLocaleString('pt-BR', {style: 'currency' ,currency:'USD'})+'<br>')