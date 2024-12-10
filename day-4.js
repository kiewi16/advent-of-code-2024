const fs = require('fs');
const data = fs.readFileSync('day-04.input.txt', 'utf8');

// left to right pattern (aka horizontal)
const word = "XMAS"
const grid = data.split('\n').map(row => row.split(""))

function searchHorizontal(word, grid) {
    for (let row = 0; row < grid.length; row++) {
        if (grid[row] )
    }
}

// function searchHorizontal(word, grid) {
//     for (let row = 0; row < grid.length; row++) {
//         for (let column = 0; column < grid[row].length; column++) {
            
//         }
//     }
// }
console.log(searchHorizontal(word, grid))

// right-to-left patten (aka word is backwards)
// top-to-bottom pattern (vertical search)
// diagonal patterns
    // top-left to bottom-right
    // bottom-left to top-right