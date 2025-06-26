/**
 * Счастливым билетом называют такой билет с шестизначным номером,
 * где сумма первых трех цифр равна сумме последних трех.
 *
 * Напишите функцию checkTicket(number) которая проверяет счастливость билета.
 *
 * Пример:
 *
 * checkTicket('005212') === true
 * checkTicket('133700') === true
 * checkTicket('123032') === false
 *
 * @param {string} number
 * @returns {boolean}
 */
function checkTicket(number) {
    const fistHalph = number.slice(0, 3).split('')
    const secondHalph = number.slice(3, 6).split('')
    const res1 = fistHalph.reduce((acc, num) => acc + Number(num), 0);
    const res2 = secondHalph.reduce((acc, num) => acc + Number(num), 0);
    if (res1 === res2) {
        return true
    }
    return false
}

module.exports = checkTicket;
