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

var gado = 0, vlrGado = parseFloat(5000), branco = 0, gaMalhado = 0, marrom = 0

var ovelha = 0, vlrOvelha = parseFloat(3000), branca = 0, ovMalhada = 0, pretas = 0

var programa = true

var pergunta

var cores

pergunta = prompt('Vamos contar qual animal?\nGado\nOvelha')
pergunta = pergunta.toLowerCase()

while (programa == true) {

    switch (pergunta) {
        case 'gado':

            cores = prompt('Qual a cor do gado?\nBranco\nMalhado\nMarrom')
            cores = cores.toLowerCase()
            if (cores == 'branco') {
                branco = parseInt(prompt('Quantos Gados Brancos o fazendeiro possue?'))
                gado += branco
            }
            if (cores == 'malhado') {
                gaMalhado = parseInt(prompt('Quantos Gados Malhados o fazendeiro possue?'))
                gado += gaMalhado
            }
            if (cores == 'marrom') {
                marrom = parseInt(prompt('Quantos Gados Marrons o fazendeiro possue?'))
                gado += marrom
            }

            break;

        case 'ovelha':

            cores = prompt('Qual a cor da Ovelha?\nBranca\nMalhada\nPreta')
            cores = cores.toLowerCase()
            if (cores == 'branca') {
                branco = parseInt(prompt('Quantas Ovelhas Brancas o fazendeiro possue?'))
                ovelha += branca
            }
            if (cores == 'malhada') {
                gaMalhado = parseInt(prompt('Quantas Ovelhas Malhadas o fazendeiro possue?'))
                ovelha += ovMalhada
            }
            if (cores == 'preta') {
                pretas = parseInt(prompt('Quantas Ovelhas Pretas o fazendeiro possue?'))
                ovelha += pretas
            }

            break;

        default:
            window.alert('Opção inválida!')
            break;
    }

    programa = confirm('O fazendeiro possoe mais animais?\nSelecine OK para continuar.\nCancelar para sair.')
}

alert()