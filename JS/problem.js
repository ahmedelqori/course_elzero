/*====================[1]==================== */

///////////////////////////////////////////////
/*
let a = 10;
let b = 20;

console.log(a.toString() + b); // Normal Concatenate => 1020
console.log(typeof (a.toString() + b)); // Normal Concatenate => String
console.log(`${a.toString() + b}`); // Template Literals Way => 1020
console.log(`${typeof (a.toString() + b)}`); // Template Literals Way => String
console.log(b + "\n" + a);
console.log(`${b}
${a}`);
*/
///////////////////////////////////////////////

/*
let elzero = document.querySelector("elzer");

console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object
*/
///////////////////////////////////////////////

/*

`I'm In
\\
Love \\ """ '''
++ With ++
\"""\"""
""JavaScript""``

console.log(
  '`I\'m In\n\\\\\nLove \\\\ """ \'\'\'\n++ With ++\n\\"""\\"""\n""JavaScript""``'
);
*/

///////////////////////////////////////////////

/*
let a = 21;
let b = 20;

console.log("_" + a + "_"); // _21_2021_2021_2021_20_
*/
///////////////////////////////////////////////
/*

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

for (let i = 0; i < friends.length; i++) {
  if (friends[i][0] === "M") {
    console.log(`" 2 => ${friends[i]} "`);
  } else if (friends[i][0] === "S") {
    console.log(`" 1 => ${friends[i]} "`);
  }
}

*/
///////////////////////////////////////////////

/*
function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName} `);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
*/

//////////////////////////////////////////
/* 
function calculate(firstNum, secondNum, operation) {
  if (operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  } else if (secondNum === undefined) {
    console.log("Second Number Not Found");
  } else {
    console.log(firstNum + secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
*/

/////////////////////////////////////////
/*
function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Age Out Of Range");
  } else {
    console.log(`${theAge * 12} Months`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
*/
//////////////////////////////////////////
/*
function checkStatus(a, b, c) {
  if (typeof a === "string") {
    console.log(`Hello ${a}`);
  } else if (typeof b === "string") {
    console.log(`Hello ${b}`);
  } else {
    console.log(`Hello ${c}`);
  }
  if (typeof a === "number") {
    console.log(`Your Age Is ${a}`);
  } else if (typeof b === "number") {
    console.log(`Your Age IS ${b}`);
  } else {
    console.log(`Your Age Is ${c}`);
  }
  if (typeof a === "boolean") {
    if (a === true) {
      console.log(`Your Are Avaible For Hire`);
    } else {
      console.log(`Your Are Not Avaible For Hire`);
    }
  }
  if (typeof b === "boolean") {
    if (b === true) {
      console.log(`Your Are Avaible For Hire`);
    } else {
      console.log(`Your Are Not Avaible For Hire`);
    }
  }
  if (typeof c === "boolean") {
    if (c === true) {
      console.log(`Your Are Avaible For Hire`);
    } else {
      console.log(`Your Are Not Avaible For Hire`);
    }
  }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
*/

//-------------Reverse && split && Join  -----------------
/*
function split_num(num) {
  let n = num + "";
  const arr = [];
  let str = "";
  for (let i = n.length - 1, j = 0; i >= 0; i--, j++) {
    arr[j] = n[i];
    str = str + arr[j];
  }
  return str;
}
console.log(split_num(12345));
*/ /*
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
  let c = "" + ab;
  const c_reverse = [];
  for (let x = c.length - 1, y = 0; x >= 0; x--, y++) {
    c_reverse[y] = +c[x];
  }
  return c_reverse;
};*/
/*
var addTwoNumbers = function (l1, l2) {
  while (l1 || l2) {
    let val1 = 0;
    let val2 = 0;
    if (l1) {
      val1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      val2 = l2.val;
      l2 = l2.next;
    }
    let sum = val1 + val2;
  }
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
console.log(addTwoNumbers([0], [0]));
console.log(addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]));
*/
