//High-order function
//Função em JS é First-Class Object (Citizens)

// Criar de forma literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { }

// Armazenar em um Array
{
    const array = [function (a, b) { return a + b }, fun1, fun2]
    console.log(array[0](2, 3))
}

//ex 2
{
    const array2 = [
    function (a , b) {
        return a + b
    },
    fun1,
    fun2
 ]
}

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () {
    return 'Opa'
}
console.log(obj.falar())

// Passar função como parâmetro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...')})

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4)