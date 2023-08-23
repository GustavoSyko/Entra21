var idadePessoa = prompt('Informe a idade da pessoa: ')
if (idadePessoa < 18) {
    document.write("A pessoa é MENOR DE IDADE")
} else { if (idadePessoa >= 18 && idadePessoa < 65) {
            document.write("A pessoa é MAIOR DE IDADE")
        } else { if (idadePessoa >= 60 && idadePessoa < 75) {
                        document.write("A pessoa é IDOSO")
                    }
                }
            }
        
