const fruits = ["mango", "papaya", "pineapple", "apple"];

// Iterate over fruits below
fruits.forEach(function (element) {
  console.log(`I want to eat a ${element}`);
});


//Funcionamiento del .map()
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map(function(element){
  return element[0];
});
console.log(secretMessage.join(''));


const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(function(element){
  return element/100
});
console.log(smallNumbers);


//Funcionamiento del filter ()
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(function(element){
  return element < 250
});
console.log(smallNumbers);

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(function(element){
  return element.length > 7
})

console.log(longFavoriteWords);

//Nota es mas facil declarar una variable para cada metodo callback de las funciones
