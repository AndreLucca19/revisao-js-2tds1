let arma = ["plasma", "espada", "ump", "M500"]

let ataque = []

let nomeRobo = "Bernei"

arma.push(arma[0]);
arma.push(arma[4]);
arma.push(arma[2]);
arma.push(arma[0]);
arma.push(arma[3]);

for( i = 0; i < ataque.length; i++){
    if(i == 0){
        console.log(`nomeRobo: ${ataque[i]}`);
    } else {
        console.log(`ataque ${i} : ${ataque[i]}`);
    }
}