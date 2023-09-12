/*
   A escola Barão da Barba Branca precisa desenvolver uma rotina que permita que
   sejam calculadas as médias dos alunos de um curso específico. O que se sabe é
   que há 10 alunos na turma e 4 avaliações para cada aluno, e que a frequência de
   cada aluno deve ser informada.
*/


var alunos = [], freqAlunos = []

  // pegando todos os nomes e as frequências

for (let i = 1; i <= 10; i++) {
    let nome = prompt('Qual nome do aluno ' + i + ' ?')
    alunos.push(nome)
    let frequencia = prompt('Qual a frequência do aluno? (Em porcentagem) ')
    freqAlunos.push(frequencia)
}

  // loop para pegar as notas 
for (var a = 0; a < freqAlunos.length; a++) {
    
   // pegar as notas somente dos que tiveram frequência acima de 75% 
    if (freqAlunos[a] > 75) {

        // zerar sempre que for um novo aluno
        var somaNotas = 0


           // fazendo loop para pegar notas e adicionar na variavel somaNotas 
        for (let i = 1; i < 5; i++) {
            notas = parseFloat(prompt(`Qual a ${i}º nota do aluno ${alunos[a]}?`))
            somaNotas += notas


            // já imprimindo o resultado das notas 
            document.write(`${i}º Nota do ${alunos[a]}: ${notas} .<br> `)
        }


        // Calculo das notas, e condição para saber o resultado
        let media = somaNotas / 4

        if (media < 5.5 && freqAlunos[a] > 75) {
            alert(`Aluno ${alunos[a]} reprovado, frequência de: ${freqAlunos[a]}%, nota média: ${media}. `)
        }

        if (media > 5 && somaNotas < 7.5 && freqAlunos[a] > 75) {
            alert(`O aluno ${alunos[a]} teve frequência de: ${freqAlunos[a]}%, ficou em recuperação com a nota: ${media}. `)
        }

        if( media > 7.5 && freqAlunos[a] > 75){
            alert(`O aluno ${alunos[a]} teve frequência de: ${freqAlunos[a]}%, foi aprovado com nota média de: ${media}. `)
        }
    }

    else {
        alert(`O aluno ${alunos[a]} reprovou por frequência e não será contabilizado. Frequência: ${freqAlunos[a]}%.`)

    }
}





















/*

    if (medias < 5.5) {
        document.write(`Aluno ${nome} reprovado, média ${medias}`)
    }
    if (medias > 5 && medias < 7.5) {
        document.write(`Aluno ${nome} em recuperação, média ${medias}`)
    }
    if (medias > 7.5) {
        document.write(`Aluno ${nome} aprovado, média ${medias}`)
    }
}
    else {
    document.write('Aluno reprovado por frequência ')
}
}
*/