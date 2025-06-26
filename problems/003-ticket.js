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
const sum = (str) => [...str].reduce((acc, digit) => acc + +digit, 0);

function checkTicket(number) {
  const left = number.slice(0, 3);
  const right = number.slice(3, 6);

  return sum(left) === sum(right);
}


module.exports = checkTicket;
