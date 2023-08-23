var limiteVelocidade = parseFloat(prompt('Informe o limite de velocidade: '));
var velocidadeAferida = parseFloat(prompt('Informe a velocidade aferida: '));
// velocidade limite mais 20%
var velocidadeCalculada = limiteVelocidade * 1.20;

if (velocidadeAferida <= limiteVelocidade) {
        document.write("Sem Multa");
} else { if (velocidadeAferida > limiteVelocidade && velocidadeAferida <= velocidadeCalculada) {
        document.write("Multa Leve");
        } else {
                document.write("Multa Grave");
        }

}