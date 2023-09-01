var notaAluno = 0, somaNotas = 0, freqAluno = 0;
var contaNotas = 1;

freqAluno = parseFloat(prompt('Informe a frequência do aluno: '))

if (freqAluno < 80) {
    window.alert('Aluno reprovado por frequência')
}

else {
    while (contaNotas <= 3) {
        notaAluno = parseFloat(prompt('Informa a nota do aluno: '))
        somaNotas += notaAluno;
        contaNotas++;
    }
}
// Encerra o laço de repetição e calcula a média do aluno

mediaAluno = somaNotas / 3

if (mediaAluno >= 7.5) {
    window.alert('Aluno **APROVADO** - Média = ' + mediaAluno.toFixed(2))
}
else {
    window.alert('Aluno **REPROVADO** - Média = ' + mediaAluno.toFixed(2))
}