function isPalindrome(str) {
  const baseStr = str.replaceAll(/[.,'"?! ]/g, "").toLowerCase()
  const reverseStr = baseStr.split("").reverse().join("")
  return(reverseStr === baseStr)
}

console.log('It is %s that "%s" is a palindrome.',isPalindrome("Chloe"), "Chloe")
console.log('It is %s that "%s" is a palindrome.',isPalindrome("Racecar"), "Racecar")
console.log('It is %s that "%s" is a palindrome.',isPalindrome("Taco cat"), "Taco cat")
console.log('It is %s that "%s" is a palindrome.',isPalindrome("Mr. owl ate my metal worm"), "Mr. owl ate my metal worm")
console.log('It is %s that "%s" is a palindrome.',isPalindrome("No 'x' in Nixon"), "No 'x' in Nixon")