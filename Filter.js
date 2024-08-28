/*
    FILTER
     - Cria um novo array, a partir de array percorrido (array original)
     - Cria um novo array APENAS com os elementos filtrados
     - Aceita 3 parametros:
        - Item do array
        - Index
        - Array completo

        return true -> Item atual passa para o novo array
        return false -> Item atual NÃO passa para o novo array

*/

const list = [20, 3, 234, 12, 17, 541, 6, 87, 275, 1000]

/*  
const newList = list.filter(item => {
    if (item > 100) return true
    else return false
})


    const newList = list.filter(item => item > 100)
                                               E
    const newList = list.filter(item => item < 100 && item % 2 === 0)
                                             ou       */
const newList = list.filter(item => item < 100 || item % 2 === 0)


console.log(newList)

