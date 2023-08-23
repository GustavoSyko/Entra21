var tipoVeiculo = prompt("Informe o tipo de Veículo (A-Automóvel M-Motocicleta C-Caminhão) ");

switch (tipoVeiculo) {
    case 'A':
        document.write("Automóvel")
        break;
    case 'M':
        document.write("Motocicleta")
        break;
    case 'C':
        document.write("Caminhão")
        break;
    default:
        document.write("Opção Inválida")
}