const fs = require('fs');
const data = fs.readFileSync('day-03.input.txt', 'utf8');

// // scan the corrupted memory for uncorrupted mul instructions

// // use regex to remove the corrupted mul instructions
// // const regex = /mul\(\d{1,3},\d{1,3}\)/g
// // mul: matches the literal word "mul"
// // \( : matches the opening parenthesis
// // \d{1, 3} : matches between 1 and 3 digits
// // , : matches the comma
// // \d{1,3} : matches another sequence between 1 and 3 digits
// // \) : matches the closing parentehsis
// // /g : glow search. it makes the regular expression search for all instances of the pattern, rather than just stopping at the first match. 

// // regular expressions (regex)
// // search for patterns
// // perform replacements
// // validate inputs

// const regex = /mul\(\d{1,3},\d{1,3}\)/g
// const uncorruptedData = data.match(regex)
// const regex2 = /\d{1,3},\d{1,3}/g

// function findNumbersOnly(uncorruptedData) {
//     const numbersOnly = uncorruptedData.map(string => string.match(regex2))
//     return transformNumbers(numbersOnly)
// }

// function transformNumbers(numbersOnly) {
//     const transformedNumbers = numbersOnly.map(subarray => {
//         const [num1, num2] = subarray[0].split(",").map(str => parseInt(str))
//         return [num1, num2]
//     })
//     return calculateProducts(transformedNumbers)
// }

// function calculateProducts(transformedNumbers) {
//     const products = transformedNumbers.map(item => item[0] * item[1])
//     return calculateTotal(products)
// }

// function calculateTotal(products) {
//     const total = products.reduce((acc, num) => {
//         acc += num
//         return acc
//     }, 0)
//     return total
// }
// console.log(findNumbersOnly(uncorruptedData))

// part 2
// let data = "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64]don't()(mul(11,8)do()?mul(8,5))don't()*{what();why()&>*mul(353,892)select()why()(mul(648,3)how()don't()<~{mul(771,164)mul(576,453)$why()}-@'mul(967,581)* %{:when()where(){*<"
// at the beginning of the program instructions are enabled 
    // all code until the first don't() is good
// look for the first don't and replace all that code
// then look for the second don't 

// do() enables future mul instructions
// don't() disables future mul instructions 

// remove anything that follows the word don't until a do is reached using lookaheads and lookbehinds. 

const regex = /don't\(\)[\s\S]*?(?=do\(\)|$)/g
const newData = data.replace(regex, " ")


// don't\(\) matches the literal string don't()
// [\s\S]*?: Non-greedy match for any characters (including newlines), which matches everything between don't() and the first do() (or the end of the string).makes this match non-greedy.
// (?=do\(\)|$): Positive lookahead that ensures the match stops at do() (if found) or the end of the string ($), ensuring that we don't accidentally remove parts after the last don't() if no do() is present.

// finds all occurences of don't() followed by anything up to the first do(), but will only remove everything bettwen (including don't()) and keep the do() intact.

const regex2 = /mul\(\d{1,3},\d{1,3}\)/g
const uncorruptedData = newData.match(regex2)
const regex3 = /\d{1,3},\d{1,3}/g

function findNumbersOnly(uncorruptedData) {
    const numbersOnly = uncorruptedData.map(string => string.match(regex3))
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