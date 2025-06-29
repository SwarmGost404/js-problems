/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {{age: number, gender: string}[]} list
 * @returns {undefined|number}
 */
function census(list) {
    const males = list.filter(person => person.gender === 'Male');
    if (males.length === 0) {
        return undefined;
    }
    
    const oldestMaleIndex = males.reduce((oldestIndex, currentMale, currentIndex) => {
        return currentMale.age > males[oldestIndex].age ? currentIndex : oldestIndex;
    }, 0);
    
    // Находим оригинальный индекс в исходном массиве
    const originalIndex = list.indexOf(males[oldestMaleIndex]);
    return originalIndex + 1; // так как в примере нумерация с 1
}

module.exports = census;
