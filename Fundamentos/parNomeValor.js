//par nome/valor
const saudacao ='opa' //contexto léxico

function exec() {
    const saudacao = 'Ralaaa' // contexto léxco 2
    return saudacao
}

// Objetos são grups alinhados de pares de nome/valor
const client = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(client)