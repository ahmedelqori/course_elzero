/* =========== Data Types And Variables =========== */

/*
let num1 = 10;
let num2 = 20;

console.log(num1 + num2.toString()); // Normal Concatenate => 1020
console.log(typeof (num1 + num2.toString())); // Normal Concatenate => String
console.log(`${num1}${num2}`); // Template Literals Way => 1020
console.log(typeof `${num1}${num2}`); // Template Literals Way => String
console.log("Normal Concatenate\n" + num2 + "\n" + num1);
console.log(`Template literals Way \n${num2}\n${num1}`);
console.log(
  'I\'m In\n\\\\\nLove \\\\ """ \'\'\'\n++ With ++\n\\"""\\"""\n""JavaScript""``'
);
*/

/* ================= Operators ================= */

// console.log((10 * 20 * 15 * 3 * 190 * 10) % 400); // 0

// let num = 3;
// let a = true;
// let b = false;
// Solution One
// console.log(num * ++a); // 6

// Solution Two
// console.log(num * num - num); // 6

// Soultion Three
// console.log(num + num); // 6

// Soultion Four
// console.log(++a * a + --num); // 6

// Solution Five
// console.log((--num) ** num + ++a); // 6

// Solution Six
// console.log((++num) ** ++a / num + a); // 6

// let num = "10";

// Solution One
// console.log(+num * ++a); // 20

// Solution Two
// console.log(+num + +num); // 20

// Solution Three
// console.log((num * num) / (num / ++a)); // 20

// Solution Four
// console.log((+num / ++a) * (num / a - --a)); // 20

// let points = 10;

// Write Your Code Here

// console.log(++points + ++a); // 13

// Write Your Code Here

// console.log(points + a); // 8;

/* ================= Numbers ================= */
/*
// Your Solutions
console.log(10 * 10000); // 100000
console.log(5e4 * 2); // 100000
console.log(10 * 100 * 1e2); // 100000
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991
console.log((-Number.MIN_SAFE_INTEGER).toString().length); // 9007199254740991

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

let num = 10;

console.log(Number.isInteger(num) + true); // 2

let flt = 10.4;

console.log(Math.round(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(+flt.toFixed(0)); // 10
console.log(Math.trunc(flt)); // 10
console.log(+parseInt(flt)); // 10

console.log(+(Math.random() * 4 + 0).toFixed(0)); // 0 || 1 || 2 || 3 || 4
*/

/* ================= Strings And Methods ================= */

/*

let userName = "Elzero";
console.log(userName.charAt(3)); // e
console.log(userName.substring(3, 4)); // e
console.log(userName.charAt(userName.indexOf("e"))); // e
console.log(userName.slice(3, 4)); // e
console.log(userName.slice(userName.indexOf("e"), userName.indexOf("e") + 1)); // e
console.log(userName.charAt(3).repeat(3)); // eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True

*/

/* ================= Comparison & Logical Operators ================= */
/*
console.log(100 == "100"); // true
console.log(typeof 100 == typeof 1000); // true
console.log(110 < 100 + 10 + 20); // true
console.log(-10 == "-10"); // true
console.log(-50 < +"-40"); // true
console.log(10 < -"-40"); // true
console.log("10" == 10); // true
console.log(20 != false); // true

let num1 = 10;
let num2 = 20;

console.log(num1 < num2); // true
console.log(num1 != num2); // true
console.log(typeof num1 == typeof num2); // true
console.log(!(num1 == num2)); // true
console.log(!(num1 > num2)); // true
console.log(!(typeof num1 != typeof num2)); // true

let a = 20;
let b = 30;
let c = 10;

console.log((a < b && a > c) || a < b); // true
console.log(a < b || a > c); // true
*/
/* ================= if condition ================= */

// Test Case 1
// let num = 9; // "009"

// Test Case 2
// let num = 20; // "020"

// Test Case 3

// let num = 110; // "110"

// if (num < 10) {
//   console.log("00" + num);
// } else if (num >= 10 && num < 100) {
//   console.log("0" + num);
// } else if (num >= 100) {
//   console.log("" + num);
// }

// let num1 = 9;
// let str = "9";
// let str2 = "20";

// // Output
// if (num1 == str) {
//   console.log(true);
// }
// if (typeof num1 != typeof str) {
//   console.log(true);
// }
// if (num1 !== str2) {
//   console.log(true);
// }
// if (typeof str == typeof str2) {
//   console.log(true);
// }

/* ================= Switch ================= */
/*
let day = "   friday  ";
let result = day.trim().charAt(0).toUpperCase() + day.trim().substring(1);

switch (result) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointment Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("Its Not A Valid Day");
    break;
}
*/

