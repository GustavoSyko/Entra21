var salarioPessoa  = parseFloat(prompt('Informe o salário atual da pessoa: '))
var cargoPessoa    = parseInt(prompt('Informe o cargo da pessoa: '))
var vlrReajuste = 0
var novoSalario = 0
var percReajuste = 0
var descCargo = "";

switch (cargoPessoa) {
    case 1: percReajuste = 0.5;
            descCargo = "Serviços Gerais";
            break;
    case 2: percReajuste = 0.3;
            descCargo = "Vigia";
            break;
    case 3: percReajuste = 0.25;
            descCargo = "Recepcionista";
            break;
    case 4: percReajuste = 0.15;
            descCargo = "Vendedor";
            break;
}
vlrReajuste = salarioPessoa * percReajuste;
novoSalario = salarioPessoa + vlrReajuste;
document.write("Cargo...........: " + cargoPessoa + " - " + descCargo + "\n");
document.write("Reajuste........: " + vlrReajuste + "\n");
document.write("Salário Novo....: " + novoSalario + "\n");