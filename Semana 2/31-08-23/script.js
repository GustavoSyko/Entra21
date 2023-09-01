var notaAluno = 0, somaNotas = 0;
var contaNotas = 1;

while (contaNotas <= 3) {
    notaAluno = parseFloat(prompt('Informe a nota do aluno: '))
    somaNotas += notaAluno
    // Outra forma de somar as notas
    // somaNotas = somaNotas + notaAluno;

    contaNotas++
}

// Encerra o laço de repetição e calcula a média do aluno 
mediaAluno = somaNotas / 3
document.write('A média do aluno é : ' + mediaAluno)

// A média ficou com uma apresentação ruim. Então vamos utilizar toFixed(2)
// para fixar como 2 decimais e asssim arredondar o valor 

document.write('A média do aluno é : ' + mediaAluno.toFixed(2))