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
  return n < 1 ? 1 : (n * (n + 1)) / 2;
}
// 4/5

module.exports = sum;