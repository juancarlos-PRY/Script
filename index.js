//EJERCICIO 1

//1.1
let myFavoritehero = "hulk";

//1.2
let x = 50;

//1.3
let h = 5;
let y =10;

//1.3
let z = h + y;


//EJERCICIO 2

//2.1
const character = {name: 'jack sparrow', age: 10 };
character.age = 25;
console.log(character); // name: 'jack sparrow , age: 25

//2.2
let firstName = 'jon';
let lastName = 'Snow';
let age = 24;
console.log(`soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`)

//2.3
const toy1 = { name: 'Buss myYear', price: 19};
const toy2 = { name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price); // 48

//2.4
let globalBasePrice =10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000 };
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice:80000 };

globalBasePrice =25000;

car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;

console.log(car1); // {name: 'BMW m&m', basePrice: 50000, finalPrice: 75000 }
console.log(car2); // {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 95000 }


//EJERCICIO 3

//3.1
let result = 10 * 5;
console.log(result); //50

//3.2
let result = 10 / 2;
console.log(result) //5

//3.3
let result = 15 % 9;
console.log(result); //6

//3.4
let p = 10;
let j = 5;
let o = p + j; // o = 15
console.log(o); 

//3.5
let c = 10;
let m = 5;
let i = c * m; // i = 50
console.log(i);


//EJERCICIO 4
//4.1

const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]); // HULK

//4.2
const avengers = [ "HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers[0] = "IRONMAN";
console.log(avengers); // [ "IRONMAN", "SPIDERMAN", "BLACK PANTHER"]

//4.3
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers.length); //3

//4.4
const rickAndMortyCharacters = ["Rink", "beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]); // Sumer

//4.5
const rickAndMortyCharacters = ["Rick", "beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.pop();
console.log(rickAndMortyCharacters[0]); // "Rick"
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length -1]); // "Summer"

//4.6
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1,1);
console.log(rickAndMortyCharacters); // ["Rick", "Jerry", "Morty", "Summer", "Lapiz Lopez"]

//EJERCICIO 5

const number1 = 10;
const number2 = 20;
const number3 = 2;
//5.1
if (number2 / number1 === 2) {
    console.log("number2 dividido entre number1 es igual a 2");
}

//5.2
if (number1 !== number2) {
    console.log("number 1 es estrictamente distinto a number2");
}

//5.3
if (number3 != number1) {
    console.log("number3 es distinto number1");
}

//5.4
if (number3 * 5 === number1) {
    console.log("number3 por 5 es igual a number 1");
}

//5.5
if (number3 * 5 === number1 && number1 * 2 === number2) {
    console.log("number3 por 5 es igual a number1 y number1 por 2 es igual a number2");
}

//5.6
if (number2 / 2 === number1 || number1 / 5 === number2) {
    console.log("number2 entre 2 es igual a number1 o number1 entre 5 es igual a number2");
}

//EJERCICIO 6

//6.1
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//6.2
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//6.3
for (let i = 1; i <= 10; i++) {
    if (i === 10) {
        console.log("dormido!");
    } else {
        console.log("intentando dirmir 🐑");
    }
}

//EJERCICIO 7
//7.1

function getMaxNumber(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne;
    } else {
        return numberTwo;
    }
}

//EJERCICIO 8
//8.1

function findLongestWord(words) {
    let LongestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > LongestWord.length) {
            longesWord = words[i];
        }
    }
    return LongestWord;
}

//EJERCICIO 9
//9.1

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let sum = 0;
    for (let i = 0; i < param.length; i++) {
        sum += param[i];
    }
    return sum;
} 
console.log(sumAll(numbers)); //1517

//EJERCICIO 10
//10.1

const numbers10 = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
    let sum = 0;
    for (let i = 0; i < param.length; i++) {
        sum += param[i];
    }
    return sum / param.length;
}

//EJERCICIO 11
//11.1

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWordLength(param) {
    let sum = 0;

    for (let i = 0; i < param.length; i++) {
        if (typeof param[i] === 'number') { 
        sum += param[i];
    } else if (typeof param[i] === 'string') {
        sum += param[i].length;
    }
}
    return sum / param.length;
}
console.log(averageWordLength(mixedElements)); // resultado 6.625

