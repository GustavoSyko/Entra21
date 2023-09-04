

/*
Durante um surto de uma epidemia de um vírus nunca antes visto, vai ser necessário desenvolver uma vacina específica,
 e de acordo com a faixa etária, esta pessoa vai precisar de um número X de vacinas,
  desenvolva um programa que identifique o caso de cada paciente, onde ele se enquadra,
   e mostre a quantidade de vacinas necessárias para cada paciente, sabe-se que pessoas acima de 60 anos vão precisar de 4 doses,
    entre 40 e 60, 3 doses, de 18 à 40, 2 doses e abaixo dos 18, 1 dose, pergunte ao usuário se existem pessoas na fila ainda,
     se sim, faça o diagnóstico novamente e ao final do programa imprima o número total de pacientes e a quantidade total de doses
      necessárias para a clínica comprar

      */





// Fazer uma historia onde os pacientes vão estar em uma pandemia precisando de vacinas ,dependendo da 
// faixa etária ela vai se enquadrar em um caso, se for idoso= X vacinas


// declarando variaveis 

var menorIdade = 0
var jovem = 0
var adulto = 0
var idoso = 0

var vacinas = 0
var numPacientes = 1

// Receber os pacientes, e jogar o valor para cada local de acordo com a idade.
while (numPacientes != 2) {

    var idade = parseInt(prompt('Qual a idade da pessoa?'))
    // Se for menor de 18
    if (idade < 18) {
        menorIdade += 1
        vacinas += 1
    } // se for entre 18 e 40
    if (idade > 18 && idade <= 40) {
        jovem += 1
        vacinas += 2
    } // se for entre 40 e 60
    if (idade > 40 && idade <= 60) {
        adulto += 1
        vacinas += 3
    } // acima de 60
    if (idade > 60) {
        idoso += 1
        vacinas += 4
    }
    // perguntando se há mais pacientes
    numPacientes = prompt('Há mais pacientes?\n1-Sim\n2-Não')
    if (numPacientes == 2) {
        alert('Não há mais pacientes.')

        // Apresentar quantidade de pessoas, vacinas para cada um e número total de vacinas necessárias

    }
}

// apresentando 

alert(`O número de pessoas menores de idade é: ${menorIdade}\nO número de pessoas entre 18-40 anos é: ${jovem}\nO número de pessoas entre 40-60 anos é: ${adulto}\nO número de pessoas idosas é: ${idoso}`)

alert('sabe-se que pessoas acima de 60 anos vão precisar de 4 doses.\nEntre 40 e 60, 3 doses.\nDe 18 à 40, 2 doses.\nE abaixo dos 18, 1 dose.')
alert('Agora vamos saber quantas vacinas a clínica/hospital irá precisar')
alert(`O número total de vacinas necessárias é: ${vacinas}`)

