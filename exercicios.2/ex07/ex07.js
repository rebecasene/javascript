
let frutas = ["maçâ", "banana", "uva"]

for(let pos in frutas) {
    console.log(frutas[pos])
}

frutas.push("morango")
console.log(frutas)

frutas.pop()
console.log(frutas)

let tam = frutas.length
console.log(`No array existem ${tam} elementos`)


console.log(frutas[1])