//EJERCICIO 12
//12.1

const duplicates = [
'sushi',
'pizza',
'burger',
'potatoe',
'pasta',
'ice-cream',
'pizza',
'chicken',
'onion rings',
'pasta',
'soda'
];

function removeDuplicates(param) {
    let uniqueArray = [];

    for (let i = 0; i < param.length; i++) {
        if (!uniqueArray.includes(param[i])) {
            uniqueArray.push(param[i]);
        }
    }

    return uniqueArray;
}

console.log(removeDuplicates(duplicates)); // ['sushi', 'pizza', 'burger', 'potatoe', 'pasta', 'ice-cream', 'chicken', 'onion rings', 'soda']

//EJERCICIO 13
//13.1

const nameFinder = [
'Peter',
'Steve',
'Tony',
'Natasha',
'Clint',
'Logan',
'Xabier',
'Bruce',
'Peggy',
'Jessica',
'Marc'
];

function finderName(array, value) {
    const index = array.indexOf(value);
    if (index !== -1) {
        return { exists: true, position: index };
    } else {
        return { exists: false };
    }
}

console.log(finderName(nameFinder, 'Tony')); 
// { exists: true, position: 2 }
console.log(finderName(nameFinder, 'carlos'));
// { exists: false }

//EJERCICIO 14
//14.1

const counterWords = [
'code',
'repeat',
'eat',
'sleep',
'code',
'enjoy',
'sleep',
'code',
'enjoy',
'upgrade',
'code'
];

function repeatCounter(param) {
    const counts = {};

    for (let i = 0; i < param.length; i++) {
        const word = param[i];
        if (counts[word]) {
            counts[word]++;
        } else {
            counts[word] = 1;
        }
    }
    return counts;
}

console.log(repeatCounter(counterWords)); 
// { code: 4, repeat: 1, eat: 1, sleep: 2, enjoy: 2, upgrade: 1 }

//EJERCICIO 15
//15.1

const products = [
'Camiseta de Pokemon',
'Pantalón coquinero',
'Gorra de gansta',
'Camiseta de Basket',
'Cinrurón de Orión',
'AC/DC Camiseta'
];

for (let i = 0; i < products.length; i++) {
    if (products[i].includes('Camiseta')) {
        console.log(products[i]);
    }
}

//EJERCICIO 16
//16.1

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];

for (const place of placesToTravel) {
    console.log(place);
}

//EJERCICIO 17
//17.1

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {
    console.log(`${key}: ${alien[key]}`);
}

//EJERCICIO 18
//18.1

const placesToTravel18 = [
{id: 5, name: 'Japan'},
{id: 11, name: 'Venecia'},
{id: 23, name: 'Murcia'},
{id: 40, name: 'Santander'},
{id: 44, name: 'Filipinas'},
{id: 59, name: 'Madagascar'}
];

for (let i = 0; i < placesToTravel18.length; i++) {
    if (placesToTravel18[i].id === 11 || placesToTravel18[i].id === 40) {
        placesToTravel18.splice(i, 1);
        i--;
    }
}

console.log(placesToTravel18);

//EJERCCICIO 19
//19.1


const toys = [
{id: 5, name: 'Buzz MyYear'}, 
{id: 11, name: 'Action Woman'}, 
{id: 23, name: 'Barbie Man'}, 
{id: 40, name: 'El gato con Guantes'},
{id: 40, name: 'El gato felix'}
];

for (let i = 0; i < toys.length; i++) {
    if (toys[i].name.includes('gato')) {
        toys.splice(i, 1);
        i--;
    }
}

console.log(toys);

//EJERCICIO 20
//20.1

