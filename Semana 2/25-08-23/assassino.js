/*
 Faça um programa que faça 5 perguntas para uma pessoa sobre um crime
 As perguntas são:

 " TELEFONOU PARA A VITIMA? "
 " ESTEVE NO LOCAL DO CRIME? "
 " MORA PERTO DA VITIMA? "
 " DEVIA PARA A VITIMA? "
 " JÁ TRABALHOU COM A VITIMA? "

O PROGRAMA DEVE NO FINAL EMITIR UMA CLASSIFICAÇÃO SOBRE A PARTICIPAÇÃO
DA PESSOA NO CRIME. SE A PESSOA RESPONDER POSITIVAMENTE A 2 QUESTÕES ELA 
DEVE SER CLASSIFICADADA COMO 'SUSPEITA', ENTRE 3 E 4 COMO ' CÚMPLICE ' 
E 5 COMO ' ASSASSINO '.
CASO CONTRÁRIO, ELE SERÁ CLASSIFICADO COMO INOCENTE.
*/



// Fazendo as perguntas, e depois transformando ela em letra minúscula

var pergunta1 = prompt('TELEFONOU PARA A VITIMA?\n Sim ou Não')
pergunta1 = pergunta1.toLowerCase()           

var pergunta2 = prompt('ESTEVE NO LOCAL DO CRIME?\n Sim ou Não')
pergunta2 = pergunta2.toLowerCase()

var pergunta3 = prompt('MORA PERTO DA VITIMA?\n Sim ou Não')
pergunta3 = pergunta3.toLowerCase()

var pergunta4 = prompt('DEVIA PARA A VITIMA?\n Sim ou Não')
pergunta4 = pergunta4.toLowerCase()

var pergunta5 = prompt('JÁ TRABALHOU COM A VITIMA?\n Sim ou Não')
pergunta5 = pergunta5.toLowerCase()

// Criando uma váriavel para armazenar a quantidade de "sim"

var sim = parseInt(0)

// Acrescentar a quantidade de "sim" dependendo da resposta

if (pergunta1 == "sim") {
    sim++
}
if (pergunta2 == "sim") {
    sim++
}
if (pergunta3 == "sim") {
    sim++
}
if (pergunta4 == "sim") {
    sim++
}
if (pergunta5 == "sim") {
    sim++
}



// Gerando a mensagem de conclusão, conforme a quantidade de "sim"

if (sim == 2) {
    window.alert('Interrogado é SUSPEITO! ')

}
else if (sim > 2 && sim < 5) {
    window.alert('Interrogado é CÚMPLICE! ')
}
else if (sim == 5) {
    window.alert('Interrogado enquadrdado como ASSASSINO! ')
}

else if (sim < 2) {
    window.alert('Interrogado é INOCENTE! ')
}



