/**
 * Напишите функцию sortTimestamps(list) сортирующую список временных моментов.
 *
 * Пример:
 *
 * sortTimestamps(['23:02:59', '02:07:00']) === ['02:07:00', '23:02:59']
 *
 * @param {string[]} list массив временных моментов представленных в виде строк в формате 'HH:MM:SS'
 * @returns {string[]} отсортированный по возрастанию массив временных моментов
 */

function getSeconds(timeStr) {
    const arr = timeStr.split(':').map(Number);
    return arr[0] * 3600 + arr[1] * 60 + arr[2]
};
function getTimeString(seconds) {
    return [
        Math.floor(seconds / 3600),
        Math.floor(seconds % 3600 / 60),
        seconds % 3600 % 60
    ].map(arg => {
        if (arg < 10) {
            return "0" + String(arg)
        } else {
            return arg
        }
    }).join(":")
};
function sortTimestamps(list) {
    return list.map(arg => getSeconds(arg)).sort((a, b) => a - b).map(arg => getTimeString(arg))
};
module.exports = sortTimestamps;
