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
 * n = -100
 */
function sum(n) {
    if (n <= 1) {
        return 1
    }

    let char = 1;
    let res = 0;
    while (char <= n) {
        res = res + char
        char = char + 1
    }
    return res;
    
}

module.exports = sum;
