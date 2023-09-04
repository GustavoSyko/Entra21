// Crie um programa que o usuário consiga cadastrar produtos, ver a listagens de produtos já cadastrados,
//  encerre o programa e finalize uma compra, onde o usuário consiga pagar cada produto de uma vez
//   e o usuário pode escolher a forma de pagamento entre débito, crédito, PIX ou dinheiro.

let lista = [0]
let produtos = 0
let formaPagamento = 0



let programa = 1


while (programa == 1) {
    produtos = prompt('Qual produto você quer adicionar?')
    lista = lista.push[produtos]
    window.alert(`Os produtos registrados até agora são: ${produtos}`)
    programa = prompt('Quer adicionar mais produtos?\n1-Sim\n2-Não')
    
}
if (programa == 2) {
    formaPagamento = prompt('Qual a forma de pagamento?\n1-Débito\n2-Crédito\n3-Pix ou dinheiro')
    if (formaPagamento == 1) {
        alert(`Os itens da lista são ${lista} e a forma de pagamento será no Débito`)
    }
    if (formaPagamento == 2) {
        alert(`Os itens da lista são ${lista} e a forma de pagamento será no Débito`)
    }
    if (formaPagamento == 3) {
        alert(`Os itens da lista são ${lista} e a forma de pagamento será no Débito`)
    }
}