/* ================= Array ================= */

/*
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

console.log(myFriends.reverse().slice(-num).reverse()); // ["Ahmed", "Elham", "Osama"];

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.length = --friends.length;
friends.reverse();
friends.length = --friends.length;
friends.reverse();
console.log(friends); // ["Eman", "Osama"]

*/
/*
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(finalArr.concat(arrOne.concat(arrTwo)).sort().reverse()); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].substring(website.length).toUpperCase()); // ZERO
*/
/*
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log(true);
}

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
arr1.reverse();
arr1.length == --arr1.length;
arr1.slice(--arr1.length);
arr2.reverse();
arr2.length == --arr2.length;
arr2.length == --arr2.length;
console.log(arr1.concat(arr2).sort().join("").toLowerCase()); // fxy
*/

/* ================= Loop ================= */

// let start = 10;
// let end = 100;
// let exclude = 40;

// for (let i = start; i <= end; i += start) {
//   if (i == exclude) {
//   } else [console.log(i)];
// }

/*
let start = 10;
let end = 0;
let stoop = 3;

for (let i = start; i >= stoop; i--) {
  console.log(i);
}
*/
/*
let start = 1;
let end = 6;
let breaker = 2;

for (let i = start; i <= end; i++) {
  console.log(i);
  console.log("-- " + breaker + "\n" + "-- " + (breaker + breaker));
}
*/

/*

let index = 10;
let jump = 2;
let end = 0;

for (;;) {
  console.log(index);
  index -= jump;
  if (index == jump) {
    break;
  }
}

// Output
10;
8;
6;
4;
*/
/*
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

// Output
for (let i = letter.length; i < friends.length; i++) {
  for (let j = letter.length - 1; j < friends[i].length; j++) {
    if (friends[i][j] == letter) {
      console.log(`${i} => ${friends[i]}`);
      i;
    }
  }
}
*/

/* ================= Function ================= */

/*
function sayHello(theName, theGender) {
  if (theGender == "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender == "Female") {
    console.log(`Hello Mr ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
*/

/*

function calculate(firstNum, secondNum, operation) {
  if (secondNum == null) {
    console.log("Second Number Not Found");
  } else if (operation == "add" || operation == null) {
    console.log(firstNum + secondNum);
  } else if (operation == "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation == "multiply") {
    console.log(firstNum * secondNum);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
*/

/*
function ageInTime(theAge) {
  if (theAge >= 110) {
    console.log("Age Out Of Range");
  } else {
    console.log(theAge * 12 + " Months");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
*/
/*

function checkStatus(a, b, c) {
  let arr = [a, b, c];
  let x = "";
  let y = "";
  let z;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string") {
      x = `Hello ${arr[i]}`;
    } else if (typeof arr[i] == "number") {
      y = `Your Age Is ${arr[i]}`;
    } else if (typeof arr[i] == "boolean") {
      if (arr[i] == true) {
        z = `You Are Available For Hire`;
      } else if (arr[i] == false) {
        z = `You Are Not Available For Hire`;
      }
    }
  }
  console.log(x + ", " + y + ", " + z);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
*/

/*
function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);
*/

/* ================= Function And Scopes ================= */

/*

function getDetails(zName, zAge, zCountry) {
  function namePattern() {
    return (
      zName.substring(0, zName.indexOf(" ")) +
      " " +
      zName.charAt(zName.indexOf(" ") + 1).toUpperCase() +
      "."
    );
  }
  function ageWithMessage() {
    return parseInt(zAge);
  }
  function countryTwoLetters() {
    return zCountry.substring(0, 2).toUpperCase();
  }
  function fullDetails() {
    return (
      "Hello " +
      namePattern() +
      "," +
      " Your Age Is " +
      ageWithMessage() +
      ", Your Live In " +
      countryTwoLetters()
    );
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
*/
/*
let itsMe = () => {
  return `Iam A Normal Function`;
};

console.log(itsMe()); // Iam A Normal Function

let urlCreate = (protocol, web, tld) => {
  return `${protocol}://www.${web}.${tld}`;
};

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
*/
/*
let checker = (zName) => {
  return (status) => {
    return (salary) => {
      return status === "Available"
      ? `${zName}, My Salary Is ${salary}`
      : `Iam Not Avaialble`;
    };
  };
};

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble
*/
/*
function specialMix(...data) {
  let array = [...data];
  let arr1 = array.map(function (ele) {
    return parseInt(ele);
  });

  let arr2 = arr1.filter(function (ele) {
    return !Number.isNaN(ele);
  });
  let count = 0;

  for (let i = 0; i < arr2.length; i++) {
    count += arr2[i];
  }
  return count > 0 ? count : "All is Integer";
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
*/

