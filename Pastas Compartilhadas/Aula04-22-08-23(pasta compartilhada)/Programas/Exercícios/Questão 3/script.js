var pesoPessoa   = parseFloat(prompt('Informe o peso da pessoa: '))
var alturaPessoa = parseFloat(prompt('Informe a altura da pessoa: '))
var imcPessoa = (pesoPessoa / (alturaPessoa * alturaPessoa))

document.writeln("IMC calculado : " + imcPessoa.toFixed(1))
if (imcPessoa < 18.5) {
    document.write("A pessoa está abaixo do peso")
} else {if (imcPessoa <= 24.9){
             document.write("A pessoa está com o peso ideal. Parabéns")
        } else {if (imcPessoa <= 29.9){
                    document.write("A pessoa está levemente acima do peso")
                } else {if (imcPessoa >= 30 && imcPessoa <= 34.9){
                            document.write("A pessoa está com Obesidade grau I")
                        } else {if (imcPessoa <= 39.9){
                                    document.write("A pessoa está com Obesidade grau II (severa)")
                                } else { document.write("A pessoa está com Obesidade grau III(mórbida)")
                                        }
                                    }
                                }
                            }
                        }
                    }