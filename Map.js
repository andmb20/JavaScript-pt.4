/*
    MAP => Mapear o nosso array.
      - Cria um  novo array, a partir do array peercorrido (array original)
      - Cria um novo array, com a mesma quantidade de itens do array original.
      - Aceita 3 parâmetros (primeiro OBRIGATÓRIO, os demais opcionais)
        - item do array
        - index
        - array completo
*/

const number = [1, 2, 3, 4, 5, 6]

        //Function
/*    const double = number.map((item) => {
        return item * 3
    })  */

        //arrow function
const double = number.map((item) => item * 3 ) 

const triple = number.map((item, index, arrayOriginal) => {
    console.log(item + "  ->item")
    console.log(index + "  ->index")
    console.log(arrayOriginal + "  arrayOriginal")
})

console.log(number)
console.log(double)