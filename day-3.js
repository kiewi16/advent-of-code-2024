const fs = require('fs');
const data = fs.readFileSync('day-03.input.txt', 'utf8');

// scan the corrupted memory for uncorrupted mul instructions

// use regex to remove the corrupted mul instructions
// const regex = /mul\(\d{1,3},\d{1,3}\)/g
// mul: matches the literal word "mul"
// \( : matches the opening parenthesis
// \d{1, 3} : matches between 1 and 3 digits
// , : matches the comma
// \d{1,3} : matches another sequence between 1 and 3 digits
// \) : matches the closing parentehsis
// /g : glow search. it makes the regular expression search for all instances of the pattern, rather than just stopping at the first match. 

// regular expressions (regex)
// search for patterns
// perform replacements
// validate inputs

const regex = /mul\(\d{1,3},\d{1,3}\)/g
const uncorruptedData = data.match(regex)
const regex2 = /\d{1,3},\d{1,3}/g

function findNumbersOnly(uncorruptedData) {
    // console.log("uncorruptedData:", uncorruptedData)
    const numbersOnly = uncorruptedData.map(string => string.match(regex2))
    // console.log("numbersOnly:", numbersOnly)
    return transformNumbers(numbersOnly)
}

function transformNumbers(numbersOnly) {
    const transformedNumbers = numbersOnly.map(subarray => {
        const [num1, num2] = subarray[0].split(",").map(str => parseInt(str))
        return [num1, num2]
    })
    return calculateProducts(transformedNumbers)
}

function calculateProducts(transformedNumbers) {
    const products = transformedNumbers.map(item => item[0] * item[1])
    return calculateTotal(products)
}

function calculateTotal(products) {
    const total = products.reduce((acc, num) => {
        acc += num
        return acc
    }, 0)
    return total
}
console.log(findNumbersOnly(uncorruptedData))