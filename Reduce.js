/*
    REDUCE
     - Retorna um valor ( pode ser um novo array, um objeto, string, number...)
     - Aceita 4 parametros
        - acumulador    OBRIGATÓRIO  //Adiciona valor
        - valor atual   OBRIGATÓRIO  //Valor por valor
        - index
        - array completo
*/

const list = [1, 2, 3, 4, 5, 6]

const sum = list.reduce((acc, valorAtual) => {
    return acc + valorAtual
}, 0) // 0 é = valor do acc = acumulador

console.log(sum)

const cart = [
    { productName: "Beringela", pricePerKg: 2.5, kg: 2},
    { productName: "Mamão", pricePerKg: 3, kg: 3},
    { productName: "Melão", pricePerKg: 4, kg: 1.5},
    { productName: "Abacate", pricePerKg: 5.5, kg: 2}
]

const finalValue = cart.reduce((acc, value) => {
    const result = value.pricePerKg * value.kg
    return acc + result
}, 0)

console.log(finalValue)