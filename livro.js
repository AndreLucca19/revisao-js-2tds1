let MetaDeLivros = 5 

let livros = ["Biblia", " O pequeno principe", ];

let faltam = MetaDeLivros - livros.length;

for(let i = 0; i < livros.length; i++){
    console.log(livros [i])
} if (livros > MetaDeLivros){
    console.log("Parabéns")
} else {
    console.log("Parabéns, você ja leu: " + livros + " Faltam apenas " + faltam + " Livros")
}