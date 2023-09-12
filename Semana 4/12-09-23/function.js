var numeroInformado = parseInt(prompt('Informe o número. '))

function cuboNumero(pNumero) {
    cuboNumero = (pNumero * pNumero * pNumero)
    return cuboNumero
}

    // No caso, " pNumero " é usado dentro da função para não se confundir com o nome da variável
    // pois a função aceita isto, podemos " FORÇAR " um valor para aquele local. 
    // Se torna um padrão para não fazer bagunça.

alert('O cubo de ' + numeroInformado + ' é ' + cuboNumero(numeroInformado))

