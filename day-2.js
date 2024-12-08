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

// console.log(checkForSafety(integers))

// part 2

// test cases
let test1 = [1,2,3,4,5,5] //expected to return safe (remove one of the 5s in last two positions)
let test2 = [1,3,2,5,3,7] //expected to return unsafe
let test3 = [9,8,9,7,5,4,3] //expected to return safe (remove the 9 in [2] position)
let test4 = [100,90,80,70] //expected to return unsafe
let test5 = [999,7,6,5,4] //expected to return safe (remove the 999 in [0] position)
let test6 = [999,1,5,10] //expected to return unsafe
let test7 = [1,3,5,7,9,100] //expected to return safe (remove the 100 in last position)

function removeNotIncreasing(array) {
    let count = 0
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] >= array[i + 1]) {
            count += 1
        }
    } 
    if (count === 1) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] >= array[i + 1]) {
                array.splice(i, 1)
                break
            }
        }
    } 
    return array
}
console.log("test1:", removeNotIncreasing(test1))
console.log("test2:", removeNotIncreasing(test2))
console.log("test6:", removeNotIncreasing(test6))
console.log("test7:", removeNotIncreasing(test7))