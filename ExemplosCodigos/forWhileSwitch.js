
// For loop
// Usado quando você sabe quantas repetições precisam ser feitas.
//Percorre um array ou intervalo de números:


for(var i = 0; i <= 10; i++) {
    console.log(i);
  }


//While loop
// Usado quando você não sabe de antemão quantas repetições precisam ser feitas,
// depende de uma condição.
// Repete enquanto uma condição for verdadeira:


var i = 0;
while(i < 10) {
  console.log(i);
  i++;
}



// Do while loop
// Similar ao while, mas executa pelo menos uma vez mesmo que a condição seja falsa.
// Executa pelo menos uma vez e repete enquanto condição for verdadeira:

var input;
do {
  console.log("Enter a value"); 
  input = prompt();
} while(input !== "quit");



// Switch
// Executa código baseado em caso:

switch(x) {
  case 1:
    // código
    break;
  case 2: 
    // código  
    break;
  default:
   // código padrão
}
