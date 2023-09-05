/*

Declarar um array: var names = ['John', 'Jane', 'Bob'];
Acessar elementos: names[0] // John
Adicionar elementos: names.push('Mary');
Remover elementos: names.pop();
Verificar tamanho: names.length

*/


// Imprimir todos os elementos de um array:

var numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}





// Somar todos os elementos de um array:
var numbers = [1, 2, 3, 4, 5]; 
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum); // 15






// Encontrar o maior elemento de um array:
var numbers = [5, 3, 6, 2, 10];
let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i]; 
  }
}

console.log(largest); // 10





// Inverter a ordem dos elementos de um array:
var numbers = [1, 2, 3, 4, 5];
const reversed = [];

for (let i = numbers.length - 1; i >= 0; i--) {
  reversed.push(numbers[i]);
}

console.log(reversed); // [5, 4, 3, 2, 1] 




// Contar elementos em um array:
var fruits = ['banana', 'orange', 'apple', 'cherry'];
let count = 0;

for (let i = 0; i < fruits.length; i++) {
  count++;
}

console.log(count); // 4

