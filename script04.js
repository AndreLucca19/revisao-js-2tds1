//Exercico 04

let quantidadePalma = 10;

let aplausos = "";
for(let i = 0; i <quantidadePalma; i++){
    aplausos += "🐣";
    if((i+1) % 1 === 0){
        aplausos += "🐥"
    }
}
console.clear()
console.log(aplausos)