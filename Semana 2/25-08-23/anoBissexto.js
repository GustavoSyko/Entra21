ano = parseInt(prompt('Informe o ano: '))


if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    window.alert('O ano é bissexto: ' + ano + '.')
}

else {
    window.alert('O ano ' + ano + ' não é bissexto.')
}