var vetNomes   = ["Paola","Amanda","João Pedro","Eduardo","Manoel"];
var vetNomesClassif = [];
var vetIdades  = [16,15,17,16];
var vetPassou  = [true,false,true,false];

// Lembre-se que os vetores/matrizes(Arrays) 
// sempre começam na posição 0(zero)

// Localizando a Amanda
console.log(vetNomes[1]);
// Localizando a idade da Amanda
console.log(vetIdades[1]);
// Localizando se a Amanda passou de ano
console.log(vetPassou[1]);

// localizando o último nome com base no tamanho do array

vetNomesClassif = vetNomes[vetNomes.sort];
console.log(vetNomesClassif);
// estamos subtraindo 1 porque o tamnho do array é 4
// mas a posição do Eduardo é a 3. Lembra do começar com zero?
