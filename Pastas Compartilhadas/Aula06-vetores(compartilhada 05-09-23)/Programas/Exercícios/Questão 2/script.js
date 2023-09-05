const vetorNomes = [];
contaNomes = 0;

// entrada dos nomes
for (let contaNomes=0; contaNomes < 5; contaNomes++){
    vetorNomes[contaNomes] = prompt("Informe o " + (contaNomes + 1) + "º nome"); 
}

for (let contaNomes=4; contaNomes >= 0; contaNomes--){
    console.log(vetorNomes[contaNomes]);
}