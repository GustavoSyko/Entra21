// Faça um programa que recebe o salário de um colaborador e o reajuste
// segundo o seguinte critério, baseado no salário atual

// Salários até RS 280,00 aumento de 20% .

// Salários entre RS 280,00 e RS 700,00 aumento de 15% .

// Salários entre RS 700,00 e RS 1,500,00 aumento de 10% .

// Salários de RS 1500,00 em diante aumento de 5% Após o aumento ser realizado.

// Informe na tela os seguintes dados :

// O salário antes do reajuste
// O percentual de aumento aplicado
// O valor do aumento
// O novo salário, após o aumento



var salario = parseFloat(prompt('Digite o salário do colaborador. '))



if (salario <= 280) {
    document.write('<br>O salário antes do reajuste é: R$ ' + salario.toFixed(2))
    document.write('<br> O aumento será de 20% ')
    aumento = salario * 0.20 
    document.write('<br> O aumento ficou em: R$ ' + aumento.toFixed(2))
    salario = salario + aumento
    document.write('<br> O salario com o reajuste ficou em: R$ ' + salario.toFixed(2))

}
else if (salario > 280 && salario <= 700) {
    document.write('<br>O salário antes do reajuste é: R$ ' + salario.toFixed(2))
    document.write('<br> O aumento será de 15% ')
    aumento = salario * 0.15 
    document.write('<br> O aumento ficou em: R$ ' + aumento.toFixed(2))
    salario = salario + aumento
    document.write('<br> O salario com o reajuste ficou em: R$ ' + salario.toFixed(2))

}
else if (salario > 700 && salario <= 1500) {
    document.write('<br>O salário antes do reajuste é:R$ ' + salario.toFixed(2))
    document.write('<br> O aumento será de 10% ')
    aumento = salario * 0.10 
    document.write('<br> O aumento ficou em: R$ ' + aumento.toFixed(2))
    salario = salario + aumento
    document.write('<br> O salario com o reajuste ficou em: R$ ' + salario.toFixed(2))

}
else if (salario > 1500) {
    document.write('<br>O salário antes do reajuste é: R$ ' + salario.toFixed(2))
    document.write('<br> O aumento será de 5% ')
    aumento = salario * 0.05 
    document.write('<br> O aumento ficou em: R$ ' + aumento.toFixed(2))
    salario = salario + aumento
    document.write('<br> O salario com o reajuste ficou em: R$ ' + salario.toFixed(2))

}

else {
window.alert('O salário não foi informado! ')
}
