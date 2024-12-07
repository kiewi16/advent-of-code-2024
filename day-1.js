const fs = require('fs');
const data = fs.readFileSync('day-01.input.txt', 'utf8');
const lines = data.split(/\r?\n/).map(line => line.split(/\s+/));

function divideColumnA(lines){
    return lines.map(line => parseInt(line[0]))
}

function divideColumnB(lines) {
    return lines.map(line => parseInt(line[1]))
}
let columnA = divideColumnA(lines)
let columnB = divideColumnB(lines)

function sortColumn(column) {
    return column.sort((a, b) => a - b)
}

let sortedColumnA = sortColumn(columnA)
let sortedColumnB = sortColumn(columnB)

function calculateDistances(sortedColumnA, sortedColumnB) {
    let distances = 0
    for (let i = 0; i < sortedColumnA.length; i++) {
        distances +=  Math.abs(sortedColumnA[i] - sortedColumnB[i])
     }
    return distances
}

console.log(calculateDistances(sortedColumnA, sortedColumnB))

// function calculateDistances(sortedColumnA, sortedColumnB) {
//     let distances = []
//     for (let i = 0; i < sortedColumnA.length; i++) {
//         distances.push(Math.abs(sortedColumnA[i] - sortedColumnB[i]))
//      }
//     return distances.reduce((acc, number) => {
//         acc += number
//         return acc
//     }, 0)
// }