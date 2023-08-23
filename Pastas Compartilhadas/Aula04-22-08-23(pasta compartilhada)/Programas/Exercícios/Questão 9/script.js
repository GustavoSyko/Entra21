var valorCompra = parseFloat(prompt("Digite o valor da compra:"));

if (valorCompra > 100) {
  valorCompra -= valorCompra * 0.1;
}

document.write("Valor com desconto: R$", valorCompra.toFixed(2));