/* ================= Higher Order Functions ================= */

/*
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let result = mix
  .map(function (ele) {
    return typeof ele == "string" ? ele : "";
  })
  .reduce(function (acc, curr) {
    return acc + curr;
  });
  
  console.log(result);
  */
/*
let myString = "EElllzzzzzzzeroo";
let array = myString.split("");
let result = myString.split("").filter(function (ele, index, arr) {
  return array.indexOf(ele) == index;
});

console.log(result);
*/
/*
let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray
  .reduce(function (acc, curr) {
    return acc.concat(curr);
  }, [])
  .join("");
  
  console.log(newArray);
  */
/*
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let result = numsAndStrings
.filter(function (ele) {
  return typeof ele != "string";
})
  .map((ele) => {
    return -ele;
  });

  console.log(result);
*/
/*
let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce(function (acc, curr, index, arr) {
  return curr % 2 == 0 ? acc * curr : acc + curr;
});
console.log(result);
*/

/* ================= Object Methode ================= */
/*
// Create Your Object Here
let member = {
  name: "Elzero",
  age: 38,
  country: "Egypt",
  fullDetails: function () {
    return `My Name Is ${this.name}, My Age Is ${this.age}, I live in ${this.country}`;
  },
};

console.log(member.name); // Elzero
console.log(member.age); // 38
console.log(member.country); // Egypt
console.log(member.fullDetails());
// My Name Is Elzero, My Age Is 38, I Live in Egypt
*/
/*
// Method One
let objMethodOne = {
  property: "Methode One",
};

console.log(objMethodOne.property); // "Method One"

// Method Two

let objMethodTwo = new Object();
objMethodTwo.property = "Methode Two";
console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = Object.create({});
objMethodThree.property = "Methode Three";

console.log(objMethodThree.property); // "Method Three"
*/
/*
let a = 1;

let threeNums = {
  b: 2,
  c: 3,
  d: 4,
};

let twoNums = {
  e: 5,
  f: 6,
};

let finalObject = Object.assign(threeNums, twoNums);

console.log(finalObject); // {b: 2, c: 3, d: 4, e: 5, f: 6}b: 2c: 3d: 4e: 5f: 6[[Prototype]]: Object
*/
// The Object To Work With
/*
let myFavGames = {
  "Trinity Universe": {
    publisher: "NIS America",
    price: 40,
  },
  "Titan Quest": {
    publisher: "THQ",
    bestThree: {
      one: "Immortal Throne",
      two: "Ragnarök",
      three: "Atlantis",
    },
    price: 50,
  },
  YS: {
    publisher: "Falcom",
    bestThree: {
      one: "Oath in Felghana",
      two: "Ark Of Napishtim",
      three: "origin",
    },
    price: 40,
  },
};

let objectLength = Object.keys(myFavGames);

for (let i = 0; i < objectLength.length; i++) {
  console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
  console.log(
    `The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`
  );
  console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

  if (myFavGames[Object.keys(myFavGames)[i]].bestThree != undefined) {
    console.log("- Game Has Releases");
    console.log(
      `First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`
    );
    console.log(
      `Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`
    );
    console.log(
      `Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`
    );
  }
  console.log("#".repeat(20));
}
*/

/* ================= Document Object Model ================= */

