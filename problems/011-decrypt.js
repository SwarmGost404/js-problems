/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const creater = secret.split("")
    let res = '';
    for (item of creater) {
        if (item === "z") {
            res = res + "a"
        } else if (item === " ") {
            res = res + " "
        } else {
            res = res + alphabet[alphabet.indexOf(item) + 1]
        }
    }
    return res
}

module.exports = decrypt;
