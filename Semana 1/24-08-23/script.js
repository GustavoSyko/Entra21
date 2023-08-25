/*


*/

op = 0;
do {
    var sexo = prompt('Informe o sexo: \nF- Feminino \nM - Masculino \nI - Indefinido');
    var idade = parseInt(prompt('Informe a idade '))
    if (sexo == 'F' || sexo == 'f', idade >= 18) {
        alert('Sexo Feminino e maior de idade.')
        op = 1
    }
    else if (sexo == 'M' || sexo == 'm', idade >= 18) {
        alert('Sexo Masculino e maior de idade.')
        op = 1
    }
    else if (sexo == 'I' || sexo == 'i', idade >= 18) {
        alert('Sexo Indefinido e maior de idade.')
        op = 1
    }
    else {
        alert('Menor de idade ou Opção de sexo inválida.')
    }
}
while (op === 0)