/**
 * С числами Фибоначчи мы уже познакомились в прошлой задаче.
 *
 * Напишите функцию isFibonacci(value) которая определяет, является ли value числом Фибоначчи.
 *
 * Пример:
 *
 * isFibonacci(1) === 1
 * isFibonacci(2) === 3
 * isFibonacci(55) === 10
 * isFibonacci(52) === undefined
 *
 * @param {number} value
 * @returns {undefined|number}
 */
function isFibonacci(value) {
    let res = [0, 1]
    while (res[res.length  - 1] < value) {
        res.push(res[res.length  - 1] + res[res.length  - 2])
    }
    if (res.indexOf(value) !== -1) {
        return res.indexOf(value)
    }
    return undefined
}

module.exports = isFibonacci;
