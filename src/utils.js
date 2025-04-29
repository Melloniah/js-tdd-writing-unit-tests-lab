// Your code here

export function isPalindrome(str){
    const reversed =str.toLowerCase().split('').reverse().join('')
    return reversed === str.toLowerCase()
}