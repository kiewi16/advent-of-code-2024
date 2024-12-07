// const fs = require('fs');
// const data = fs.readFileSync('day-02.input.txt', 'utf8')

// const lines = data.split(/\r?\n/).map(line => line.split(/\s+/));

let increasing = [1, 2, 3, 4, 5, 6]
let decreasing = [6, 5, 4, 3, 2, 1]
let unsafe = [1, 4, 5, 3, 9]
let data = [increasing, decreasing, unsafe]

function isIncreasing(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] >= array[i + 1]) {
            return false
        }
    }
    return true
}

function isDecreasing(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] <= array[i + 1]) {
            return false
        }
    }
    return true
}

function confirmSafe(array) {
    if (isIncreasing(array) || isDecreasing(array)) {
        return array
    } else {
        return false
    }
}

function checkForSafety(data) {
    let finalArray = []
    for (let i = 0; i < data.length; i++) {
       if (confirmSafe(data[i])) {
        finalArray.push(data[i])
       }
    }
    return finalArray
}

console.log(checkForSafety(data))