/*

2023-08-23

Exercícios de Laço de Repetição


Desenvolva uma aplicação que permita informar 
as notas das avaliações de dois alunos.
Cada aluno tem duas avaliações.
Calcule a média e informe se está aprovado ou reprovado.
Aprovado  -> média >= 7
Reprovado -> média < 7

*/


// ------------- ESTRUTURA FOR ------------ 

// Variavel para controlar qtde de alunos

var notaAluno, acumNotas, nomeAluno;
var qtdNotas;


// Laço para controlar leitura de alunos
// enquanto os alunos forem menor ou igual a 2, fazer estas instruções



for (var qtdAlunos = 1; qtdAlunos <= 2; qtdAlunos++) {
    nomeAluno = prompt('Informe o nome do ' + qtdAlunos + " º aluno ");
    qtdNotas = 1;
    acumNotas = 0.0
    // enquanto tiver menos ou igual a 2 notas, fazer estas instruções
    for (var qtdNotas = 1; qtdNotas <= 2; qtdNotas++) {
        notaAluno = parseFloat(prompt('Informe a nota ' + qtdNotas + ' do aluno ' + nomeAluno))
       
        acumNotas = acumNotas + notaAluno;


    }

    // Exibir Média com alerta
    window.alert('A média do ' + qtdAlunos + 'º aluno é ' + acumNotas / 2)

    mediaAluno = acumNotas / 2;

    if (mediaAluno >= 7) {
        window.alert('Aluno aprovado com média ' + mediaAluno + ' .')
    }
    else {
        window.alert('Aluno reprovou com média ' + mediaAluno + ' .')
    }

    // Passa para o proximo aluno
   
}




// ----------- ESTRUTURA WHILE ----------


/*

// Variavel para controlar qtde de alunos

var qtdAlunos = 1, qtdNotas = 1, notaAluno = parseFloat(0.0), acumNotas = parseFloat(0.0); 
var nomeAluno;


// Laço para controlar leitura de alunos
// enquanto os alunos forem menor ou igual a 2, fazer estas instruções

while ( qtdAlunos <= 2) {
    nomeAluno = prompt('Informe o nome do ' + qtdAlunos + " º aluno ");
    qtdNotas = 1;
    acumNotas = 0.0
    // enquanto tiver menos ou igual a 2 notas, fazer estas instruções
    while (qtdNotas <= 2) {
        notaAluno = parseFloat(prompt('Informe a nota ' + qtdNotas + ' do aluno ' + nomeAluno))
        qtdNotas++;
        acumNotas = acumNotas + notaAluno;


    }

    // Exibir Média com alerta
    window.alert('A média do ' + qtdAlunos + 'º aluno é ' + acumNotas / 2)

    mediaAluno = acumNotas / 2;

    if (mediaAluno >= 7) {
        window.alert('Aluno aprovado com média ' + mediaAluno + ' .')
    }
    else {
        window.alert('Aluno reprovou com média ' + mediaAluno + ' .')
    }

    // Passa para o proximo aluno
    qtdAlunos++;
}

*/