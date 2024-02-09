/** product: calculate the product of an array of numbers. */

function product(nums, idx=0) {
    if(idx === nums.length){
        return 1;
    }
    return nums[idx] * product(nums, idx+1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx=0, longestStr=0) {
    if(idx === words.length){
        return longestStr;
    }
    if(words[idx].length > longestStr){
        longestStr = words[idx].length
    }
    return longest(words, idx+1, longestStr)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx=0, newStr='') {
    if(idx >= str.length){
        return newStr;
    }
    newStr += str[idx];
    return everyOther(str, idx+2, newStr)
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=0, bkwrdStr='') {
    if(idx === str.length){
        return str === bkwrdStr;
    }
    bkwrdStr = str[idx] + bkwrdStr
    return isPalindrome(str, idx+1, bkwrdStr)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
    if(idx >= arr.length){
        return -1;
    }
    if(arr[idx] === val){
        return idx;
    }
    return findIndex(arr, val, idx+1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=0, newStr='') {
    if(idx === str.length){
        return newStr;
    }
    newStr = str[idx] + newStr
    return revString(str, idx+1, newStr)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
    let stringArr = []
    for(let key in obj){
        if(typeof obj[key] === 'string'){
            stringArr.push(obj[key])
        }
        if(typeof obj[key] === 'object'){
            stringArr.push(...gatherStrings(obj[key]))
        }
    }
    return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
