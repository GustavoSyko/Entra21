// Atividade 21/08/2023

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

var pessoa1 = Number.parseInt(prompt("Qual o estado do paciente 1, de 1 a 4 ? "))
if (pessoa1 === 1) {
    emergencia++ ;
}
else 
    if (pessoa1 === 2) {
        prontoAtendimento++ ;
    }
    else
        if (pessoa1 === 3) {
            poucoUrgente++ ;
        }
        else
            if (pessoa1 === 4) {
                naoUrgente++ ;
            }

var pessoa2 = Number.parseInt(prompt("Qual o estado do paciente 2, de 1 a 4 ? "))
if (pessoa2 === 1) {
    emergencia++
}
else
    if (pessoa2 === 2) {
        prontoAtendimento++
    }
    else
        if (pessoa2 === 3) {
            poucoUrgente++
        }
        else
            if (pessoa2 === 4) {
                naoUrgente++
            }
var pessoa3 = Number.parseInt(prompt("Qual o estado do paciente 3, de 1 a 4 ? "))
if (pessoa3 === 1) {
    emergencia++
}
else
    if (pessoa3 === 2) {
        prontoAtendimento++
    }
    else
        if (pessoa3 === 3) {
            poucoUrgente++
        }
        else
            if (pessoa3 === 4) {
                naoUrgente++
            }
var pessoa4 = Number.parseInt(prompt("Qual o estado do paciente 4, de 1 a 4 ? "))
if (pessoa4 === 1) {
    emergencia++
}
else
    if (pessoa4 === 2) {
        prontoAtendimento++
    }
    else
        if (pessoa4 === 3) {
            poucoUrgente++
        }
        else
            if (pessoa4 === 4) {
                naoUrgente++
            }
var pessoa5 = Number.parseInt(prompt("Qual o estado do paciente 5, de 1 a 4 ? "))
if (pessoa5 === 1) {
    emergencia++
}
else
    if (pessoa5 === 2) {
        prontoAtendimento++
    }
    else
        if (pessoa5 === 3) {
            poucoUrgente++
        }
        else
            if (pessoa5 === 4) {
                naoUrgente++
            }
var pessoa6 = Number.parseInt(prompt("Qual o estado do paciente 6, de 1 a 4 ? "))
if (pessoa5 === 1) {
    emergencia++
}
else
    if (pessoa5 === 2) {
        prontoAtendimento++
    }
    else
        if (pessoa5 === 3) {
            poucoUrgente++
        }
        else
            if (pessoa5 === 4) {
                naoUrgente++
            }

window.alert("Número de pacientes enquadrado em Emergência é : " + emergencia)
window.alert("Número de pacientes enquadrado em Pronto Atendimento é : " + prontoAtendimento)
window.alert("Número de pacientes enquadrado em Pouco Urgente é : " + poucoUrgente)
window.alert("Número de pacientes enquadrado em Não Urgente é : " + naoUrgente)