/* Um fazendeiro tem criação de ovelhas e gado,
As ovelhas são brancas, marrons e pretas.
O gado é branco, malhado e marrom.
Cada cabeça de gado custa R$5,000,00 e cada ovelha R$3,000,00.
Desenvolva um script para contar as cabeças de gado e ovelhas 
e no final gere um resumo do rebanho conforme abaixo : 

Gado  qtde   valor.unitario   vlr.Total

Branco 9999
Malhado 9999
Marrom 9999

Ovelha
Negras
Malhado
Pretas */

document.addEventListener("DOMContentLoaded", function () {

    var vlrGado = parseFloat(5000), gaBranco = 0, gaMalhado = 0, gaMarrom = 0

    var vlrOvelha = parseFloat(3000), ovBranca = 0, ovMalhada = 0, ovPretas = 0

    var programa = true

    var pergunta

    var cores



    while (programa == true) {

        pergunta = prompt('Vamos contar qual animal?\n-Gado\n-Ovelha')
        pergunta = pergunta.toLowerCase()

        switch (pergunta) {
            case 'gado':

                cores = prompt('Qual a cor do gado?\nBranco\nMalhado\nMarrom')
                cores = cores.toLowerCase()
                if (cores == 'branco') {
                    gaBranco += parseInt(prompt('Quantos Gados Brancos o fazendeiro possue?'))
                    gado += gaBranco

                }
                if (cores == 'malhado') {
                    gaMalhado += parseInt(prompt('Quantos Gados Malhados o fazendeiro possue?'))
                    gado += gaMalhado

                }
                if (cores == 'marrom') {
                    gaMarrom += parseInt(prompt('Quantos Gados Marrons o fazendeiro possue?'))
                    gado += gaMarrom

                }

                break;

            case 'ovelha':

                cores = prompt('Qual a cor da Ovelha?\nBranca\nMalhada\nPreta')
                cores = cores.toLowerCase()
                if (cores == 'branca') {
                    ovBranca += parseInt(prompt('Quantas Ovelhas Brancas o fazendeiro possue?'))
                    ovelha += ovBranca

                }
                if (cores == 'malhada') {
                    ovMalhada += parseInt(prompt('Quantas Ovelhas Malhadas o fazendeiro possue?'))
                    ovelha += ovMalhada

                }
                if (cores == 'preta') {
                    ovPretas += parseInt(prompt('Quantas Ovelhas Pretas o fazendeiro possue?'))
                    ovelha += ovPretas

                }

                break;

            default:
                window.alert('Opção inválida!')
                break;
        }

        programa = confirm('O fazendeiro possoe mais animais?\nSelecine OK para continuar.\nCancelar para sair.')
    }
    // Somando e multiplicando todos valores de acordo 
    var gado = gaBranco + gaMalhado + gaMarrom
    var ovelha = ovBranca + ovMalhada + ovPretas

    var vlrTotalBranco = gaBranco * vlrGado
    var vlrTotalMalhado = gaMalhado * vlrGado
    var vlrTotalMarrom = gaMarrom * vlrGado

    var vlrTotalBranca = ovBranca * vlrOvelha
    var vlrTotalMalhada = ovMalhada * vlrOvelha
    var vlrTotalPretas = ovPretas * vlrOvelha

    // pegar o total de ovelhas e de gados e multiplicar pelo valor de cada uma

    var vlrTotalGado = gado * vlrGado
    var vlrTotalOvelha = ovelha * vlrOvelha

    // transformando em moeda brasileira para diminuir o codigo, assim não precisamos colocar .toFixed(2) etc e nem 'R$'...
    var vlrGado = vlrGado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    var vlrOvelha = vlrOvelha.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    var vlrTotalGado = vlrTotalGado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    var vlrTotalOvelha = vlrTotalOvelha.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

    // Apresentar dados do Gado
    // branco
    document.getElementById('qtdBranco').innerHTML = gaBranco
    document.getElementById('vlrBranco').innerHTML = vlrGado
    document.getElementById('vlrTotalBranco').innerHTML = vlrTotalBranco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    // malhado
    document.getElementById('qtdMalhado').innerHTML = gaMalhado
    document.getElementById('vlrMalhado').innerHTML = vlrGado
    document.getElementById('vlrTotalMalhado').innerHTML = vlrTotalMalhado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    // marrom
    document.getElementById('qtdMarrom').innerHTML = gaMarrom
    document.getElementById('vlrMarrom').innerHTML = vlrGado
    document.getElementById('vlrTotalMarrom').innerHTML = vlrTotalMarrom.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })



    // Apresentar dados da ovelha
    // brancas
    document.getElementById('qtdBranca').innerHTML = ovBranca
    document.getElementById('vlrBranca').innerHTML = vlrOvelha
    document.getElementById('vlrTotalBranca').innerHTML = vlrTotalBranca.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    // malhadas
    document.getElementById('qtdMalhada').innerHTML = ovMalhada
    document.getElementById('vlrMalhada').innerHTML = vlrOvelha
    document.getElementById('vlrTotalMalhada').innerHTML = vlrTotalMalhada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    // pretas
    document.getElementById('qtdPretas').innerHTML = ovPretas
    document.getElementById('vlrPretas').innerHTML = vlrOvelha
    document.getElementById('vlrTotalPretas').innerHTML = vlrTotalPretas.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

})
