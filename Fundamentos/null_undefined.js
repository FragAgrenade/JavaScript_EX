let valor //nao iniciada
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) -> Erro!

const produto = {}
console.log(produto.preco)
console.log(preoduto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitre atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)
produto.preco = nul //sem preço
console.log(!!produto.preco)
console.log(produto)