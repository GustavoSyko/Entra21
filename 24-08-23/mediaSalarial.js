do {

    var qtdFuncionario = parseInt(prompt('Informe a quantidade de funcionários: '))
    var qtdAumento = parseInt(prompt('Informe quantos reajustes deseja cadastrar: '))
    var somaAumento = 0
    for (i = 1; i <= qtdFuncionario; i++) {
        var nomeFuncionario = prompt('Nome funcionário: ')
        document.write('Funcionário: ' + nomeFuncionario+'\n')
        // Recebe o valor dos aumentos
        for (x = 1; x <= qtdAumento; x++) {
            var aumento = parseFloat(prompt('Informe o valor do aumento em $: '))
            document.write('O aumento foi de: R$ ' + aumento.toFixed(2))
            // Soma de todos os aumentos
           somaAumento = somaAumento + aumento
        }
    }
    // Calcula a media pegando a soma de todos os aumentos e dividindo 
    // Pela quantidade de funcionários
    var media = somaAumento / (qtdAumento * qtdFuncionario);

    // Cria alerta na tela da media de aumento de todos 
    document.write('A média de aumento foi: R$ ' + media.toFixed(2))

    // Condição para continuar ou parar
    op = prompt('Deseja cadastrar mais funcionários? \n -Sim \n -Não');
    // Convertendo o valor digitado em letras minúsculas
    op = op.toLowerCase();
}
// Enquanto a condição for verdadeira, continuar o loop
while (op === 'sim');