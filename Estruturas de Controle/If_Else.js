const imiprimirResultado = function (nota) {
    if(nota >= 7) {
    console.log('Aprovado!')
    } else {
        console.log('Reprovado!')
    }
}

imiprimirResultado(4)
imiprimirResultado(10)
imiprimirResultado('Epa!') // cuidado!!!
