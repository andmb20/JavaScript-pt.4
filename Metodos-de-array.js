/*
    Array's
        - push   -> Adiciona mais um item ao array
        - lenght -> Mostra o tamanho do array
        - sort   -> Organiza o array
        - delete -> Deleta o item de uma posição do array
        - every  -> Testa se todos os elementos do array passam em uma condição.
        - some   -> Testa se pelo menos um elemento passa na condição
        - fill   -> Preenche as posições do array como desejamos
        - find   -> Usamos quando queremos encontrar algum elemento dentro do array
        - findIndex  -> Faz o mesmo que o .find(), mas retorna o índice do elemento encontrado ao invés de retornar o próprio elemento.
        - concat -> Concatenar itens = juntar em um único array
        - join   -> Junta todos elementos de um array
        - pop    -> Remove o último elemento de um array
        - shift  -> Remove o primeiro elemento de um array
        - slice  -> Retorna um novo array somente com os itens escolhidos
        - splice -> Remove ou adiciona elementos em um array em uma posição especifica

*/

const myArray = [1, 2, 3]

myArray.push(4) // Adiciona na ultima posição do array

console.log(myArray)

console.log(myArray.length)

const mySecondArray = ['limão', 'abacate', 'kiwi']

mySecondArray.sort() // Organizou o array em ordem alfabética

console.log(mySecondArray)

delete mySecondArray[0] // deletando o item da posição 0

console.log(mySecondArray)

const users = [
    { name: 'André', credit: 200 },
    { name: 'Rodolfo', credit: 800 },
    { name: 'Yuri', credit: 1200 },
    { name: 'Marcos', credit: 700 },
]

const findAUser = users.find(user => user.name === 'Rodolfo')

console.log(findAUser)

const findUserIndex = users.findIndex(user => user.name === 'Marcos')

console.log(findUserIndex)

const isTrue = users.every(user => user.credit > 300)
// false pois o user André tem somente 200 credit
console.log(isTrue)

const istrue = users.some(user => user.credit > 1000)
// true pois o user Yuri tem credit > 1000
console.log(istrue)

const numbers = [1, 2, 3, 4, 5, 6]

// 1° o que vou colocar | 2° Onde começa | 3° Onde termina
numbers.fill(10, 1, 4)

console.log(numbers)

const array1 = [1, 2, 3]
const array2 = [5, 6, 7]

const array3 = array1.concat(array2)
console.log(array3)
// Como irei separalos
const arrayJoin = array3.join('/')
console.log(arrayJoin)

array3.pop()
console.log(array3)

array3.shift()
console.log(array3)

const peoples = ['José', 'Maria', 'Pedro', 'André']
   // começa pegar na posição um quando chegar na 3 para
const newPeoples = peoples.slice(1,3)

console.log(newPeoples)

peoples.splice(1, 1, 'Joaquina')

console.log(peoples)

peoples.splice(1, 2, 'Davi')

console.log(peoples)

