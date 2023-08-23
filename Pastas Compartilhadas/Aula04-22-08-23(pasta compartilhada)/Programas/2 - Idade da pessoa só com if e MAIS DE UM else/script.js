var idadePessoa = prompt('Informe a idade da pessoa: ')
if (idadePessoa < 12) {
    document.write("A pessoa é CRIANÇA")
} else { if (idadePessoa >= 12 && idadePessoa < 18) {
            document.write("A pessoa é ADOLESCENTE")
        } else {
            if (idadePessoa >= 18 && idadePessoa < 30) {
                document.write("A pessoa é JOVEM")
            } else {
                if (idadePessoa >=30 && idadePessoa < 60) {
                    document.write("A pessoa é ADULTO")
                } else {
                    if (idadePessoa >= 60 && idadePessoa < 75) {
                        document.write("A pessoa é IDOSO")
                    } else {
                        if (idadePessoa >= 75 && idadePessoa < 90) {
                            document.write("A pessoa é ANCIÃO")
                        } else {
                            document.write("A pessoa está em VELHICE EXTREMA")
                        }
                    }
                }
            }
        }
}
