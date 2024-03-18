let students = [
{
    name: 'Levi',
    firstNote: 8,
    secondNote: 9,
},

{
    name: 'Gal',
    firstNote: 6,
    secondNote: 5,
},

{
    name: 'Luz',
    firstNote: 8,
    secondNote: 7,
}        
]

function averageCalculate(firstNote,secondNote) {
    let average = (firstNote + secondNote) / 2
    return average
}
   

for(let student of students){
    individualAverage = averageCalculate(student.firstNote, student.secondNote)
    let ApprovedOrNot = individualAverage < 7 ? 'Você não atingiu a média. Estude mais! :(' : 'Você está aprovado. Parabéns! :)' //ternário

    alert(`A média de ${student.name} é ${individualAverage}.
    ${ApprovedOrNot}`)
}