/*
let div = document.createElement("div");
let text = document.createTextNode("Javascript");

div.id = "elzero";
div.className = "element";
div.setAttribute("name", "js");
div.appendChild(text);

document.body.appendChild(div);
*/
/*
for (let i = 0; i < 10; i++) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://lh3.googleusercontent.com/ogw/AOh-ky1zErkUPUWnvkhOPXsFcevHvNpzYgOl78J0Fr3oEA=s32-c-mo"
  );
  img.setAttribute("alt", "Elzero Logo");
  div.appendChild(img);
  document.body.appendChild(div);
}
*/
/*
let input = document.querySelector("input");
let div = document.querySelector("div");

input.oninput = function () {
  let value = input.value;
  let usd = (1 * value).toFixed(2);
  let ma = (10.99 * value).toFixed(2);
  div.innerText = "{" + usd + "}" + " USD Dollar = {" + ma + "} Maroc Dirham";
};
*/
/*
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let a = one.innerText;
let x = one.title;

one.title = two.title;
two.title = x;

one.innerText = two.innerText;
two.innerText = a + " " + one.attributes.length;

console.log(one);
console.log(two);
*/
/*
let img = document.querySelectorAll("img");

for (let i = 0; i < img.length; i++) {
  if (!img[i].alt) {
    img[i].alt = "Elzero New";
  } else {
    img[i].alt = "Old";
  }
  console.log(img[i]);
}
*/
/*
<form action="">
      <input
        type="number"
        name="elements"
        class="input"
        placeholder="Number Of Elements"
      />
      <input
        type="text"
        name="texts"
        class="input"
        placeholder="Elements Text"
      />
      <select name="type" class="input">
        <option value="Div">Div</option>
        <option value="Section">Section</option>
      </select>
      <input type="submit" name="create" value="Create" />
      <div class="results"></div>
    </form>
    <button>try</button>
*/
/*
let input = document.querySelectorAll("input");
let result = document.querySelector("div");
let select = document.querySelector("select");
let button = document.querySelector("button");
button.onclick = function () {
  for (let i = 1; i <= input[0].value; i++) {
    let div = document.createElement(select.value);
    let par = document.createTextNode(input[1].value);
    div.className = "box";
    div.setAttribute("title", input[1].value);
    div.id = "id-" + i;

    div.style.color = "white";
    div.style.backgroundColor = "red";
    div.style.fontSize = "11px";
    div.style.padding = "10px";
    div.style.display = "inline-block";
    div.style.margin = "10px";
    div.style.borderRadius = "10px";

    div.appendChild(par);
    result.appendChild(div);
  }
};
*/
/* ================= Browser Object Model ================= */
/*
let data = prompt("Print Number From – To", "Example: 5-20");

let array = data.split("-").sort(function (a, b) {
  return a - b;
});

for (let i = +array[0]; i <= +array[1]; i++) {
  console.log(i);
}
*/
/* ================= Destructuring ================= */
/*

let myNumbers = [1, 2, 3, 4, 5];
[a, b, c, d, e] = myNumbers;

// Write Your Destructuring Assignment Here

console.log(a * e); // 5
*/

/*
let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

[a, b, c, [d, e, [f, g]]] = mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel
*/
/*
let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

let [, a] = arr3;
let [b, ,] = arr2;
let [c, ,] = arr1;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
*/
/*
const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

const {
  age: a,
  working: w,
  country: c,
  hobbies: [h1, , h3],
} = member;

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming
*/
/*
const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

const {
  title: t,
  developer: d,
  releases: {
    "Oath In Felghana": [u, j],
    "Ark Of Napishtim": { US: u_price, JAP: j_price },
    Origin: or,
  },
} = game;
const { "Oath In Felghana": o, "Ark Of Napishtim": a } = game.releases;

// Write Your Destructuring Assignment/s Here

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(`My Best Release Is ${o} It Released in ${u} & ${j}`);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in Japan Is ${j_price}`);
// Ark Of Napishtim Price in Japan Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD
*/

/* ================= Map And Set ================= */

/*
let setOfNumbers = new Set([10]);

setOfNumbers.add(20).add(setOfNumbers.size);

console.log(setOfNumbers);

console.log(Array.from(setOfNumbers).pop());
*/
/*
let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// Needed Output
//(4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

let mySet = new Set(myFriends.sort());

console.log(mySet);
*/
/*
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let myNewMap = new Map(Object.entries(myInfo));
// myNewMap.set(Object.keys(myInfo)[0], myInfo.username);
// myNewMap.set(Object.keys(myInfo)[1], myInfo.role);
// myNewMap.set(Object.keys(myInfo)[2], myInfo.country);

console.log(myNewMap);
console.log(myNewMap.size);
console.log(myNewMap.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true
*/
/*
let theNumber = 100020003000;

console.log(
  +Array.from(new Set(theNumber.toString()), (n) => (n == 0 ? "" : n)).join("")
);
// Needed Output
// 123;
*/
/*
let theName = "Elzero";

console.log([...theName]);

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
*/
/*
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

console.log(chars.copyWithin(3, 0, 5));

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
*/
/*
let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

console.log(chars.sort().copyWithin(0, 4, 8));

// Needed Output
//["A", "B", "C", "D", "A", "B", "C", "D", "E"];
*/
/*
let chars = ["Z", "Y", "A", "D", "E", 10, 1];

console.log(chars.copyWithin(4, 2, 5).copyWithin(2, 0, 2));

// Needed Output
// ["Z", "Y", "Z", "Y", "A", "D", "E"];
*/
/*
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);

// Needed Output
// [1, 2, 3, 4, 5, 6]
*/
