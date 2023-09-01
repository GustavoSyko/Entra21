/*
Faça um programa que alimente um vetor, com um número de posições definidas pelo
usuário. Este vetor deverá armazenar um conjunto de nomes em diferentes posições.
Crie um mecanismo para alimentar elementos no vetor e pesquisar por um valor
existente
*/



var nome = []
var op = 1

while (op != 0) {
    op = parseInt(prompt('---------MENU---------\n'
        + '1) Cadastras Nome\n'
        + '2) Pesquisar Nome\n'
        + '3) Listar todos os Nomes\n'
        + '0) Sair do programa\n'))

    if (op == 1) {
        var nomeCad = parseInt(prompt('Informe a quantidade de nomes'))
        for (let index = 0; index < nomeCad; index++) {
            nome[index] = promp('Informe um nome: ');
        }
    }
    else if (op == 2) {
        var procuraNome = prompt('Qual nome quer procurar? ')
        for (let index = 0; index < nome.length; index++) {
            if (nome[index] == procuraNome) {
                alert('Encontrou o nome: ' + procuraNome)
            }
        }
    }
}

