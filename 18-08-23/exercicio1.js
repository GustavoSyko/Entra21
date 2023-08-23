//Escreva um programa que retorne o valor hora de um funcionário


var salario = parseFloat(prompt('Informe o salário: '));
var horasTrabalhadas = parseFloat(prompt('Informe as horas trabalhadas: '));

var valorHora = (salario / horasTrabalhadas);

window.alert('O valor da hora é:R$ '+ valorHora);