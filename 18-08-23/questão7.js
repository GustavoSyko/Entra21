let salarioFuncionario = Number.parseFloat(prompt('Digite o salário do funcionario: '));

//calcular o reajuste
let reajusteSalario = +salarioFuncionario * 0.15;

//calcular o novo salário
let novoSalario = +salarioFuncionario + +reajusteSalario;

//mostrar o novo salario
document.write('O novo salário do funcionário é: ' + novoSalario.toFixed(2));