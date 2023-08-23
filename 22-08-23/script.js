// Atividade 21/08/2023 porém alterado de ( IF - ELSE ) para ( FOR ) na aula do dia 22/08/23

// Um pronto-socorro tem 4 faixas de atendimento.
// 1- Emergencia
// 2- Pronto atendimento
// 3- Pouco Urgente
// 4- Não Urgente

// Insira o nome de 6 pessoas e enquadre nas faixas acima.
// Mostre quantas foram enquadradas em cada faixa.


var emergencia = Number.parseInt(0)
var prontoAtendimento = Number.parseInt(0)
var poucoUrgente = Number.parseInt(0)
var naoUrgente = Number.parseInt(0)


for (var i = 1; i <= 6; i++) {
    pessoa = Number.parseInt(prompt("Qual o estado do paciente 1, de 1 a 4 ? "))
    switch (pessoa) {
        case 1: emergencia++;
            break;
        case 2: prontoAtendimento++;
            break;
        case 3: poucoUrgente++;
            break;
        case 4: naoUrgente++;
            break;
    }
}

window.alert("Número de pacientes enquadrado em Emergência é : " + emergencia)
window.alert("Número de pacientes enquadrado em Pronto Atendimento é : " + prontoAtendimento)
window.alert("Número de pacientes enquadrado em Pouco Urgente é : " + poucoUrgente)
window.alert("Número de pacientes enquadrado em Não Urgente é : " + naoUrgente)