const popularToys = [];
const toys20 = [
{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
{id: 11, name: 'Action Woman', sellCount: 24}, 
{id: 23, name: 'Barbie Man', sellCount: 15}, 
{id: 40, name: 'El gato con Guantes', sellCount: 8},
{id: 40, name: 'El gato felix', sellCount: 35}
];

for (const toy of toys20) {
    if (toy.sellCount > 15) {
        popularToys.push(toy);
    }
}

console.log(popularToys);

//EJERCICIO 21
//21.1


const users = [
{ name: "Tony", years: 43 },
{ name: "Peter", years: 18 },
{ name: "Natasha", years: 14 },
{ name: "Bruce", years: 32 },
{ name: "Khamala", years: 16 },
];

console.log("Usuarios menores de edad:");
for (let i = 0; i <users.length; i++) {
    if (users[i].years < 18) {
        console.log(users[i].name);
    }
}

console.log("usuarios mayores de edad:");
for (let i = o; i < users.length; i++) {
    if (users[i].years >= 18) {
        console.log(users[i].name);
    }
}

//EJERCICIO 22
//22.1


const foodSchedule = [
{ name: "Heura", isVegan: true },
{ name: "Salmon", isVegan: false },
{ name: "Tofu", isVegan: true },
{ name: "Burger", isVegan: false },
{ name: "Rice", isVegan: true },
{ name: "Pasta", isVegan: true },
];

let fruitIndex = 0;

for (let i = 0; i < foodSchedule.length; i++) {
    if (!foodSchedule[i].isVegan) {
        foodShedule[i].name = fruit[fruitIndex];
        fruitIndex++;
    }
}

console.log(foodSchedule);

//EJERCICIO 23
//23.1


const movies = [
{ name: "Titan A.E.", durationInMinutes: 130 },
{ name: "Nightmare before Christmas", durationInMinutes: 225 },
{ name: "Inception", durationInMinutes: 165 },
{ name: "The Lord of the Rings", durationInMinutes: 967 },
{ name: "Star Wars: A New Hope", durationInMinutes: 214 },
{ name: "Terminator", durationInMinutes: 140 },
];

const smallMovies = [];
const mediumMovies = [];
const bigMovies = [];

for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    if(movie.durationInMinutes < 100) {
        smallMovies.push(movie);
    } else if (movie.durationInMinutes >= 100 && movie.durationInMinutes <= 200) {
        mediumMovies.push(movie);
    } else {
        bigMovies.push(movie);
    }
}

console.log("pelicula pequeñas (< 100 min):", smallMovies);
console.log("peliculas medianas (100-199 min):", mediumMovies);
console.log("peliculas grandes (>= 200 min):", mediumMovies);

//EJERCICIO 24
//24.1


const products24 = [
{ name: "Funko Dr. Strange", sellCount: 10 },
{ name: "Mochila de protones: Ghostbusters", sellCount: 302 },
{ name: "Sable laser FX", sellCount: 23 },
{ name: "Varita de Voldemort", sellCount: 6 },
];

let totalVentas = 0;

for (let i = 0; i < products24.length; i++) {
    totalVentas += products24[i].sellCount;
}

console.log("Total de ventas:", totalVentas);

//EJERCICIO 25
//25.1


const products25 = [
{ name: "Funko Dr. Strange", sellCount: 10 },
{ name: "Mochila de protones: Ghostbusters", sellCount: 302 },
{ name: "Sable laser FX", sellCount: 23 },
{ name: "Varita de Voldemort", sellCount: 6 },
];

let totalVentasProductos = 0;

for (let i = 0; i < products25.length; i++) {
    totalVentasProductos += products25[i].sellCount;
}

const mediaVentas = totalVentasProductos / products25.length;
console.log("total de ventas:", totalVentasProductos);
console.log("Media de ventas:", mediaVentas);

//EJERCICIO 26
//26.1


const goodProducts = [];
const badProducts = [];
const productsList = [
{ name: "Funko Dr. Strange", sellCount: 10 },
{ name: "Mochila de protones: Ghostbusters", sellCount: 302 },
{ name: "Sable laser FX", sellCount: 23 },
{ name: "Varita de Voldemort", sellCount: 6 },
];

for (let i = 0; i < productsList.length; i++) {
    const products = productsList[i];

    if (products.sellCount >= 20) {
        goodProducts.push(products);
    } else if (products.sellCount < 20) {
        badProducts.push(products);
    }
}
console.log("goodProducts:", goodProducts);
console.log("badProducts:", badProducts);













