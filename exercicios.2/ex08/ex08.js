let pessoa = {
    nome: "Rebeca",
    idade: 23
}
console.log(`Nome: ${pessoa.nome}`)
console.log(`Idade ${pessoa.idade}`)

pessoa.profissao = "Perdida"
console.log(`Nome: ${pessoa.nome}`)
console.log(`Idade: ${pessoa.idade}`)
console.log(`Profissao: ${pessoa.profissão}`)

pessoa.idade = 24
console.log(`Nome: ${pessoa.nome}`)
console.log(`Idade: ${pessoa.idade}`)
console.log(`Profissao: ${pessoa.profissão}`)