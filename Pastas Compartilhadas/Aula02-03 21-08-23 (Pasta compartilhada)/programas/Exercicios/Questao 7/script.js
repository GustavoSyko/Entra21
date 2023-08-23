let salarioFuncionario = prompt("Digite o salário do funcionário: ");

// calcular o reajuste
let reajusteSalario    = +salarioFuncionario * 0.15;

// calcular o novo salário
let novoSalario = +salarioFuncionario + +reajusteSalario;

// mostrar o novo salário
document.write("O novo salário do funcionário é " + novoSalario);