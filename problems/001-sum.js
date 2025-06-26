/**
 * Напишите функцию sum(n) возвращающую положительное целое число – сумму чисел,
 * расположенных между 1 и N включительно.
 *
 * Пример:
 *
 * sum(0) === 1
 * sum(5) === 15
 *
 * Больше примеров в тестах
 *
 * @param {number} n целое число
 * @returns {number}
 */
function sum(n) {
    if (n < 1) {
        let char = n;
        let res = 0
        while (char < 1) {
            res += char

            char++
        }
        return res
    }

    let char = 1;
    let res = 0
    while (char !== n) {
        res += char

        char++
    }
    return res
    
}

module.exports = sum;
