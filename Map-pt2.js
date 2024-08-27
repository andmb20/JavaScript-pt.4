/*
    MAP => Mapear o nosso array.
      - Cria um  novo array, a partir do array peercorrido (array original)
      - Cria um novo array, com a mesma quantidade de itens do array original.
      - Aceita 3 parâmetros (primeiro OBRIGATÓRIO, os demais opcionais)
        - item do array
        - index
        - array completo
*/

const list = [
    {name: 'André', vip: true },
    {name: 'João', vip: false },
    {name: 'Yuri', vip: true },
    {name: 'Rodolfo', vip: true },
    {name: 'Ana', vip: true },
    {name: 'Antonio', vip: false },
    {name: 'Paulo', vip: false },
]

const newList = list.map( user => {
    const newUser = {
        name: user.name,
        braceletColor: user.vip ? 'black' : 'green'
    
    }

    return newUser
})

const students = [
    {name: 'André', testGrade: 7 },
    {name: 'João', testGrade: 9 },
    {name: 'Yuri', testGrade: 8 },
    {name: 'Rodolfo', testGrade: 4 },
    {name: 'Ana', testGrade: 6 },
    {name: 'Antonio', testGrade: 5 },
    {name: 'Paulo', testGrade: 3 }
]

const newStudents = students.map ( student => {
    const gradeStudents = {
        name: student.name,
        notaDeCorte: student.testGrade >= 5 ? "voce passou" : "reprovado"
    }

    return gradeStudents
})

console.log(newStudents)