const fs = require('fs');
const data = fs.readFileSync('day-01.input.txt', 'utf8');
const lines = data.split(/\r?\n/).map(line => line.split(/\s+/));

function divideColumnA(lines) {
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
        distances += Math.abs(sortedColumnA[i] - sortedColumnB[i])
    }
    return distances
}

calculateDistances(sortedColumnA, sortedColumnB)

// part 2

function countOccurences(sortedColumnA, sortedColumnB) {
    let occurences = []
    sortedColumnA.forEach(columnANum => {
       let count = sortedColumnB.reduce((acc, columnBNum) => {
            if (columnANum === columnBNum) {
                acc++
            }
        return acc
        }, 0)
        occurences.push(count)
    })
    let similarityScore = 0
    for (let i = 0; i < sortedColumnA.length; i++) {
       similarityScore +=  sortedColumnA[i] * occurences[i]
    }
    return similarityScore
}
console.log(countOccurences(sortedColumnA, sortedColumnB))