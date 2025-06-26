/**
 * Напишите функцию isPalindrome(value) определяющую,
 * является ли переданная строка палиндромом, то есть строкой,
 * которая одинаково читается слева направо и справа налево.
 *
 * Пример:
 *
 * isPalindrome('121') === true
 * isPalindrome('boob') === true
 * isPalindrome('true') === false
 *
 * @param {string} value
 * @returns {boolean}
 */



function isPalindrome(value) {
    
    let start = 0
    let end = value.length - 1

    while (start < end) {
        if (value[start] !== value[end]) {
            return false
        }

        start++
        end = end - 1
    }
    return true
}

module.exports = isPalindrome;
