/**
 * Известны результаты каждой из 4х четвертей баскетбольной встречи.
 * Нужно определить победителя матча. Побеждает команда,
 * набравшая больше очков в течение всего матча.
 *
 * Напишите функцию getWinner(points) возвращающую номер победившей команды,
 * либо undefined в случае ничьей.
 *
 * Пример:

 * getWinner(['23-26', '24-30', '30-27', '35-31']) === 2
 * getWinner(['36-32', '32-24', '20-28', '30-26']) === 1
 * getWinner(['36-18', '22-31', '27-21', '19-34']) === undefined
 *
 * @param {string[]} points
 * @returns {(number|undefined)}
 */
function getWinner(points) {
  let res1 = 0;
  let res2 = 0;

  for (const score of points) {
    const [a, b] = score.split("-").map(Number);
    res1 += a;
    res2 += b;
  }

  if (res1 > res2) return 1;
  if (res2 > res1) return 2;
  return undefined;
}
// 4/5

module.exports = getWinner;
