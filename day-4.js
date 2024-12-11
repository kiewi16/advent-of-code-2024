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
function searchHorizontalBackwardsWord(rows) {
    let pattern = /SAMX/g
    let totalMatches = [].flat()
    for (let row = 0; row < rows.length; row++) {
        const matches = rows[row].match(pattern)
        if (matches) {
            totalMatches.push(matches)
        }
    }
    return totalMatches.flat().length
}
console.log(searchHorizontalBackwardsWord(rows))

// top-to-bottom pattern (vertical search)

function searchVertical(grid) {
    let result = []
    let pattern = /XMAS/g
    let totalMatches = [].flat()
    
    for (let column = 0; column < grid[0].length; column++) {
            let letters = []
        for (let row = 0; row < grid.length; row++) {
            letters.push(grid[row][column])           
        }
        result.push(letters.join(""))
    }

    for (let i = 0; i < result.length; i++) {
        const matches = result[i].match(pattern)
        if (matches) {
            totalMatches.push(matches)
        }
    }
    return totalMatches.flat().length
}
console.log(searchVertical(grid))

// the outer loop iterates through each column in the grid
    // the letters variable stores all the letters from each column 
// the inner loop iterates through each row for each column
    // for example, round 1 would iterate through row column 0 for each row in the grid. Each letter from
    // each column in the grid is pushed into the letters array. so at the end of round 1, the letters variable would contain all the letters from each row in column one. Then the next loop would look at the second column for every row in the grid. At the end of each outer loop (before moving on to the next column), the letters collected from that column are pushed into the result array. By the end of the loops, the result variable contains as many elements are they are grid[0].length (aka columns)


// to-to-bottom pattern (vertical search) for backwards word 
// diagonal patterns
    // top-left to bottom-right
    // bottom-left to top-right