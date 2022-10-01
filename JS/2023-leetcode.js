/*---------------- 1. Two Sum -------------*/

/*
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] + nums[j] === target && i != j) {
        return [i, j];
      }
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
*/

/*----------------  9. Palindrome Number -------------*/

/*

var isPalindrome = function (x) {
  let xString = x + "";
  let array = [];
  let xReverse = "";
  for (let i = xString.length - 1, k = 0; i >= 0; i--, k++) {
    array[k] = xString[i];
    xReverse = xReverse + array[k];
  }
  return xReverse === xString ? true : false;
};


var isPalindrome = function (x) {
  let array = x;
  let b = array.toFixed(0).split("").reverse().join("") - 0;
  return b == array ? true : false;
};


console.log(isPalindrome(121)); //true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // true
*/

/*---------------- 14. Longest Common Prefix -------------*/
/*
var romanToInt = function (s) {
  let a = 0;
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  var nums = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "I" && (s[i + 1] == "V" || s[i + 1] == "X")) {
      nums += symbols[s[i + 1]] - symbols[s[i]];
      i++;
    } else if (s[i] == "X" && (s[i + 1] == "L" || s[i + 1] == "C")) {
      nums += symbols[s[i + 1]] - symbols[s[i]];
      i++;
    } else if (s[i] == "C" && (s[i + 1] == "D" || s[i + 1] == "M")) {
      nums += symbols[s[i + 1]] - symbols[s[i]];
      i++;
    } else {
      nums += symbols[s[i]];
    }
  }
  return nums;
};
console.log(romanToInt("III"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("MCMXCIV"));
*/

/*---------------- 20. Valid Parentheses -------------*/
/*
var isValid = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" && s[i + 1] == ")") {
      i++;
      return true;
    } else if (s[i] == "[" && s[i + 1] == "]") {
      i++;
      return true;
    } else if (s[i] == "{" && s[i + 1] == "}") {
      i++;
      return true;
    } else {
      return false;
    }
  }
};
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("{[]}"));
*/

/*---------------- 14. Longest Common Prefix -------------*/

var longestCommonPrefix = function (strs) {
  let array = [];
  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j, strs.length; j++) {
      if (strs[i][j] == strs[i + 1][j]) {
        array[i][j] = strs[i][j];
        console.log(array[j][j]);
      } else {
        `""`;
      }
    }
    return array.join("");
  }
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
console.log(longestCommonPrefix(["ab", "a"]));
