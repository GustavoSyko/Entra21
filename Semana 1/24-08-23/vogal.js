/*

A letra é vogal ou consoante?
Faça um programa que verifique se uma letra digitada é vogal ou consoante

*/

var letra = prompt('Informe uma vogal ou uma consoante: ')
letra = letra.toLocaleUpperCase()

if (letra == 'A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U') {
    window.alert('É uma VOGAL.')
}
else if (letra === '') {
    window.alert('Informe a letra.')
}
else {
    window.alert('É uma CONSOANTE.')
}