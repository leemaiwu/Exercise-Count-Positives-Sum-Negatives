function countPositivesSumNegatives(input) {
    if (input === null || input.length === 0) {
        return []
    } else {
    let positiveCount = 0
    let negatives = []
    let answer = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            positiveCount+= 1
        } else if (input[i] < 0) {
            negatives.push(input[i])
        }
    }
    answer.push(positiveCount)
    answer.push(negatives.reduce((a, c) => a + c, 0))
    return answer
}
}

console.log(countPositivesSumNegatives(null))
console.log(countPositivesSumNegatives([]))
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
