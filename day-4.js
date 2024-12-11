const fs = require('fs');
const data = fs.readFileSync('day-04.input.txt', 'utf8');

const word = "XMAS"
const grid = data.split('\n').map(row => row.split(""))
const rows = data.split('\n')

// left to right pattern (horizontal)
function searchHorizontal(rows) {
    let pattern = /XMAS/g
    let totalMatches = [].flat()
    for (let row = 0; row < rows.length; row++) {
        const matches = rows[row].match(pattern)
        if (matches) {
            totalMatches.push(matches)
        }
    }
    return totalMatches.flat().length
}
console.log(searchHorizontal(rows))

// left-to-right pattern (horizontal search) for backwards word 
// top-to-bottom pattern (vertical search)
// to-to-bottom pattern (vertical search) for backwards word 
// diagonal patterns
    // top-left to bottom-right
    // bottom-left to top-right