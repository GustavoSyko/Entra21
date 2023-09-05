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

var vlrGado = parseFloat(5000), gaBranco = 0, gaMalhado = 0, gaMarrom = 0

var vlrOvelha = parseFloat(3000), ovBranca = 0, ovMalhada = 0, ovPretas = 0

var programa = true

var pergunta

var cores



while (programa == true) {

    pergunta = prompt('Vamos contar qual animal?\nGado\nOvelha')
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

var gado = gaBranco + gaMalhado + gaMarrom
var ovelha = ovBranca + ovMalhada + ovPretas

// pegar o total de ovelhas e de gados e multiplicar pelo valor de cada uma

var vlrTotalGado = gado * vlrGado
var vlrTotalOvelha = ovelha * vlrOvelha

// transformando em moeda brasileira para diminuir o codigo, assim não precisamos colocar .toFixed(2) etc e nem 'R$'...
var vlrTotalGado = vlrTotalGado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
var vlrTotalOvelha = vlrTotalOvelha.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

alert(vlrTotalGado)
