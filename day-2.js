const fs = require('fs');
const data = fs.readFileSync('day-02.input.txt', 'utf8');
const lines = data.split(/\r?\n/).map(line => line.split(/\s+/))

function convertToIntegers(lines) {
    return lines.map(line => {
        return line.map(number => {
            return parseInt(number)
        })
    })
}

let integers = convertToIntegers(lines)

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

function isDifferent(array) {
    for (let i = 0; i < array.length - 1; i++) {
        if (Math.abs(array[i] - array[i + 1]) > 3 || Math.abs(array[i] - array[i + 1]) < 1) {
            return false
        }
    }
    return true
}

function confirmSafe(array) {
    if ((isIncreasing(array) && isDifferent(array)) || (isDecreasing(array) && isDifferent(array))) {
        return true
    } else {
        return false
    }
}

function checkForSafety(data) {
    let finalArray = []
    let unsafe = []
    for (let i = 0; i < data.length; i++) {
        if (confirmSafe(data[i])) {
            finalArray.push(data[i])
        } else {
            unsafe.push(data[i])
        }
    }
    return finalArray.length
}

console.log(checkForSafety(integers))