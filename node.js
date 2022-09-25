
// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。
// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
// 例如，121 是回文，而 123 不是。。
var isPalindrome = function (x) {
  // let str =x.toString()
  // let arr=str.split('')
  // let newArr=str.split('').reverse()
  // console.log(arr.join(''),newArr.join(''))
  // if(arr.join('')==newArr.join('')){
  //     return true
  // }else{
  //     return false
  // }
  return x == x.toString().split('').reverse().join('')
}
console.log(isPalindrome(121))

var longestCommonPrefix = function (strs) {
  let re = strs[0] || ""
  if (strs.length == 1) {
    return strs[0]
  }
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].slice(0, re.length) !== re) {
      re = re.slice(0, re.length - 1)
    }
  }
  return re
}
console.log(longestCommonPrefix(["a","flow","flight"]))
