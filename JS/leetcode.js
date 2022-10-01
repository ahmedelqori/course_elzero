/*==============Problem 1==============*/
/*
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
 for (let x = 0; x < nums.length; x++) {
   if (nums[i] + nums[x] === target && i != x) {
     return[i,x];
   }
 }
}
};
*/
/*==============Problem 2==============*/

/*
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.*/
/*

*/
/*
var addTwoNumbers = function (l1, l2) {
  var l1a = Number(l1.join(""));
  var l2a = Number(l2.join(""));
  let a = l1a + l2a;
  let b = Array.from(a.toString().split("").reverse());
  let c = b.map(function (ele) {
    return Number(ele);
  });
  return c;
};
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));

*/
/*==============Problem [1] HackerRank==============*/
/*
let res = 0;
function aVeryBigSum(ar) {
    let array = ar
  for (let i = 0; i < array.length; i++) {
    res += array[i];
  }
  return res ;
}
*/
/*
var addTwoNumbers = function (l1, l2) {
  let l1a = l1.reduce(function (acc, current) {
    return `${acc}${current}`;
  });
  let l2a = l2.reduce(function (acc, current) {
    return `${acc}${current}`;
  });
  let a = +l1a + +l2a;
  let b = Array.from(a.toString().split("").reverse());
  let c = b.map(function (ele) {
    return Number(ele);
  });
  return c;
};
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
*/
/*
var addTwoNumbers = function (l1, l2) {
  let l1a = l1;
  let a = "";
  for (let i = 0; i < l1a.length; i++) {
    a += l1a[i];
  }
  let l2a = l2;
  let b = "";
  for (let j = 0; j < l2a.length; j++) {
    b += l2a[j];
  }
  const ab = +a + +b;
  let c = ab.toString();
  const c_reverse = [];
  for (let x = c.length - 1, y = 0; x >= 0; x--, y++) {
    c_reverse[y] = +c[x];
  }
  return c_reverse;
};
console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
*/

////////////////////////////////////////////
/*
var isPalindrome = function (x) {
  let array = x;
  let b = array.toFixed(0).split("").reverse().join("") - 0;

  return b == array ? true : false;
};
console.log(isPalindrome(121));
console.log(isPalindrome(10));
console.log(isPalindrome(-121));
*/
/*
let a = 144;
let b = a.toFixed().split("").reverse().join("");
let c = Number(b);
console.log(c);
if (a === c) {
  console.log(true);
} else {
  console.log(false);
}
*/
///////////////////////////
/*
var lengthOfLongestSubstring = function (s) {
  let string = s.split("").slice(0, 5);
  s = string.filter(function (v, i, self) {
    return self.indexOf(v) === i;
  });

  return s.join("").length;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
console.log(lengthOfLongestSubstring("ctnkh"));







*/
////////////////////////////////////////////////
function diagonalDifference(arr) {
  let result = [0, 0];
  for (let i = 0; i, arr.length; i++) {
    let a = arr[i][i + 0],
      b = arr[i][arr.length - 1 - i];
    result = [result[0] + a, result[1] + b];
  }
  return Math.abs(result[0] - result[1]);
}

console.log(
  diagonalDifference([[3], [(11, 2, 4)], [(4, 5, 6)], [(10, 8, -12)]])
);
