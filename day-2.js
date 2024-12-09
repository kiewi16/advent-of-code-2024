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



// 1 element that is NOT increasing, removes that element and returns modified array
// all elements are increasing, returns array unchanged
// more than 1 element is NOT increasing, returns false 

// function removeNotIncreasing(array) {
//     let count = 0
//     for (let i = 0; i < array.length - 1; i++) {
//         if (array[i] >= array[i + 1]) {
//             count += 1
//         }
//     } 
//     if (count === 1) {
//         for (let i = 0; i < array.length - 1; i++) {
//             if (array[i] >= array[i + 1]) {
//                 if (array[i] > array[i + 1]) {
//                     array.splice(i + 1, 1)
//                 } else {
//                     array.splice(i, 1)
//                 }             
//                 break
//             }
//         }
//     } else if (count === 0) {
//         return array
//     } else {
//         return false 
//     }
//     return array
// }

// 1 element that is NOT decreasing, removes that element and returns modified array
// all elements are dedreasing, returns array unchanged
// more than 1 element is NOT decreasing, returns false 

// function removeNotDecreasing(array) {
//     let count = 0
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] >= array[i - 1]) {
//             count += 1
//         }
//     } 
//     if (count === 1) {
//         for (let i = 1; i < array.length; i++) {
//             if (array[i] >= array[i - 1]) {
//                 array.splice(i, 1)
//                 break
//             }
//         }
//     } else if (count === 0) {
//         return array
//     } else {
//         return false 
//     }
//     return array
// }

// console.log("test1:", removeNotIncreasing(test1))
// console.log("test2:", removeNotIncreasing(test2))
// console.log("test6:", removeNotIncreasing(test6))
// console.log("test7:", removeNotIncreasing(test7))
// console.log("test10:", removeNotIncreasing(test10))

// // console.log("test3:", removeNotDecreasing(test3))
// // console.log("test4:", removeNotDecreasing(test4))
// // console.log("test5:", removeNotDecreasing(test5))
// // console.log("test8:", removeNotDecreasing(test8))
// // console.log("test9:", removeNotDecreasing(test9))

// evaluating arrays to determine if their increaseCount or decreaseCount are equivalent to the number of elements in the array (minus 1). This is because you always do one fewer comparison than the length of the array. 

// test cases
let test1 = [1,2,3,4,5,5] // [1,2,3,4,5]
let test2 = [1,3,2,5,3,7] // false (more than 1 problem)
let test3 = [9,8,9,7,5,4,3] // [9,8,7,5,4,3]
let test4 = [100,90,80,70] // return original array (decreasing)
let test5 = [999,7,6,5,4] // return original array (decreasing)
let test6 = [999,1,5,10] // [1,5,10]
let test7 = [1,3,5,7,9,100] // return original array
let test8 = [5,4,3,2,1,2] // [5,4,3,2,1]
let test9 = [1,4,3,2,1] // [4,3,2,1]
let test10 = [1,2,3,4,5,4] // [1,2,3,4,5]

function classifyArray(array) {
    let increaseCount = 0
    let decreaseCount = 0
    let repeatCount = 0
    
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[i - 1]) {
            increaseCount ++
        } else if (array[i] < array[i - 1]) {
            decreaseCount ++
        } else if (array[i] === array[i - 1]) {
            repeatCount ++
        }
    }
    if (increaseCount === (array.length - 1) || decreaseCount === (array.length -1)) {
        return array
    } else if ((increaseCount > 1 && decreaseCount > 1) || (repeatCount > 1)) {
        return false
    } else if (repeatCount === 1) {
        console.log("there is one repeat:")
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] === array[i + 1]) {
                array.splice(i + 1, 1)
                break
            }
        }
        return array
    } else if (increaseCount > 1 && decreaseCount === 1) {
        console.log("mostly increasing with one decrease:")
        return removeSingleDecrease(array)
    } else if (increaseCount === 1 && decreaseCount > 1) {
        console.log("mostly decreasing with one increase:")
        // invoke removeSingleIncrease()
    }
}

// [1, 7, 3, 4, 5] // 7 needs to be removed from this array so that it is mostly increasing 

// length is 5
// round 1: compare 7 to 1 & 3
// round 2: compare 3 to 7 & 4
// round 3: compare 4 to 3 & 5

// array.length - 2?? 
// i starts at 1
// if array[i] is greater than array[i - 1] && array[i] is greater than array[i + 1]
    // array[i] = 7
    // array[i - 1] = 1
    // array[i + 1] = 3
// if 7 is GREATER than 1 AND 7 is GREATER than 3
    // remove 7 
    // array.splice(array[i], 1)

// what if the first element is the one that needs to be removed?? [999, 1, 5, 10]
// else if array[i - 1] > array[i] && array[i -1] > array[i + 1]
    // array[i] = 1
    // array[i - 1] = 999
    // array[i + 1]= 5
// else if 999 is GREATER than 1 AND 999 is GREATER than 5
    // remove array[i - 1]

// what if the last element is the one that needs to be removed?? let test10 = [1,2,3,4,5,4] // [1,2,3,4,5]
// else if array[i + 1] is less than array[i]

    // array.length = 6
    // array.length - 2 = 4
    // round 1: i = 2
    // round 2: i = 3
    // round 3: i = 4
    // round 4: i = 5

    // array[i] = 5
    // array[i + 1] = 4
    // remove [i + 1]

function removeSingleDecrease(array) {
    for (let i = 1; i <= array.length - 2; i++) {
        if(array[i] > array[i - 1] && array[i] > array[i + 1]) {
            array.splice(array[i], 1)
            break
        } else if (array[i - 1] > array[i] && array[i - 1] > array[i + 1]) {
            let removeElement = array[i - 1]
            array.splice(array[removeElement], 1)
            break
        } else if (array[i + 1] < array[i]) {
            let removeElement2 = array[i + 1]
            array.splice(array[removeElement2], 1)
            break
        }
    }
    return array
}

console.log("test1:", classifyArray(test1))
console.log("test2:", classifyArray(test2))
console.log("test3:", classifyArray(test3))
console.log("test4:", classifyArray(test4))
console.log("test5:", classifyArray(test5))
console.log("test6:", classifyArray(test6))
console.log("test7:", classifyArray(test7))
console.log("test8:", classifyArray(test8))
console.log("test9:", classifyArray(test9))
console.log("test10:", classifyArray(test10))