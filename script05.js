//Exercicio 05

let paes = ["Pão Australiano", "Pão Brioche", "Pão de Gergelim"];
let molhos = ["Maionese", "Ketchup", "Mostarda", "Barbecue"];
let saladas = ["Alface", "Tomate", "Cebola", "Picles"];
let carnes = ["Carne Bovina", "Frango Grelhado", "Veggie Burger"];
let queijos = ["Cheddar", "Mussarela", "Prato", "Gorgonzola"];

let hamburger = [];

hamburger.push(paes [1]); // [0]
hamburger.push(molhos [1]); // [1]
hamburger.push(saladas[0]); // [2]
hamburger.push(carnes [0]); // [3]
hamburger.push(queijos [0]); // [4]
hamburger.push(paes [1]); // [0]

for(let i = 0; i < hamburger.length; i++) {
    console.log(hamburger[i]);
}