var idadePessoa = parseInt(prompt('Informe a idade da pessoa: '));

if (idadePessoa < 16) {
        document.write("Não é eleitor");
} else { if ((idadePessoa >= 16 && idadePessoa <= 17) || idadePessoa > 65) {
        document.write("Eleitor facultativo.");
        } else {
                document.write("Eleitor obrigatório!");
        }

}