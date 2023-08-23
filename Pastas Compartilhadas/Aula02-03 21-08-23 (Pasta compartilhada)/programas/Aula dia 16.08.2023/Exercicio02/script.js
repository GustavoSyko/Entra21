var nomeAluno, idadeAluno;
/* esse é um comentário
que ocupa mais de uma linha
*/

// entrada do nome do aluno
nomeAluno  = prompt("Informe o seu nome");
idadeAluno = parseInt(prompt("Informe a sua idade"));
document.write("Seja bem-vindo " + nomeAluno + " percebi que você tem " + (idadeAluno+1) + " anos de idade");

nomeAluno  = prompt("Informe o novo nome");
idadeAluno = idadeAluno + 10;
console.log("Seja bem-vindo " + nomeAluno + " percebi que você tem " + (idadeAluno+1) + " anos de idade");
