/*--------------- Video #004 ----------------*/

/* 
Just Console 
*/

/*--------------- Video #005 ----------------*/

/*
document.querySelector("h1").style.color = "Blue";

//Or

window.onload = function () {
  document.querySelector("h1").style.color = "blue";
};
*/

/*--------------- Video #007 ----------------*/

/*
window.alert("Hello Ahmed");

document.write("<p>Hello <span>Page</span></p>");

console.log("Hello");

*/

/*--------------- Video #008 ----------------*/

/*
    console Methode
        log
        error
        table
    
    Web API

    Styling Console
        Directive %c

*/
/*
console.log("Log");
console.error("Error");
console.table(["Ahmed", "Zakaria", "Youssef"]);
console.log(
  "HEllo From %cJS %cFile",
  "color:red; font-size:40px",
  "color:blue;font-size:20px"
);
*/

/*--------------- Video #009 ----------------*/

/*
    ES6 = ECMASCRIPT6
*/

/*
var myName = "Ahmed";
console.log("Hello " + myName);
console.log(`Hello ${myName}`);
*/

/*--------------- Video #010 ----------------*/

/*
    Data Types Intro
        -String
        -Number
        -Object
        -boolean
*/

/*
console.log("Ahmed Elqori"); //String
console.log(typeof "500"); //string

console.log(500); //number
console.log(typeof 500); //number

console.log([10, 15, "Ahmed"]); //object
console.log(typeof [10, 15, "Ahmed"]); // Array Bust We Say Object

console.log({ name: "Ahmed", age: 19, country: "Morocco" }); //object
console.log(typeof { name: "Ahmed", age: 19, country: "Morocco" }); //object

console.log(true); //boolean
console.log(typeof true); //boolean

console.log(undefined); //undefined
console.log(typeof undefined); //undefined

console.log(null); //object
console.log(typeof null); //Object

*/

/*--------------- Video #011 ----------------*/

/*
    Variable Intro
*/

/*
var user = "Ahmed Elqori",
  age = 19;
console.log(user + " " + age + " years");

video11.innerHTML = " Modifie Value";

*/

/*--------------- Video #012 ----------------*/

/*
    Identifiers
        Name Convection And Rules
        Reserved Words
*/

/*--------------- Video #013 ----------------*/

/*
  Var
    - Redeclare ( YES )
    - Access before Declare ( Undefind)
    - Variable Scope Drama ( Yes )
    - Block or Function Scopre
  
  Let
    - Redeclare ( NO )
    - Access before Declare ( Error)
    - Variable Scope Drama ( No )
    - Block or Function Scopre
    
  Const
    - Redeclare ( NO )
    - Access before Declare ( Error)
    - Variable Scope Drama ( NO )
    - Block or Function Scopre

*/

/*
var a = 1;
var a = 2;
console.log(a);

// let b = 1;
let b = 2;
console.log(b);

// const c = 1;
const c = 2;
console.log(c);

// console.log(d);
// let d = 2;

let e = 1;
console.log(e); // No Scope Drama;

*/

/*--------------- Video #014 ----------------*/

/*
  String Syntax + Character escpae Sequences
    \ escape + Line Continue
    \n
*/

/*
console.log('Ahmed Elqori "Age 19" \\');
console.log("Ahmed Elqori \nAge \n19");
console.log("Ahmed Elqori \
Age \
19");

*/

/*--------------- Video #015 ----------------*/

/*
    Concatenation
*/

/*

let a = "We Love";
let b = "JavaScript";
console.log(a + " " + b);
console.log(a, b);

*/

/*--------------- Video #016 ----------------*/

/*
  Template Literals (Template Strings)
*/

/*
let a = "We love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

console.log(a + ' "" ' + b + "\n" + c + " " + d);
console.log(`${a} ${b} "" \\ ${100 * 10} 
${c} ${d}`);

let title = "Ahmed";
let desc = "Ahmed Elqori";
let markUp = `
  <div class="card">
    <div class="child">
      <h2> ${title} </h2>
        <p>${desc}</p>
    </div>
  </div>
`;
document.write(markUp);
*/

/*--------------- Video #017 ----------------*/

/*
----------------------------------------------
----------------||Challenge|[1]|-----------------
----------------------------------------------
  
[1] Create 3 Variable [title , Decription, Date]
--All in One Statement;
--Variable Name Must Be Two Words;
--Title Content IS "Ahmed"
--Description Content Is "Ahmed ElQori"
--Date is "01/03"

[2] Creat Variable Contains Div And This Div Contains
--H3 For Title
--P for Paragraph
--Span For Time

[3] Add This Card to Page 4 times

[4] Use Template Literals For Concatenate
*/

/*
let titleIs = "Ahmed";
let descriptionIs = "Ahmed ELQORI";
let dateIs = "01/03";

let card = `
  <div>
    <h3>${titleIs}</h3>
    <p>${descriptionIs} </p>
    <span> ${dateIs}</span>
  </div>
`;
document.write(card.repeat(4));
*/

/*--------------- Video #018 ----------------*/

/*
  Arithmetic Opertaoes
    + Addition 
    - Subtraction
    * Multiplication
    / Division
    ** Exponentiation (ES7)
    % Modulus (Dicision Remainder)
    ++ Increement [ Post / Pre]
    -- Decrement [ Post / Pre]
*/

/*
console.log(10 + 20);
console.log(10 + " Osama");
console.log(typeof (10 + " Osama"));

console.log(10 - 20);
console.log(10 - " Osama"); //Nan => not a number
console.log(typeof NaN);

console.log(10 * 20);
console.log(10 * -20);

console.log(10 / 20);
console.log(10 / 2);

console.log(2 ** 4);

console.log(10 % 2); // => 0
console.log(11 % 2); // => 1
console.log(35 % 2); // => 1

let a = 1;
a++;
console.log(a); // => a = 2

let b = 1;
b--;
console.log(b); // => b = -1
*/

/*--------------- Video #019 ----------------*/

/*
  - + Unary Plus [Return Number If not Number]
  - - Unary Negation [Return Number If Its not Number + Negates It]
  Tests
    - Normal Number
    - String Number
    - String Negtaive Number
    - String Text
    - Float 
    - Hexadecimal Numeral System => 0xFF
    - null
    - false
    - true
*/

//Unary Plus

/*
console.log(+100);
console.log(+"100"); // Transform String to Number
console.log(+"-100");
console.log(+"Osama"); //NaN
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);
*/

//Unary Negation

/*
console.log(-100);
console.log(-"100"); // Transform String to Number
console.log(-"-100");
console.log(-"Osama"); //NaN
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);
*/

//console.log(Number("100")); // Transform String to Number

/*--------------- Video #020 ----------------*/

/*
  Type Coercion ( Type Casting)
    - +
    - -
    - "" - 2
    - false - true
*/

/*
let a = "10";
let b = 20;
let c = true;

console.log(a + b); //string
console.log(+a + b); //Number
console.log(b - a); //10
console.log(+""); //0
console.log(+"" - 2); //-2
console.log(false - true); //-1
console.log(+false - +true); //-1
console.log(+false - -true); //1
console.log(b + c); //21
console.log(a + b + c); //1020true
console.log(+a + b + c); //31
*/

/*--------------- Video #021 ----------------*/

/*
  Assignment Operators
*/

/*
let a = 10;

a = a + 20;
a = a + 70;
a += 100; // a = a + 100
a -= 50; // a = a - 50
a /= 50; // a = a / 50
a *= 3; // a = a * 3

console.log(a); // a = 9
*/

/*--------------- Video #022 ----------------*/

/*
----------------------------------------------
----------------||Challenge|[2]|--------------
----------------------------------------------
*/

// Challenge [2-1]:

/*

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++); //100
console.log(++a + -b + +c++ - -a++ + +a); //100
console.log(--c + +b + --a * +b++ - b * a + --a - +true); //100

*/

//challenge [2-2]:

/*

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * +e); //2000
console.log(-d + ++e * ++g + ++f); //173

*/

/*--------------- Video #023 ----------------*/

/*
  Number
    - Double Precision
    - Syntactic Sugar "_"
    - e
    - **
    - With Decimal
    - Number + BigInt
    - Number Min value
    - Number Max Value
*/

/*

console.log(1000000); // 1000000
console.log(1_000_000); // 1000000
console.log(1e6); // 1000000
console.log(10 ** 6); // 1000000
console.log(10 * 10 * 10 * 10 * 10 * 10); // 1000000
console.log(1000000.0); // 1000000

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 1000000000000);

*/

/*--------------- Video #024 ----------------*/

/*
  number Methods:
    - Two Dots To Call A Methodes
    - tostring()  100..toString()
    - tofixed()
    - parseInt()
    - parseFloat()
    - isInteger() [ES6]
    - isNaN()[ES6]
*/

/*
console.log((100).toString());
console.log((100).toString());

console.log((10.555555).toFixed()); // 11
console.log((10.555555).toFixed(1)); // 10.6

console.log(Number("100 Ahmed")); // NaN
console.log(+"100 Ahmed"); // NaN
console.log(parseInt("100 Ahmed")); // string to Number
console.log(parseInt(" AHmed 100 Ahmed")); // NaN

console.log(parseInt("100.500 Float")); // 100
console.log(parseFloat("100.500 Float")); // 100.5

console.log(Number.isInteger("100")); // False
console.log(Number.isInteger(100.5)); // False
console.log(Number.isInteger(100)); // True

console.log(Number.isNaN("Ahmed")); // False
*/

/*--------------- Video #025 ----------------*/

/*
  Math Object
    -round()
    -ceil()
    -floor()
    -min()
    -max()
    -pow()
    -random()
    -trunc() [ES6]
*/

/*
console.log(Math.round(99.2)); // 99
console.log(Math.round(99.5)); // 100

console.log(Math.ceil(99.2)); // 100
console.log(Math.ceil(99.9)); // 100

console.log(Math.floor(99.2)); // 99
console.log(Math.floor(99.9)); // 99

console.log(Math.min(10, 20, -100, 100, 90)); // -100
console.log(Math.max(10, 20, -100, 100, 90)); // 100

console.log(Math.pow(2, 4)); // 2 ** 4

console.log(Math.random());

console.log(Math.trunc(99.5)); // 99
*/

/*--------------- Video #026 ----------------*/

/*
----------------------------------------------
----------------||Challenge|[3]|--------------
----------------------------------------------
*/

/*

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number in All Variable And Return interger

console.log(Math.min(a, b, c, d).toFixed());

// Use variable a + d One Time To Get The Needed Output

console.log(Math.pow(a, Math.floor(d))); // 10000

// Get interger " 2 " From d Variable With 4 Methods

console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(Number(d.toFixed()));

// Use Variable b + d  To Get This Value

console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 String
console.log(Math.ceil(Math.floor(b) / Math.ceil(d))); // 67 => Number

*/

/*--------------- Video #027 ----------------*/

/*
  String Methods
    - Access With index
    - Access With charAT()
    - length
    - trim()
    - toUpperCase()
    - toLowerCase()
    - chain Methods
*/

/*
let theName = "Ahmed";
let theList = [1, 2, 3, 4, 5];
let lastName = " Elqori ";

console.log(theName);
console.log(theName[1]); // h  index

console.log(theName.charAt(1)); // h
console.log(theName.charAt(5)); // Undefind

console.log(theName.length); //5

console.log(lastName.length);
console.log(lastName.trim()); // Remove Space

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(lastName.trim().charAt(1).toUpperCase()); // L
*/

/*--------------- Video #028 ----------------*/

/*
  String Methods
    - indexOf(Value [Mand], Start [Opt] 0)
    - lastIndexOf(Value [Mand], start [Opt] Length)
    - slice(Start [Mand], End [Opt] not Include End)
    - repeat(times) [ES6]
    - split(Seperator [opt], Limit [Opt])

*/

/*

let a = "Elqori Ahmed";
console.log(a.indexOf("Ahmed")); // 7
console.log(a.indexOf("Ahmed", 8)); // -1

console.log(a.indexOf("o")); // 3

console.log(a.lastIndexOf("Ahmed", 8)); // 7

console.log(a.slice(2)); // qori Ahmed
console.log(a.slice(0, 6)); // Elqori

console.log(a.slice(-5, -2)); // Ahm

console.log(a.repeat(5));

console.log(a.split(" "));

*/

/*--------------- Video #029 ----------------*/

/*
  String Methods
    ---- substring(Start [Mand], End [Opt not Including End])
      - Start > End Will Swap
      - Start < 0 It Start From 0
      - Use Length To Get Last Character
    ----Substr (Start [Mand], Characters To Extract)
      - Start => Length = "" 
      - Negative Start From End
    ----Includes(Valure [Mand], Start [Opt] Default 0  )[ES6]
    ----StartWith(Value [Mand], Start [Opt] Default 0 )[ES6]
    ----endWith(Value [Mand], Lenth[Opt] Default Full Length)
*/

/*

let a = "Elzero Web School";

console.log(a.substring(2)); // zero Web School
console.log(a.substring(2, 6)); // zero
console.log(a.substring(6, 2)); // zero
console.log(a.substring(-10)); // Elzero Web School
console.log(a.substring(-10, 6)); // Elzero
console.log(a.substring(0, 6)); // Elzero
console.log(a.substring(a.length - 1)); // l
console.log(a.substring(a.length - 5, a.length - 3)); // ch

console.log(a.substr(7)); // Web School
console.log(a.substr(-3)); // ool
console.log(a.substr(-5, 2)); // ch

console.log(a.includes("Web")); //true
console.log(a.includes("Web", 8)); //false

console.log(a.startsWith("E")); // true
console.log(a.startsWith("E", 2)); // false
console.log(a.startsWith("zero", 2)); // true

console.log(a.endsWith("l")); // true
console.log(a.endsWith("o")); // false
console.log(a.endsWith("o", 6)); // true
*/

/*--------------- Video #030 ----------------*/

/*
----------------------------------------------
----------------||Challenge|[4]|--------------
----------------------------------------------
*/

/*

let a = "Elzero Web School";

//Include This Methode In Your Solution [slice, charAT];

console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); //Zero

// 8 H

console.log(a.charAt(13).toUpperCase().repeat(8));

// return Array

console.log(); // [Elzero]

//Use Only "substr" methode + Template Literals In Your Solution

console.log(a.substr(0, 6) + a.substr(10, 17)); // Elzero School

// Solution Must Be Dynamic And String May Change

console.log(
  a.charAt(0).toLowerCase() +
    a.slice(1, a.length - 1).toUpperCase() +
    a.charAt(a.length - 1).toLowerCase()
); // elZERO WEB SCHOOL

*/

/*--------------- Video #031 ----------------*/

/*
  Comparison Operator
    - == Equal
    - != Not Equal

    - === Identical
    - !== Not Identical

    - > Larger Than
    - >= Larger Than Or Equal

    - < Smaller Than
    - <= Smaller Than Or Equal
*/

/*

console.log(10 == "10"); // true
console.log(-100 == "-100"); // true

console.log(10 != "10"); // false
console.log(10 != "11"); // true

console.log(10 === "10"); // flase => Compare Value + type
console.log(10 === 10); // true => Compare Value + type

console.log(10 !== "10"); // true
console.log(10 !== 10); // false

console.log(10 > 20); // false
console.log(20 >= 10); // true

console.log(10 < 20); // true
console.log(10 <= 20); // true

console.log(typeof "Ahmed" === typeof "Elqori"); // true

*/

/*--------------- Video #032 ----------------*/

/*
  Logical Operators
    - ! Not
    - && And
    - || or

*/

/*

console.log(true); // true
console.log(!true); // False
console.log(10 == "10"); // True
console.log(!(10 == "10")); // Flase

console.log(10 == "10" && 10 > 8 && 10 >= 10); // true
console.log(10 == "10" && 10 > 8 && 10 >= 80); // false

console.log(10 == "10" || 10 > 8 || 10 >= 10); // true
console.log(10 == "10" || 10 > 8 || 10 >= 80); // true

*/

/*--------------- Video #033 ----------------*/

/*
  Control Flow
    - if
        if(condition){
          //Block Of code
        }
    - else if
    - else
*/

/*

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Syria";

if (discount === true) {
  price = price - discountAmount;
} else if (country === "Egypt") {
  price -= discountAmount;
} else if (country === "Morocco") {
  price -= 40;
} else {
  price -= 25;
}

console.log(price);

*/

/*--------------- Video #034 ----------------*/

/*
    Nested Condition
*/

/*
let price = 100;
let discount = false;
let discountAmount = 10;
let country = "Syria";
let student = true;

if (discount === true) {
  price = price - discountAmount;
} else if (country === "Egypt") {
  price -= discountAmount + 10;
} else if (country === "Morocco" && student === true) {
  price -= discountAmount + 30;
} else if (country === "Morocco" && student === false) {
  price -= discountAmount + 20;
} else {
  price -= discountAmount;
}
console.log(price);
*/

/*

let price = 100;
let discount = false;
let discountAmount = 30;
let country = "Morocco";
let student = true;

if (discount === true) {
  price -= discountAmount;
} else if (country === "Morocco") {
  if (student === true) {
    price -= discountAmount + 10;
  } else {
    price -= 20;
  }
} else {
  price -= 10;
}
console.log(price);

*/

/*--------------- Video #035 ----------------*/

/*
  Conditional (Tenary ) Operator
*/

/*

let theName = "Ahmed";
let theGender = "Male";
let theAge = 30;

if (theGender === "Male") {
  console.log("Mr");
} else {
  console.log("Mrs");
}

// Condition ? if True : If Flase

theGender === "Male" ? console.log("Mr") : console.log("Mrs");

// Or

let result = theGender === "Male" ? "Mr" : "Mrs";

console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${theName}`);

console.log(`Hello ${result} Ahmed`);

theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 to 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unknown");

*/

/*--------------- Video #036 ----------------*/

/*
  Logical Or ||
    -- Null + Undefined + Any Falsy Value
  Nullish Coalescing Operator ??
    -- Null + Undefind

*/

/*

let price = 0;
console.log(`The Price is ${price || 200}`); // 200
console.log(`The Price is ${price ?? 200}`); // 0

*/

/*--------------- Video #037 ----------------*/

/*----------------------------------------------
----------------||Challenge|[5]|--------------
----------------------------------------------
*/

// if Challenge

/*

let a = 10;

if (a < 10) {
  console.log(10);
} else if (a >= 10 && a <= 40) {
  console.log("10 To 40");
} else if (a > 40) {
  console.log("More Than 40");
} else {
  console.log("Unknown");
}

a < 10
  ? console.log(10)
  : a >= 10 && a <= 40
  ? console.log("10 To 40")
  : a > 40
  ? console.log("More Than 40")
  : console.log("Unknown");

// Write With Ternary If Syntax

let st = "Elzero Web school";

if (typeof st === typeof "34") {
  console.log("Good");
}

// W Position may Change

if (st.charAt(7).toLowerCase() === "w") {
  console.log("Good");
}

if (st !== "string") {
  console.log("Good");
}

if (typeof st.length === "number") {
  console.log("Good");
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
}

*/

/*--------------- Video #038 ----------------*/

/*
  ----Switch Statement----
    
  switch (expression){
      case 1:
        // Code Block
        break;
      case 2 :
        // Code block
        break;
      Default :
        // Code Block
    }
    - Default Ordering
    - Multiple Match
*/

/*

let day = 2;

switch (day) {
  case 0:
    console.log("Saturday");
    break;
  case 1:
    console.log("Sunday");
    break;
  case 2:
  case 3:
    console.log("Monday");
    break;
  default:
    console.log("Unknown Day");
    break;
}

*/

/*--------------- Video #039 ----------------*/

/*
----------------------------------------------
----------------||Challenge|[6]|--------------
---------------------------------------------
*/

// Switch Challenge

/*
let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

// Answer

switch (job) {
  case "Manager":
    salary = 8000;
    console.log(salary);
    break;

  case "IT":
  case "Support":
    salary = 6000;
    console.log(salary);
    break;

  case "Developer":
  case "Designer":
    salary = 7000;
    console.log(salary);
    break;

  default:
    salary = 4000;
    console.log(salary);
}
*/

// If Challenger

/*
let holidays = 0;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;

  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}

// Answer
let holidays = 0;
let money = 0;

if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}

*/

/*--------------- Video #040 ----------------*/

/*
  Array
    - creat Arrays [Two Methods] new Array()+[]
    - Acces Array Element
    - Nested Arrays
    - Change Arrays Elements
    - Check For Array Array.isArray(arr)
*/

/*

let myFriend = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

console.log(`Hello ${myFriend[0]}`); // Ahmed
console.log(`Hello ${myFriend[1]}`); // Mohamed
console.log(`Hello ${myFriend[2][4]}`); // d
console.log(`Hello ${myFriend[3][1]}`); // Ali
console.log(`Hello ${myFriend[3][1][2]}`); // i

console.log(myFriend);

myFriend[1] = "Othmane"; // Replace "Mohamed" => "Othmane"
console.log(myFriend);

myFriend[2] = ["Holla", "Hello", "hi"];
console.log(myFriend); // Replacec Element with Array

console.log(typeof myFriend); // Object
console.log(Array.isArray(myFriend)); // True

*/

/*--------------- Video #041 ----------------*/

/*
  Arrays Methods
    Length
*/

/*

// index Start Form 0 [0, 1, 2, 3]

let myFriend = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myFriend.length); // 4

myFriend[3] = "Gamal";
myFriend[6] = "Ameer"; // Add Element To Array

console.log(myFriend);

// Or Add Element Dynamic

myFriend[myFriend.length] = "Omar";
console.log(myFriend);

// Or Replace Element Dynamic

myFriend[myFriend.length - 1] = "Hammoood";
console.log(myFriend);

// Cut Array

myFriend.length = 3;
console.log(myFriend);

*/

/*--------------- Video #042 ----------------*/

/*
  Arrays Methods [ Adding Add Removing]
    - unshift(" "," ") Add Element To The First
    - push(" "," ") Add Element to The End
    - shift() Remove First Element From Array
    - pop() Remove Last Element From Array
*/

/*

let myFriend = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(myFriend);

myFriend.unshift("Osama", "Nabil");
console.log(myFriend);

myFriend.push("Samah", "Imane");
console.log(myFriend);

myFriend.shift(); // Or let first = myFriend.shift()
console.log(myFriend);

myFriend.pop();
console.log(myFriend); // Or let Two = myFriend.pop()

*/

/*--------------- Video #043 ----------------*/

/*
  Arrays Methods [Search]
    - indexOf(Search Element, From Index [Opt])
    - lastIndexOf( Search Element, From Index [Opt])
    - includes ( ValueToFind, fromIndex [Opt] [ES7])
*/
/*

let myFriend = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];

console.log(myFriend);

console.log(myFriend.indexOf("Ahmed")); // index 0
console.log(myFriend.indexOf("Ahmed", 2)); // index 4

console.log(myFriend.lastIndexOf("Ahmed")); // Index 4
console.log(myFriend.lastIndexOf("Ahmed", 3)); // Index 0

console.log(myFriend.includes("Ahmed")); // true
console.log(myFriend.includes("Ahmed", 2)); // true

if (myFriend.indexOf("Ahmed") === -1) {
  console.log("Not Found");
}

*/

/*--------------- Video #044 ----------------*/

/*
  Arrays Methods [Sort]
    - sort(Function [opt])
    - reverse
*/

/*

let myFriend = [10, "Sayed", "Mohamed", "90", 1000, 100, 20, "10", -20, -10];

console.log(myFriend);
console.log(myFriend.sort()); // 1 2 3 4 5 a b c d e
console.log(myFriend.reverse()); // - element
console.log(myFriend.sort().reverse());

*/

/*--------------- Video #045 ----------------*/

/*
  Arrays Methods [Slicing]
    
  - slice(Start [Opt], End [Opt] Not Including End)
    --- slice() => All Array
    --- If Start Is Undefined => 0
    --- Negative Count From End
    --- If End Is undefined || > Indeexes => Slice ToThe End Array.length
    --- Return New Array
    
  -splice(Start [Mand], DeleteCount [Opt] [0 No Remove], The Items To Add [Opt])
  --- If Negative => Start From The End 
*/

/*

let myFriend = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(myFriend);

console.log(myFriend.slice());
console.log(myFriend.slice(1));
console.log(myFriend.slice(1, 3));
console.log(myFriend.slice(-3, 1));
console.log(myFriend.slice(1, -2));

//myFriend.splice(0, 0, "Samir");
console.log(myFriend);

myFriend.splice(0, 1, "Samir");
console.log(myFriend);

*/

/*--------------- Video #046 ----------------*/

/*
  Arrays Methodes [Joining]
    - concat(array, array) => Return A New Array
    - join(Separator) 
*/

/*

let myFriend = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriend = ["Samar", "Sameh"];
let schoolFriend = ["Haytam", "Shady"];

let allFriend = myFriend.concat(myNewFriend, schoolFriend, "Gameel", [
  "Omar",
  "Ammar",
]);

console.log(allFriend);

console.log(allFriend.join());
console.log(allFriend.join(" "));
console.log(allFriend.join(" - ")); // array to strings

*/

/*--------------- Video #047 ----------------*/

/*
----------------------------------------------
----------------||Challenge|[7]|--------------
---------------------------------------------  
*/

// Arrays Challenges
/*
let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
*/
// Write Code Here

//console.log(my.slice(zero, counter++ + ++zero).reverse()); // ["Osama","Elham","Mazero","Ahmed"]

//console.log(my.slice(++zero, counter).reverse()); // ["Elham", "Mazero"]

/*

console.log(
  my
    .slice(--counter, ++counter)
    .join()
    .substring(--counter, zero) +
    my
      .slice(++zero, counter)
      .join()
      .substring(++zero)
); // "Elzero"

*/

/*
console.log(
  my
    .slice(++zero, ++zero)
    .join()
    .substring(++counter)
    .charAt(length) +
    my
      .slice(--zero, ++zero)
      .join()
      .substring(++counter)
      .toUpperCase()
); // "rO"
*/

/*--------------- Video #048 ----------------*/

/*
  Loop
    - for ([1] [2] [3]) {
      // BLock Of Code
    }
*/

/*

for (let i = 0; i < 10; i++) {
  console.log();
}

*/

/*--------------- Video #049 ----------------*/

/*
  Loop
    - Loop On Sequences
*/
/*
let myFriend = [1, 2, "Osama", "Ahmed", "Sayed", "Ali"];
let onlyNames = [];
*/
/*
console.log(myFriend[0]);
console.log(myFriend[1]);
console.log(myFriend[2]);
console.log(myFriend[3]);
console.log(myFriend[4]);
*/

/*

for (let i = 0; i < myFriend.length; i++) {
  console.log(myFriend[i]);
}

*/

// if Condition

/*

if (typeof myFriend[0] === "string") {
  onlyNames.push(myFriend[0]);
}
if (typeof myFriend[1] === "string") {
  onlyNames.push(myFriend[1]);
}
if (typeof myFriend[2] === "string") {
  onlyNames.push(myFriend[2]);
}
if (typeof myFriend[3] === "string") {
  onlyNames.push(myFriend[3]);
}
if (typeof myFriend[4] === "string") {
  onlyNames.push(myFriend[4]);
}
console.log(onlyNames);

*/

// Loop

/*

for (let i = 0; i < myFriend.length; i++) {
  if (typeof myFriend[i] === "string") {
    onlyNames.push(myFriend[i]);
  }
}
console.log(onlyNames);

*/

/*--------------- Video #050 ----------------*/

/*
  Loop
    - Nested loops
*/

/*

let product = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < product.length; i++) {
  console.log(` # ${product[i]}`);
  for (let j = 0; j < colors.length; j++) {
    console.log(`---- ${colors[j]}`);
  }
  for (let k = 0; k < models.length; k++) {
    console.log(`------- ${models[k]}`);
  }
}

*/

/*--------------- Video #051 ----------------*/

/*
  Loop
    - Break
    - Continue
    - Label
*/

/*

let product = ["Keyboard", "Mouse", "Pen", 20, 30, 40, "Pad", "Monitor"];

let colors = ["Red", "Green", "Black"];

mainloop: for (let i = 0; i < product.length; i++) {
  if (typeof product[i] === "number") {
    continue;
  }
  console.log(`# ${product[i]}`);

  nestedloop: for (let j = 0; j < colors.length; j++) {
    if (colors[j] === "Green") {
      break nestedloop;
    }
    console.log(` - ${colors[j]}`);
  }
}

*/

/*--------------- Video #052 ----------------*/

/*
  Loop For Advenced example
*/

/*

let product = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];

let i = 0;

for (;;) {
  console.log(product[i]);
  i += 2;
  if (i === product.length) {
    break;
  }
}

*/

/*--------------- video #053 ----------------*/

/*
  Product Practice
*/

/*

let product = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];
let colors = ["Red", "Green", "Blue"];
let showCount = 5;

document.write(`<h2> Show ${showCount} Products</h2>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${product[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`<p>${colors.join(" | ")}</p>`);
  document.write(`</div>`);
}

*/

/*--------------- video #054 ----------------*/

/*
  Loop
    - While
*/

/*

let product = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];

let i = 0;

while (i < product.length) {
  console.log(product[i]);
  i++;
}

*/

/*--------------- video #055 ----------------*/

/*
  Loop
    - Do / While
*/

/*

let product = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iphone"];

let i = 0;

do {
  console.log(i);
  i++;
} while (false);

console.log(i);

*/

/*--------------- video #056 ----------------*/

/*
----------------------------------------------
----------------||Challenge|[8]|--------------
---------------------------------------------
*/

//Loop Challenge

/*

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];
let count = 0;

document.write(`<div>We have X admins</div>`);

for (let x = 0; x < myAdmins.length; x++) {
  if (myAdmins[x] === "Stop") {
    document.write(`<div>We have ${[x]} admins<br/><hr/></div>`);
  }
}

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    break;
  }

  document.write(
    `<div><hr/>The Admins For The Team ${[i + 1]} is ${
      myAdmins[i]
    }<br/><h3>Team Member:</h3>
    </div>`
  );

  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][0] === myAdmins[i][0]) {
      document.write(`<p>- ${++count} ${myEmployees[j]}`);
    }
  }
  count = 0;
}

*/

/*--------------- video #057 ----------------*/

/*
  Function
    - What Is function ?
    - User Defined Vs Built In 
    - Syntax + Basic Usage
    - Example From Real Life
    - Parameter + Argument
    - Practical Example
*/

/*

console.log(typeof console.log); // Function

function sayHello(userName) {
  console.log(`Hi ${userName}`);
}
sayHello("Ahmed"); // hi Ahmed
sayHello("Zakaria");
sayHello("Abdo");

*/

/*--------------- video #058 ----------------*/

/*
  Function Advanced Examples
*/

/*

function sayHello(userName, age) {
  if (age < 18) {
    console.log(
      `My Friend ${userName} this App Is Not Suitable For You , Because Your Age ${age} < 18`
    );
  } else {
    console.log(`Hi ${userName} your Age is ${age}`);
  }
}

sayHello("Ahmed", 19); // hi Ahmed
sayHello("Zakaria", 19);
sayHello("Abdo", 20);
sayHello("Mounir", 10);

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}
generateYears(2003, 2022, 2020);

*/

/*--------------- video #059 ----------------*/

/*
  Function
    - Return
    - Automatice Semicolon Insertion [no Line terminator allowed]
    - Interruptting
*/

/*

function sayHello(userName) {
  return `Hello ${userName}`;
}

let result = sayHello("Ahmed");

console.log(result);

*/

/*

function calc(num1, num2) {
  return num1 + num2;
}

let result = calc(10, 20);

console.log(result);

*/

/*

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);s
    if (i === 15) {
      return;
    }
  }
}

generate(10, 20);// 10 => 15

*/

/*--------------- video #060 ----------------*/

/*
  Function
    - Default Function Parameters
    - Function Parameters Default [Undefined]
    - Old Strategues [ Condition + Logical Or]
    - ES6
*/

/*

function sayHello(userName, age = "Unknown") {
  if (age === undefined) {
    age = "unknown";
  }

  age = age || "unknown";
  return `Hi ${userName} your age is ${age}`;
}
console.log(sayHello("Ahmed", 19)); // hi Ahmed your age is 19
console.log(sayHello("Ahmed")); // hi Ahmed your age is unknown

*/

/*--------------- video #061 ----------------*/

/*
    Function 
      - Rest Parameters
      - Only One Allowed
      - Must Be Last Element
*/

/*
function calc(num1, num2, num3) {
  return num1 + num2 + num3;
}
console.log(calc(10, 20, 10, 30, 50));

*/

/*

function calc(...numbers) {
  // console.log(Array.isArray(numbers));
  let result = 0;

  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
console.log(calc(10, 20, 10, 30, 50)); // 120

*/

/*--------------- video #062 ----------------*/

/*
  Function
    - Paramters
    - default
    - Rest 
    - Loop
    - Condition
*/

/*
function showInfo(us = "unknown", ag = "unknown", rt = 0, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>welcome, ${us}</h2>`);
  document.write(`<p> Age: ${ag}</p>`);
  document.write(`<p> Hour Rate:  ${rt}$</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      document.write(`<p>Skills :${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills No Skills</p>`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }
  document.write(`</div>`);
}
showInfo("Ahmed", 19, 20, "Yes", "Html", "CSS", "JavaScript");
*/

/*--------------- video #063 ----------------*/

/*
==============================================
================||Challenge|[9]===============
==============================================
*/

/*
  Function - random Argument Challenge
  ====================================
    Create Function showDetails
    Function Accept 3 Parameters [ a, b, c]
    Data Ttpes For Info Is
      - String => Name
      - Number => Age
      - Boolean => Status
    Argument Is Random
    Data Is Not Started Output Depend on Data Types
      -Use Ternary Conditional Operator
*/
/*

function showDetails(a, b, c) {
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

function showDetails(a, b, c) {
  info = [a, b, c];
  for (let i = 0; i < info.length; i++) {
    if (typeof info[i] === "string") {
      first = info[i];
    } else if (typeof info[i] === "number") {
      second = info[i];
    } else if (typeof info[i] === "boolean") {
      if (info[i] === true) {
        third = "Avaible";
      } else {
        third = "Not Avaible";
      }
    }
  }
  document.write(
    ` Hello ${first}, Your Age Is ${second}, You Are ${third} To Hire<br>`
  );
};

function showDetails(...data) {
  let name, age, isAvailable;

  for (let i = 0; i < data.length; i++) {
    typeof data[i] === "string"
      ? (name = data[i])
      : typeof data[i] === "number"
      ? (age = data[i])
      : data[i] === true
      ? (isAvailable = "Available")
      : (isAvailable = "Not Available");
  }

  result = `<div>
                <h2> Hello ${name}, Your Age Is ${age}, You Are ${isAvailable} For Hire </h2>
            </div>`;
  document.write(result);
}

showDetails("Ahmed", 19, true); // "Hello Ahmed, Your Age Is, Your Are Avaible For Hire"
showDetails(19, "Ahmed", true); // "Hello Ahmed, Your Age Is, Your Are Avaible For Hire"
showDetails(true, 19, "Ahmed"); // "Hello Ahmed, Your Age Is, Your Are Avaible For Hire"
showDetails(false, "Ahmed", 19); // "Hello Ahmed, Your Age Is, Your Are Not Avaible For Hire"

*/

/*--------------- video #064 ----------------*/

/*
  Function
    - Anonymous Function ,
    - Calling Named Function Vs Anonymous Function;
    - Argument To Other Function
    - Task Without Name;
    - SetTimeout
*/
/*

console.log(calc(10, 20));

function calc(num1, num2) {
  return num1 + num2;
}

let calculator = function (num1, num2) {
  return num1 + num2;
};
console.log(calculator(10, 20));


setTimeout(function () {
  console.log("Good");
}, 2000);

function sayHello() {
  console.log("Hello Ahmed");
}
document.getElementById("sayHello").onclick = sayHello;
*/

/*--------------- video #065 ----------------*/

/*
  Function
    - Function Inside Function
    - Return Function
*/

/*

function sayMessage(fName, lName) {
  let message = `Hello`;
  function concatMsg() {
    message = `${message} ${fName} ${lName}`;
  }
  concatMsg();
  return message;
}

console.log(sayMessage("Ahmed", "Elqori"));

*/

/*
function sayMessage(fName, lName) {
  let message = `Hello`;
  function concatMsg() {
    return `${message} ${fName} ${lName}`;
  }
  concatMsg();
  return concatMsg();
}

console.log(sayMessage("Ahmed", "Elqori"));

*/

/*

function sayMessage(fName, lName) {
  let message = `Hello`;
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  concatMsg();
  return concatMsg();
}

console.log(sayMessage("Ahmed", "Elqori"));

*/

/*--------------- video #066 ----------------*/

/*
  Function
    - Arrow Function
    -- Regular vs Arrow [ Param + No Param]
    -- Multiple Lines
*/

/*
let print = function () {
  return 10;
};
console.log(print());

let price = () => {
  return 100;
};
console.log(price());

let sell = ()  => 100;
console.log(sell());

let bye = (num1)  => num1; // or _
console.log(bye(20));
*/

/*--------------- video #067 ----------------*/

/*
  Scope 
    - Global And Local Scope
*/

/*

var a = 1;
let b = 2;

function showText() {
  var a = 10;
  let b = 20;
  console.log(`Function - Form Local ${a}`);
  console.log(`Function - Form llcal ${b}`);
}
showText();

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);
*/

/*--------------- video #068 ----------------*/

/*
  Scope
    -Block Scope [If,Switch,Ffor]

*/

/*

let x = 10;

if (10 === 10) {
  let x = 50;
  console.log(`From Local Scop ${x}`);
}

console.log(`From Global Scop ${x}`);
*/

/*--------------- video #069 ----------------*/

/*
  Scope
    - Lexical Scope
    
  Search
    - Execution Centext
    - Lexical Environment 
*/

/*

function parent() {
  let a = 10;
  function child() {
    console.log(a); // 10

    function grand() {
      let b = 100;
      console.log(`From Gran ${a}`); // From Gran 10
      console.log(`From Gran ${b}`); // From Gran 100
    }
    grand();
  }
  child();
}
parent();

*/

/*--------------- video #070 ----------------*/

/*
==============================================
================||Challenge|[10]===============
==============================================
*/

// Function Arrow Challenge

// [1] One Statement In Function;
// [2] One Convert To Arrow Function;
// [3] Print The Output [Arguments May Change]

/*
let names = function (...names) {
  //Paramter ?
  return `String [${names.join("], [")}] => Done !`;
};

console.log(names("Ahmed", "Mohamed", "Ali", "Ibrahim"));
// String [Osama] , [Mohamed], [Ali], [Ibrahim] => Done

*/
/*======================================================*/
/*
let myNumbers = [20, 50, 10, 60];

let calc = (one, two, ...nums) => one + two + nums.shift();

console.log(calc(10, myNumbers.shift(), myNumbers.shift())); // 80
console.log(0, myNumbers.shift(), myNumbers.shift());
*/

/*--------------- video #071 ----------------*/

/*
  Higher Order Function
    --> is a function that accepts functiond as parameters and/or returns a function


  Map
    --- methode creates a new array
    --- populated with the result of calling a provided function on every element
    --- in the calling array

  
  Syntax Map(callBackFunction(Element, Index, Array){ },thisArg)
  --- Element => the current element being processed in the array
  --- Index => The Index of The current element being processed in the array
  --- Array => The Current Array


  Notes
  --- Map Return A New Array

  Examples
  --- Anonymous Function
  --- Named Function


*/

/*

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

// Same Idea Whit Map

let addSelf = myNums.map(function (element, index, arr) {
  console.log(element);
  console.log(index);
  console.log(arr);
  return element + element;
}, 10);
console.log(addSelf);

//===================

function addition(ele) {
  return ele + ele;
}

let add = myNums.map(addition);
console.log(add);
*/

/*--------------- video #072 ----------------*/

/*
  Map
    - Swap Cases
    - Inverted Numbers
    - ignore Boolean Value
*/

/*

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumber = "Elz123er4o";

let sw = swappingCases
  .split("")
  .map(function (ele) {
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
  })
  .join("");

console.log(sw);

let inv = invertedNumbers.map(function (ele) {
  return -ele;
});

console.log(inv);

let ign = ignoreNumber
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");
console.log(ign);

*/

/*--------------- video #073 ----------------*/

/*
  Filter
    -- method creates a new array
    -- with all element that pass the test implemented by the provided function

    Syntax filter(callBackFunction(Element,Index,Array){ },thisArg)
      - Element => The current element being processed in the array
      - index => the index of the current element being processed in the array
      - Array => The Current Array
*/

/*

// Get Friend With Name Start Whit A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// Filter

let filterFriends = friends.filter(function (ele) {
  return ele[0] === "A" ? true : false; // ele.startWith("")
});

console.log(filterFriends); // ['Ahmed', 'Asmaa', 'Amgad']

//Get even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

// Test Map Vs Filter

let addMap = numbers.map(function (ele) {
  return ele + ele;
});
console.log(addMap);

let evenNumbers = numbers.filter(function (ele) {
  return ele % 2 === 0 ? true : false;
}); // [22, 40, 4, 10, 34, 20]

*/

/*--------------- video #074 ----------------*/

/*
  Filter
    - Filter Longest Word By Number
*/

// Filter Word More Than 4 Characters

/*
let sentence = "I love Foood code Too Playing Mush";

let smallWords = sentence
  .split(" ")
  .filter(function (ele) {
    return ele.length <= 4 ? true : false;
  })
  .join(" ");

console.log(smallWords); // I love code Too Mush

// Ignore Numbers

let ignoreNumbers = "Elz123er4o";

let ign = ignoreNumbers
  .split("")
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .join("");
console.log(ign); //Elzero

// Filter String + Multiplay

let mix = "A13BS2ZX";

let nun = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele * ele;
  })
  .join(",");
console.log(nun); // 1,9,4
*/

/*--------------- video #075 ----------------*/

/*
  Reduce 
    --- methide executes a reducer function a each element of the array
    --- resulting in a single output value.

*/

/*
let nums = [10, 20, 15, 30];

let add = nums.reduce(
  function (acc, current, index, arr) {
    console.log(`acc => ${acc}`); // 10
    console.log(`current  => ${current}`); //20
    console.log(`index  => ${index}`); //20
    console.log(`Array  => ${arr}`); //20
    console.log(acc + current); //30
    console.log(`##################`); //30
    return acc + current;
  })
*/

/*--------------- video #076 ----------------*/
/*
   Reduce
    - Longest Word
    - Remove Characters + Use Reduce
*/

/*
let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];

let check = theBiggest.reduce(function (acc, current) {
  return acc.length > current.length ? acc : current;
});
console.log(check); // Propaganda

///////////////////////////////////////
let removeChars = ["E", "@", "@", "L", "@", "Z", "@", "E", "R", "@", "O"];

let finalString = removeChars
  .filter(function (ele) {
    return ele != "@";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });
console.log(finalString);
*/

/*--------------- video #077 ----------------*/

/*
  -For Each 
    --- Methode executes a provided function once for each array element

  - Syntax forEach(callbackFunction(element,index,array){},thisArg)
   --- Index => The index if the current element being processed in the array
   --- Array => The Current Array

  -Note
   --- Doesnt Return Anything [Undefined]
   --- Break Will Note Break The Loop
*/
/*

let allList = document.querySelectorAll("ul li");
let allDiv = document.querySelectorAll(".video77_content div");

allList.forEach(function (ele) {
  ele.onclick = function () {
    allList.forEach(function (ele) {
      ele.classList.remove("active");
    });
    this.classList.add("active");
    // Hidden Div
    allDiv.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});

*/

/*--------------- video #078 ----------------*/

/*
let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString
  .split("")
  .filter((e, i) =>
    e == "," || i == myString.length - true || !isNaN(e) ? "" : e
  )
  .map((el) => (el == "_" ? " " : el))
  .reduce((cr, cu) => (cr == cu ? cr : cr + cu));

console.log(solution);
*/

/*--------------- video #079 ----------------*/

/*
  Object
    - Intro 
    - Testing Window Object
    - Accessing Object
*/
/*
let user = {
  // Properties
  theName: "Ahmed",
  theAge: 19,
  // Methods
  sayHello: function () {
    return `Hello`;
  },
};
console.log(user.theName);
console.log(user.theAge);
console.log(user.sayHello());
*/

/*--------------- video #081 ----------------*/
/*let user = {
  name: "Ahmed",
  age: 19,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },

  checkAv: function () {
    if (user.available === true) {
      return `Free ForWork`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills.join(" "));
console.log(user.skills[1]);
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user["addresses"]["egypt"]["one"]);

console.log(user.checkAv()); */
/*--------------- video #082 ----------------*/
/*
let user = new Object();

user.age = 19;
user["country"] = "Morocco";
user.sayHello = function () {
  return `Hello`;
};

console.log(user.sayHello());
console.log(user.age);
console.log(user.country);
*/
/*--------------- video #04 ----------------*/

/*
let user = {
  age: 40,
  doubleAge: function () {
    return this.age * 2;
  },
};
console.log(user);
console.log(user.age);
console.log(user.doubleAge());

let obj = Object.create({});

obj.a = 100;

console.log(obj);

let copyObj = Object.create(user);

copyObj.age = 19;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

*/
/*--------------- video #085 ----------------*/

/*
  Object 
    - Dig Deeper
    - Dot Notation
    - Dynamic Property Name

*/

/*
let myVar = "country";

let user = {
  theName: "Ahmed",
  "country of": "Morocco",
  100: "Number",
  country: "Morocco",
};

console.log(user.theName);
console.log(user["country of"]); // Morocco
console.log(user[100]); // Number
console.log(user[myVar]); // Morocco
console.log(user.myVar); // Undefined
*/

/*--------------- video #086 ----------------*/

/*
  DOM
  -What Is Dom
  -Dom Selectors
  ---Find Element By ID
  ---Find Element by Tag Name
  ---Find Element By Class Name
  ---Find Element By CSS Selectors
  ---Find Element By Collection
  -------title
  -------body
  -------images
  -------forms
  -------links
*/
/*
let myIdElement = document.getElementById("my-div");
let myTagElement = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("my-span");
let myQueryElement = document.querySelector(".special");
let myQueryAllElement = document.querySelectorAll(".my-span");

console.log(myIdElement);
console.log(myTagElement[0]); // to Access
console.log(myClassElement); // to Access
console.log(myQueryElement); // to Access
console.log(myQueryAllElement); // to Access [0]
console.log(document.title); // Document
console.log(document.body);
console.log(document.forms[0].one.value); // Hello
console.log(document.links[0].href); // Hello
*/

/*--------------- video #087 ----------------*/

/*
  DOM [ Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
    - innerText
*/

/*
let myElement = document.querySelector(".video-87");

console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML = "hello";
myElement.textContent = "<span> Hello </span>";

document.images[0].src = "https://google.com";
document.images[0].alt = "Alernate";
document.images[0].title = "Picture";
document.images[0].id = "Pic";

let myLink = document.querySelector(".a_link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://facebook.com");
myLink.setAttribute("title", "Link 1");
*/

/*--------------- video #088 ----------------*/

/*
  DOM  [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/
/*
console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") == "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "New Value");
  }
} else {
  console.log(`Not found`);
}

if (document.getElementById("one-p").hasAttributes()) {
  console.log(`Has Attributes`);
} else {
  console.log(`Has NO Attributes`);
}
*/

/*--------------- video #089 ----------------*/

/*
  DOM[Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/

/*
let myElement = document.createElement("div");
let myAttribute = document.createAttribute("data-custom");
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This IS My Comment");

myElement.className = "product";
myElement.setAttributeNode(myAttribute);
myElement.setAttribute("data-test", "Testing");

//Append  Text To Element

myElement.appendChild(myText);

//Append Comment to Element

myElement.appendChild(myComment);

//Append Element to Body

document.body.appendChild(myElement);

console.log(myElement);
*/

/*--------------- video #090 ----------------*/

/*
DOM [Create Elements]
  Practice Product With Heading And Paragraph
*/
/*
let myDiv = document.createElement("div");
let myH3 = document.createElement("h2");
let textH3 = document.createTextNode("Text");
let myPar = document.createElement("p");
let pText = document.createTextNode("Paragraphe");

myDiv.className = "product";

myH3.appendChild(textH3);
myPar.appendChild(pText);
myH3.appendChild(myPar);

myDiv.appendChild(myH3);

document.body.appendChild(myDiv);

for (let i = 1; i < 101; i++) {
  let myDiv = document.createElement("div");
  let myH3 = document.createElement("h2");
  let textH3 = document.createTextNode("Title " + i);
  let myPar = document.createElement("p");
  let pText = document.createTextNode("Paragraphe");

  myDiv.className = "product";

  myH3.appendChild(textH3);
  myPar.appendChild(pText);
  myH3.appendChild(myPar);

  myDiv.appendChild(myH3);

  console.log(myDiv);
}
*/

/*--------------- video #091 ----------------*/

/*
  DOM [ Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

/*
let myElement = document.querySelector("div");
console.log(myElement.children);
console.log(myElement.children[0]); // p , span
console.log(myElement.childNodes);
console.log(myElement.childNodes[0]); // Hello DIv

console.log(myElement.firstChild); // HEllo Div
console.log(myElement.lastChild); // Hello

console.log(myElement.firstElementChild); // Hello p
*/

/*--------------- video #092 ----------------*/

/*
    DOM [ EVENT ]
    - Use Events On HTML
    - Use Events On JS
    --- onclick
    --- oncontextmenu
    --- onmouseenter
    --- onmouseleave

    --- onload
    --- onscroll
    --- onresize
    
    --- onfocus
    --- onblur
    --- onsubmit

*/
/*

let myBtn = document.getElementById("btn");

myBtn.onclick = function () {
  console.log("click 2");
};
myBtn.onmouseleave = function () {
  console.log("click 2");
};
myBtn.onmouseenter = function () {
  console.log("click 2");
};

window.onscroll = function () {
  console.log("scroll");
};

window.onresize = function () {
  console.log("resize");
};
*/

/*--------------- video #093 ----------------*/

/*
  Event Simulation - Vlick Focus Blur
*/

/*
let userInput = document.querySelector("[name='username']");
let AgeInput = document.querySelector("[name='age']");

document.forms[0].onsubmit = function (e) {
  let userValid = false;
  let ageValid = false;
  if (userInput.value != "" && userInput.value.length <= 10) {
    userValid = true;
  }
  if (AgeInput.value != "") {
    ageValid = true;
  }

  if (userValid === false || ageValid === false) {
    e.preventDefault();
  }
};

document.links[0].onmouseenter = function (event) {
  console.log(event);
  event.preventDefault();
};
*/
/*--------------- video #094 ----------------*/

/*
    DOM [Event Simulation]
     - click
     - focus
     - blur

*/
/*
let one = document.querySelector(".one");
let two = document.querySelector(".two");

window.onload = function () {
  one.focus();
};
one.onblur = function () {
  two.focus();
};

two.onblur = function () {
  document.links[0].click();
};
*/
/*--------------- video #095 ----------------*/

/*
    DOM [ Class List]
    - classList
    --- Length
    --- contains
    --- item(index)
    --- add
    --- remove
    --- toggle
*/
/*
let element = document.getElementById("my-div");

console.log(element.classList.contains("ahmed"));
console.log(element.classList.contains("show"));
console.log(element.classList.item("2")); // show

element.onclick = function () {
  element.classList.remove("one", "two");
};
element.onclick = function () {
  element.classList.add("add-one", "add-two");
};
element.onclick = function () {
  element.classList.toggle("ahmed"); //add remove
};
*/
/*--------------- video #096 ----------------*/

/*
    DOM [CSS]
    - Style
    - cssText
    - removeProperty(propertyName) [inline,styleSheet]
    - setProperty(propertyName, vaue, priority)
*/
/*
let element = document.getElementById("my-div");

element.style.color = "red";
element.style.backgroundColor = "black";
element.style.cssText = "font-weight: blod;color:green;opacity:0.9";

element.style.removeProperty("color");
element.style.setProperty("color", "blue");

document.styleSheets[0].rules.style.setProperty("color", "black");
document.styleSheets[0].rules.style.removeProperty("color");
*/

/*--------------- video #097 ----------------*/

/*
    DOM [Deal With Elements]
    - before [elements || String]
    - After [elements || String]
    - append [elements || String]
    - prepend [elements || String]
    - remove
*/

/*

let element = document.getElementById("my-div");
let createP = document.createElement("p");

element.before(createP);
element.after(createP);
element.prepend("prepend Js ");
element.append(" append Js");
element.remove();
*/

/*--------------- video #098 ----------------*/

/*
    DOM [Traversing]
    - nextSibling
    - previousSibling
    - nextElementSibling
    - previousElementSibling
    - parentElement
*/
/*
let span = document.querySelector(".two");

console.log(span.previousElementSibling); // span.one
console.log(span.nextElementSibling); // span.three
console.log(span.parentElement); // div#my-div
*/
/*--------------- video #099 ----------------*/

/*
    DOM [Cloning]
    - cloneNode(Deep)
    
*/
/*
let myP = document.querySelector("p").cloneNode(true);
let myDiv = document.querySelector("div");

myP.id = "my-p-clone";

myDiv.appendChild(myP);
*/
/*--------------- video #100----------------*/

/*
    DOM [add Event Listener]
    - addEventListener
    - Use Whitout On
    - Attach Multiple Events
    - Error Test

    Search
    - Capture & Bubbling Javascript
    - removeEventListener
*/
/*
let myP = document.querySelector("p");

function one() {
  console.log("Message From Onclick one");
}
function two() {
  console.log("Message From Onclick two");
}

window.onload = "Ahmed";

myP.addEventListener("click", function () {
  console.log("Message From Onclick addeventLister");
});
myP.addEventListener("click", one);

//myP.addEventListener("click", "String"); // Error

myP.onclick = function () {
  let newP = myP.cloneNode(true);
  newP.className = "clone";
  document.body.appendChild(newP);
};
*/
/* Error
let cloned = document.querySelector(".clone");
cloned.onclick = function () {
  console.log("Iam Cloned");
};
*/
/*
document.addEventListener("click", function (e) {
  if (e.target.className == "clone") {
    console.log("I am Clone");
  }
});

*/
/*--------------- video #102 ----------------*/

/*
    BOM [ Browser Object Model]
    
    + Introduction
    ----------------------------
    --- Window Object Is The Browser Window
    --- Window Contain The Document Object
    --- All Global Variables And Objects And Functions Are Members of Window Object
    ------ Test Document And Console

    + What Can We Do With Window Object ?
    ------------------------------------
    --- Open Window
    --- Close Window
    --- Move Window
    --- Resize Window
    --- Print Document
    --- Run Code After Period Of Time Once Or More
    --- Fully Control The URL
    --- Save Data Inside Browser To Use Later
*/
/*
window.console.log("Good");
window.document.title = "Hello JS";
*/
/*--------------- video #103 ----------------*/
/*
    BOM 
    - alert(Message) => Need no Reponse Only Ok Available
    - confirm(Message) => Need Reponse And return A Boolean
    - prompt(Message, Default Message) => Collect Data

*/
/*
window.alert("Alert");
this.alert("Alert");
alert("Alert");
*/
/*
let confirmMsg = confirm("Are You Sure?");
console.log(confirmMsg);

if (confirmMsg === true) {
  console.log("Item deleted");
} else {
  console.log("item Not Deleted");
}
*/
/*
let promptMsg = prompt("Whats Your Name");
console.log(promptMsg);
*/

/*--------------- video #104 ----------------*/
/*
    BOM 
    - setTimeout(Function, Timeout,Additional,Params)
    - clearTimeout(Identifier)

*/
/*
setTimeout(function () {
  console.log("Ahmed Elqori");
}, 3000);
*/
/*
setTimeout(sayMsg, 2500, "Ahmed", 19);

function sayMsg(user, age) {
  console.log(`I am Message For ${user} His Age is ${age}`);
}
*/

/*
let counter = setTimeout(sayMsg, 2500);

function sayMsg(user, age) {
  console.log(`I am Message`);
}

console.log(counter);

let btn = document.querySelector("button");

btn.onclick = function () {
  clearTimeout(counter);
};

*/
/*--------------- video #105 ----------------*/
/*
    BOM 
    - setInterval(Function, Millseconds, Additional Params)
    - clearInterval (Identifier)

*/
/*
setInterval(function () {
  console.log("Msg");
}, 10000);
*/
/*
setInterval(sayMsg, 1000);
function sayMsg() {
  console.log(`Iam Message`);
}
*/
/*
setInterval(sayMsg, 10000, "AHmed", 19);

function sayMsg(user, age) {
  console.log(`I am Message For ${user} His Age Is ${age}`);
}
*/

/*
let counter = setInterval(countdown, 1000);

let div = document.querySelector("div");

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}
*/
/*--------------- video #106 ----------------*/
/*
    BOM 
    location Object
    --- href Get / Set [ URL || Hash- || -File- || -Mail ]
    --- host
    --- hash
    --- protocol
    --- reload ( )
    --- replace ( )
    ---- assign ( )

*/
/*
    <div id="sec01">Section One</div>
    <div id="sec02">Section Two</div>
     */
/*
console.log(location);
console.log(location.href);

// location.href = "https://google.com"
// location.href = "/#sec01";
// location.href = "https://developer.mozilla.org/en-US/plus";

console.log(location.host); // 127.0.0.1:5500
console.log(location.hostname); //127.0.0.1

// location.hostname = "elqori.com";

console.log(location.protocol); // http:
console.log(location.hash); // #sec01 --- http://127.0.0.1:5500/coursera/#sec01
// console.log(location.reload());

// location.replace("http://127.0.0.1:5500/coursera/");

// location.assign("https://google.com");
*/
/*--------------- video #107 ----------------*/
/*
    BOM 
    - open ( URL [ Opt ] , Window Name Or Target Attr [ Opt ] , Win Features [ Opt ] , History
    - close ( )
    - Window Features
    --- width [ Num ]
    --- height [ Num ]
    --- left [ Num ]
    --- top . [ Num ]
    Search
    Window.Open Window Features

*/
/*
setTimeout(function () {
  window.open(
    "https://google.com",
    "_blank",
    "width=400,height=400,left=0;top=0"
  );
}, 2000);
setTimeout(function () {
  window.open("https://google.com", "_blank");
}, 2000);
*/
/*--------------- video #108 ----------------*/
/*
    BOM 
    - History API
    --- Properties
    ------ length
    -Methods
    - back ( )
    - forward ( )
    - go ( Delta ) = > Position In History

    Search [ For Advanced knowledge ]
    - pushState ( ) + replaceState ( )

*/

// console.log(history.length);
// console.log(history.back());
// console.log(history.forward());
// console.log(history.go(-1));
/*--------------- video #109 ----------------*/
/*
    - BOM
    --- stop ( )
    - print ( )
    - focus ( )
    -- scrollTo ( x , y || Options )
    - scroll ( x , y || Options )
    - scrollBy ( x , y || Options )

*/
// console.log(window.stop());
// console.log(window.print());

/*
let myNewWindow = window.open(
  "https://google.com",
  "",
  "width=400,heigth=400,top=200,left=200"
);
myNewWindow.focus();
myNewWindow.close();
*/
// window.scrollTo(1000, 2500);
// window.scrollBy(1000, 2500);

/*
window.scrollTo({
  left: 500,
  height: 200,
  behavior: "smooth",
});
*/
/*--------------- video #110 ----------------*/
/*
    - BOM
    - Practice = > Scroll To Top
    - scrollX [ Alias = > PagexOffset ]
    - scrollY [ Alias = > PageyOffset ]

*/
/*
    <button class="up">Up</button>

*/
/*
body {
  height: 5000px;
  width: 3000px;
}
.up {
  border: none;
  border-radius: 5px;
  color: white;
  background-color: red;
  bottom: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  position: fixed;
  display: none;
}

*/
/*
let btn = document.querySelector("button");

window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
*/
/*--------------- video #111 ----------------*/
/*
    - BOM
    
    Local Storage
    - setItem
    - getItem
    - removeItem
    - clear
    - key

    Info
    - No Expiration Time
    - HTTP And HTTPS
    - Private Tab

*/
/*

// Set
window.localStorage.setItem("color", "red");

window.localStorage.fontWeight = "Blod";

window.localStorage["font-size"] = "20px";

// Get

console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Remove

window.localStorage.removeItem("fontWeight");

// clear

// window.localStorage.clear();

// Get Key

console.log(window.localStorage.key(0));

// Set Color In Page

document.body.style.backgroundColor = window.localStorage.color;

console.log(window.localStorage);
*/
/*--------------- video #113 ----------------*/
/*
    BOM [ Browser Object Model ]
        Session Storage .
        - setItem
        - getItem
        - removeItem
        - clear
        - key
        
        Info
        - New Tab = New Session
        - Duplicate Tab = Copy Session
        - New Tab With Same Url = New Session
*/
/*
window.localStorage.setItem("color", "red");
window.sessionStorage.setItem("color", "blue");

document.querySelector(".name").onblur = function () {
  window.sessionStorage.setItem("input-name", this.value);
};
*/
/*--------------- video #115 ----------------*/
/*
    Destructuring
*/
/*
let a = 1;
let b = 2;
let c = 3;
let d = 4;

let myFriend = ["Ahmed", "Sayed", "Ali", "Maysa"];

[a = "A", b, c, d, e = "Osama"] = myFriend;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e); // undefined

let [x, y, , z] = myFriend;

console.log(x); // Ahmed
console.log(y); // Sayed
console.log(z); // Maysa
*/
/*--------------- video #116 ----------------*/
/*
    Destructuring
      - Destruction Array Advanced Examples
*/
/*
let myFriend = [
  "Ahmed",
  "Sayed",
  "Ali",
  ["Shady", "Amr", ["Mohamed", "Gamal"]],
];

console.log(myFriend[3][2][1]); // Gamal

let [, , , [a, , [, b]]] = myFriend;

console.log(a); // Shady
console.log(b); // Gamal
*/
/*--------------- video #118 ----------------*/
/*
    Destructuring
      - Destruction Object
*/
/*
const user = {
  theName: "Ahmed",
  theAge: 19,
  theTitle: "Developer",
  theCountry: "Morocco",
};

console.log(user.theName);
console.log(user.theAge);
console.log(user.theTitle);
console.log(user.theCountry);
//------------------------------------ 
// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);
//------------------------------------ 
({ theName, theAge, theCountry } = user);

console.log(theName);
console.log(theAge);
console.log(theCountry);
*/
/*--------------- video #120 ----------------*/
/*
    Destructuring
      - Destruction Object
      --- Naming The Variables
      --- Add New Property
      --- Nested Object
      --- Destruction The Nested Object Only
*/
/*
const user = {
  theName: "Ahmed",
  theAge: 19,
  theTitle: "Developer",
  theCountry: "Morocco",
  theColor: "Black",
  skills: {
    html: 90,
    css: 60,
  },
};

const {
  theName: n,
  theAge: a,
  theCountry,
  theColor: co = "Red",
  skills: { html, css: cs },
} = user;

console.log(n);
console.log(a);
console.log(theCountry);
console.log(co);
console.log(`My Css Skill Progress Is ${cs}`);
console.log(`My Html Skill Progress Is ${html}`);

const { html: skillOne, css: skillTwo } = user.skills;

console.log(skillOne);
console.log(skillTwo);
*/
/*--------------- video #120 ----------------*/
/*
    Destructuring
    - Destructuring Function Parameters
*/
/*
const user = {
  theName: "Ahmed",
  theAge: 19,
  skills: {
    html: 90,
    css: 60,
  },
};

showDetails(user);

function showDetails(obj) {
  console.log(`Your Name Is ${obj.theName}`);
  console.log(`Your Age Is ${obj.theAge}`);
  console.log(`Your Css Skills Is ${obj.skills.css}`);
}

function showDetails({ theName: n, theAge: a, skills: { css: c } } = user) {
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${a}`);
  console.log(`Your Css Skills Is ${c}`);
}
showDetails();
*/
/*--------------- video #121 ----------------*/
/*
    Destructuring
    - Destructuring Mixed Content

*/
/*
const user = {
  theName: "Ahmeed",
  theAge: 19,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    morocco: "Marrakech",
    ksa: "Riyadh",
  },
};

const {
  theName: n,
  theAge: a,
  skills: [one, two, three],
  addresses: { morocco: e },
} = user;

console.log(`Your Name is      : ${n}`);
console.log(`Your Age is       : ${a}`);
console.log(`Your Skills is    : ${three}`);
console.log(`Your addresses is :${e}`);
*/
/*--------------- video #123 ----------------*/
/*
   -Set Data Type
      Syntax : new Set ( Iterable )
      ---  Object To Store Unique Values
      ---  Cannot Access Elements By Index
  
    Properties :
      - size
    
   Methods :
      - add
      - delete
      - clear
      - has

*/
/*

let myData = [1, 1, 1, 2, 3];
let myUniqueData = new Set(myData);

// or // Set([1, 1, 1, 2, 3])
// or // let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3)
// or // myUniqueData.add(1).add(1).add(1)
// or // myUniqueData.add(2).add(3);

console.log(myData); // [1,1,1,2,3]
console.log(myUniqueData); // {1,2,3}
console.log(myUniqueData.size); // 3

myUniqueData.delete(2);
console.log(myUniqueData.delete(20)); // False Because Not Found This Number

console.log(myUniqueData); // {1,3}
console.log(myUniqueData.size); // 3

myUniqueData.clear();

console.log(myUniqueData); // {}
console.log(myUniqueData.size); // 0

let data = new Set([5, 4, 8, 9, "A"]);

console.log(data.has("A")); // true

*/
/*--------------- video #124 ----------------*/
/*
   - Set vs WeakSet
        The WeakSet is weak ,.
        meaning references to objects in a WeakSet are held weakly ..
        If no other references to an object stored in the WeakSet exist , ·
        those objects can be garbage collected .
  --
    Set = > Can Store Any Data Values
    WeakSet = > Collection Of Objects Only
  --
    Set = > Have Size Property
    WeakSet = > Does Not Have Size Property
  --
    Set ... = > Have Keys , Values , Entries .
    WeakSet = > Does Not Have clear , Keys , Values And Entries
  --
    Set = > Can Use forEach
    WeakSet = > Cannot Use forEach
*/

// Type Of Data
/*
let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

// Size

console.log(`Size Of element Inside Set iS: ${mySet.size}`);

let iterator = mySet.keys();

console.log(iterator);
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // "A"
console.log(iterator.next()); // { value: undefined, done: true }

// forEach

mySet.forEach((ele) => console.log(ele));

//---------------------------------------

// Data Type

let myws = new WeakSet([{ A: 1, B: 2 }]);

console.log(myws);

*/
/*--------------- video #125 ----------------*/

/*
  - Map Data Type
    Syntax : new Map ( Iterable With Key / Value )
    --- Map vs Object

          Map = > Does Not Contain Key By Default
          Object = > Has Default Keys

          Map = > Key Can Be Anything [ Function , Object , Any Primitive Data Types ]
          Object = > String Or Symbol

          Map = > Ordered By Insertion
          Object = > Not 100 % Till Now

          Map = > Get Items By Size
          Object = > Need To Do Manually

          Map = > Can Be Directly Iterated
          Object = > Not Directly And Need To Use Object.keys ( ) -And - So - On

          Map = > Better Performance When Add Or Remove Data
          Object = > Low Performance When Comparing To Map
*/
/*
let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
  10: "number",
  10: "string",
};

console.log(myNewObject[10]); // string

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");

console.log(myNewMap.get(10)); // NUmber
console.log(myNewMap.get("10")); // String

console.log(myNewMap); // Map(2) { 10 => 'Number', '10' => 'String' }
console.log(myNewObject); // "10":string

myNewMap.set(true, "Boolean");
myNewMap.set({ a: 1, b: 2 }, "Object");
myNewMap.set(function doSomething() {}, "Object");
console.log(myNewMap);
*/
/*--------------- video #126 ----------------*/

/*

  - Map Data Tyep
  Methods
  
  --- set
  --- get
  --- delete
  --- clear
  --- has

  properties
  --- size

*/
/*
let myMap = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],
]);

myMap.set(10, "Number");
myMap.set("Name", "String");

console.log(myMap.get(10));
console.log(myMap.get("Name"));
console.log(myMap.get(false));

console.log("##############");

console.log(myMap.has(10)); // trueß

console.log("##############");

console.log(myMap.size); // 3

console.log(myMap.delete("Name")); // true: "Name " deleted

console.log(myMap.size); // 2

myMap.clear();

console.log(myMap.size); // 0
*/
/*--------------- video #127 ----------------*/

/*

  - map vs WeakMap
  "
    WeakMap Allows Garbage Collector to Do its Task but not map
  "

  Map     -=> Key Can Be Anything
  WeakMap -=> Key Can Be Object Only
*/

/*

let mapUser = { theName: "Ahmed" };
let myMap = new Map();

myMap.set(mapUser, "Object Value");

mapUser = null; // override the reference

console.log(myMap); // Map(1) { { theName: 'Ahmed' } => 'Object Value' }

let wMapUser = { theName: "Ahmed" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object");

console.log(myWeakMap);
*/
/*--------------- video #128 ----------------*/

/*
  Array Methods

  --Array.from(Iterable, MapFunc, This)
  ---  Variable
  --- String To Number
  --- Set
  --- Using The -Map- Function
  --- Arrow Function
  --- Shorten The Method: +-Use- arguments

*/

/*

console.log(Array.from("Osama")); // [ 'O', 's', 'a', 'm', 'a' ]

console.log(Array.from(12345)); // []

console.log(Array.from("12345")); // [ '1', '2', '3', '4', '5' ]

console.log(
  Array.from("12345", function (n) {
    return n + n;
  })
); // [ '11', '22', '33', '44', '55' ]

console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
); //[ 2, 4, 6, 8, 10 ]

console.log(Array.from("12345", (n) => +n + +n)); // [ 2, 4, 6, 8, 10 ]

/////////////////////////////////////

let myArray = [1, 1, 1, 2, 3, 4];
let mySet = new Set(myArray);

console.log(mySet); // { 1, 2, 3, 4 }

console.log(Array.from(mySet)); // [ 1, 2, 3, 4 ]

console.log([...new Set(mySet)]); // [ 1, 2, 3, 4 ]

function af() {
  return Array.from(arguments);
}

console.log(af("Ahmed", "Osama", "Sayed")); // [ 'Ahmed', 'Osama', 'Sayed' ]
*/
/*--------------- video #129 ----------------*/

/*
  Array Methods

    -Array.copyWithin(Target, Start -=>Optional, End-=> Optional)
    "Copy Part Of An Array To AnotherLocation in The Same  Array"

    - Any Negative Value Will Count From The End

    - Target
      --- Index-To- Copy: Part: To
      --- If At Or Greater Than  Array Length Nothing Will Be Copied

    - Start
      --- Index To Start Copying From
      --- If Ommited Start From Index

    - End
      --- Index To End Copying From
      --- Not Including End
      --- If Ommited Reach The End

*/
/*
let myArray = [10, 20, 30, 40, 50, "A", "B"];

myArray.copyWithin(5, 0, 2);

console.log(myArray); //[10, 20, 30, 40, 50, 10, 20]
*/
/*--------------- video #130 ----------------*/
/*

  Array Methods
    --Array.some(CallbackFunc(Element, Index, Array), This Argument)
    --- CallbackFunc => Function:To Run On Every Element On The Given Array
    ----- Element => The Current Element To Process
    ------ Index => Index Of Current -Element
    ------- Array => The Current Array Working With
    -------- This- Argument -=>-Value To Use As This  When Executing CallbackFunc

    Using 
      - Check if Element Exists In Array
      - Check If Number In  Range

*/

/*

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let myNumber = 5;

// let check = nums.some(function (ele) {
//   console.log("Test");
//   return ele > 5;
// });

let check = nums.some(function (ele) {
  return ele > this;
}, myNumber);

// let check2 = nums.some((e) => e > 5);

console.log(check);
// console.log(check2);

///////////////////////////////////

function checkValue(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(checkValue([5, 6, 9, 2, 4], 6)); // true
console.log(checkValue([5, 6, 9, 2, 4], 1)); // false

///////////////////////////////////

let range = {
  min: 10,
  max: 20,
};

let checkRange = nums.some(function (ele) {
  return ele >= this.min && ele <= this.max;
}, range);

console.log(checkRange); // true
*/
/*--------------- video #131 ----------------*/

/*
  -Array Methods
  -- Array.every(CallBackFun( element, Index, Array),This Argument)
    ---- CallbackFunc -=>-Function-To Run On Every Element On The Given Array
    ---- Element =>The Current Element To Process
    ---- Index => Index  Of Current Element
    ---- Array => The Current Array Working With
    ---- This Argument => Value To Use As This When Executing CallBackFun
*/
/*
const locations = {
  20: "Place 1",
  30: "Place 2",
  10: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;

let locationArray = Object.keys(locations);

console.log(locationArray); // [ '10', '20', '30', '40' ]

let locationArrayNumber = locationArray.map((n) => +n);

console.log(locationArrayNumber); // [ 10, 20, 30, 40 ]

let check = locationArrayNumber.every(function (e) {
  return e.this;
}, mainLocation);

console.log(check); // False
*/

/*--------------- video #132 ----------------*/

/*
  Spread Opertaor => ...Iterable
  "Allow Iterbale to Expand In Place"
*/
/*
// Spread With String => expand String

console.log("Ahmed"); // Ahmed

console.log(..."Ahmed"); // A h m e d

console.log([..."Ahmed"]); // [ 'A', 'h', 'm', 'e', 'd' ]

// Conctenate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArrays = [...myArray1, ...myArray2];

console.log(allArrays); // [ 1, 2, 3, 4, 5, 6 ]

// Copy Array

let copyArray = [...myArray1];

console.log(copyArray); // [ 1, 2, 3 ]

// Push Inside Array

let allFriends = ["Zaki", "Ahmed", "Artist"];
let thisYearFriends = ["Sameh", "Mahmoud"];

allFriends.push(...thisYearFriends); // [ 'Zaki', 'Ahmed', 'Artist', 'Sameh', 'Mahmoud' ]

console.log(allFriends);

// Use With Math Object

let myNums = [10, 20, -100, 100, 1000, 500];

console.log(Math.max(...myNums)); // 1000

// Spread With Objects => Merge Objects

let ObjOne = {
  a: 1,
  b: 2,
};
let ObjTwo = {
  c: 3,
  d: 4,
};

console.log({ ...ObjOne, ...ObjTwo }); // { a: 1, b: 2, c: 3, d: 4 }
*/

/*--------------- video #134 ----------------*/

/*
  Regular Experssion
    - Email
    - IP
    - Phone
    - URL
*/
/*
let str1 = "10 20 100 1000 5000";
let str2 = "Os1 Os12 Os123 Os123Os";

let invalidEmail = "Osama@@@gmail....com";
let validEmail = "Osama@gmail.com";

let ip = "192.168.2.1"; // IPv4

let url = "elzero.org";
let url1 = "elzero.org/";
let url2 = "http://elzero.org/";
let url3 = "https://www.elzero.org/";
let url4 = "http://.elzero.org/";
let url5 = "http://.elzero.org/?facebook";
*/
/*--------------- video #135 ----------------*/

/*
  Regular Expression

  Syntax:
    /pattern/modifier(s);
    new RegExp("pattern","modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multilines

  Search Methods
  - match (pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Return An Array With The Matches
  -- Returns null If No Match Is Found

*/

/*

let myString = "Hello Ahmed Web School I love ahmed";

let regex = /ahmed/gi;

console.log(myString.match(regex)); // [ 'Ahmed', 'ahmed' ]

*/
/*--------------- video #136 ----------------*/

/*

  Regular Expression

  Ranges 

  - Part 1:
      (X|Y) => X Or Y
      [0-9] => 0 to 9
      [^0-9]=> Any Character Not 0 To 9
      Practice
    
  - Part 2:
      [a-z]
      [^a-z]
      [A-Z]
      [^A-Z]
      [abc]
      [^abc]
*/
/*

let tld = "Com Net Org Info Code Io";

let tldRe = /(org|info|io)/gi;

console.log(tld.match(tldRe)); // [ 'Org', 'Info', 'Io' ]

let nums = "12345678910";

let numsRe = /[0-2]/g;

console.log(nums.match(numsRe)); // [ '1', '2', '1', '0' ]

let notNums = "123456";

let notNumsRe = /[^0-2]/g;

console.log(notNums.match(notNumsRe)); // [ '3', '4', '5', '6' ]

let specialNums = "1!2@3#4$5%687910";

let specialNumsRe = /[^0-9]/g;

console.log(specialNums.match(specialNumsRe)); // [ '!', '@', '#', '$', '%' ]

let practice = "Os1 Os1Os Os2 Os8 Os8Os";

let practiceRe = /Os[5-9]Os/gi;

console.log(practice.match(practiceRe)); // [ 'Os8Os' ]
*/
/*--------------- video #137 ----------------*/

/*
  Regular Expression

  Ranges 
  
 - Part 1:
      (X|Y) => X Or Y
      [0-9] => 0 to 9
      [^0-9]=> Any Character Not 0 To 9
      Practice
    
  - Part 2:
      [a-z]
      [^a-z]
      [A-Z]
      [^A-Z]
      [abc]
      [^abc]

};

*/
/*

let myString = "AaBbcdefG123!234%*&*";

let atozSmall = /[a-z]/g;
let atozCapital = /[A-Z]/g;
let notatozSmall = /[^a-z]/g;
let notatozCapital = /[^A-Z]/g;
let aAndcAnde = /[ace]/g;
let lettersCapsAndSmall = /[a-zA-Z]/g;
let numsAndSpecial = /[^a-zA-Z]/g;
let special = /[^a-zA-Z0-9]/g;

console.log(myString.match(atozSmall)); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]

console.log(myString.match(notatozSmall)); // ['A', 'B', 'G', '1', '2', '3', '!', '2','3', '4', '%', '*', '&', '*']

console.log(myString.match(atozCapital)); // [ 'A', 'B', 'G' ]

console.log(myString.match(notatozCapital)); // ['a', 'b', 'c', 'd', 'e','f', '1', '2', '3', '!','2', '3', '4', '%', '*','&', '*']

console.log(myString.match(aAndcAnde)); // [ 'a', 'c', 'e' ]

console.log(myString.match(lettersCapsAndSmall)); // ['A', 'a', 'B','b', 'c', 'd','e', 'f', 'G']

console.log(myString.match(numsAndSpecial)); // ['1', '2', '3', '!','2', '3', '4', '%','*', '&', '*']

console.log(myString.match(special)); // [ '!', '%', '*', '&', '*' ]
*/
/*--------------- video #138 ----------------*/

/*
  Regular Expression

      Character Classes

      .   => matches any character, expect newline or other line terminators.
      \w  => matches word characters.[a-z, A-Z, 0-9, And Underscore]
      \W  => matches Non Word Characters
      \d  => macthes digits form 0 to 9
      \D  => macthes non-digits characters
      \s  => macthes whiteSpace character
      \S  => macthes non whitespace character.  
      
*/
/*

let email = "0@@@g...com O@g.com O@g.net -A@Y.com. O-g.com o@s.org 1@1.com";

let dot = /./g;

console.log(email.match(dot)); // ['0', '@', '@', '@', 'g', '.', '.', '.', 'c','o', 'm', ' ', 'O', '@', 'g', '.', 'c', 'o','m', ' ', 'O', '@', 'g', '.', 'n', 'e', 't',' ', '-', 'A', '@', 'Y', '.', 'c', 'o', 'm','.', ' ', 'O', '-', 'g', '.', 'c', 'o', 'm',' ', 'o', '@', 's', '.', 'o', 'r', 'g', ' ','1', '@', '1', '.', 'c', 'o', 'm']

let word = /\w/g;

console.log(email.match(word)); // ['0', 'g', 'c', 'o', 'm', 'O', 'g','c', 'o', 'm', 'O', 'g', 'n', 'e','t', 'A', 'Y', 'c', 'o', 'm', 'O','g', 'c', 'o', 'm', 'o', 's', 'o','r', 'g', '1', '1', 'c', 'o', 'm']

let wORD = /\W/g;

console.log(email.match(wORD)); // ['@', '@', '@', '.', '.', '.',' ', '@', '.', ' ', '@', '.',' ', '-', '@', '.', '.', ' ','-', '.', ' ', '@', '.', ' ','@', '.']

let valid = /\w@\w.(com|net)/g;

console.log(email.match(valid)); // [ 'O@g.com', 'O@g.net', 'A@Y.com', '1@1.com' ]
*/
/*--------------- video #139 ----------------*/

/*
  Regular- Expression: 

      Character Classes

      \b => matches at the beginnig or end of a word
      \B => macthes Not At the beginning/end of aword

      Test Methode
      patter.test(input)

      
*/
/*
let names = "Sayed 1Spam 2Spam 3Spam Spam4 SpamS Osama Ahmed Aspamo";

let re = /spam/gi;

console.log(names.match(re)); // [ 'Spam', 'Spam', 'Spam', 'Spam', 'Spam', 'spam' ]

let valid = /\bspam|spam\b/gi;

console.log(names.match(valid)); // [ 'Spam', 'Spam', 'Spam', 'Spam', 'Spam' ]

console.log(re.test(names)); // true

console.log(/\bspam|spam\b/gi.test("Ahmed")); // false

console.log(/\bspam|spam\b/gi.test("1Spam")); // true

console.log(/\bspam|spam\b/gi.test("spam2")); // true
*/
/*--------------- video #140 ----------------*/

/*
  Regular- Expression: 

    Qualitifiers 
     n+  => One Or More
     n*  => Zero Or More
     n?  => Zero Or One
*/
/*
let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails

let mailsRe = /\w+@\w+.\w+/gi; //

console.log(mails.match(mailsRe)); // [ 'o@nn.sa', 'osama@gmail.com', 'elzero@gmail.net', 'osama@mail.ru' ]

//////////////////////////////////////////////////

let nums = "0110 10 150 05120 0560 350 00"; // 0 NUmber Or No 0

let numsRe = /0\d*0/gi;

console.log(nums.match(numsRe)); // [ '0110', '05120', '0560', '00' ]

//////////////////////////////////////////////////

let urls = "https://google.com http://www.website.net web.com"; // http + https

let urlsRe = /(https?:\/\/(www.)?)?\w+.\w+/gi;

console.log(urls.match(urlsRe)); /// [ 'https://google.com', 'http://www.website.net', 'web.com' ]
*/
/*--------------- video #141 ----------------*/

/*
  Regular- Expression: 

    Quantifiers
    n{x}   => Number Of
    n{x,y} => Range
    n{x,}  => At Least X

*/

/*

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/gi)); // [ 'S100S' ]

console.log(serials.match(/s\d{4,5}s/gi)); // [ 'S3000S', 'S50000S' ]

console.log(serials.match(/s\d{4,}s/gi)); // [ 'S3000S', 'S50000S', 'S950000S' ]

*/
/*--------------- video #142 ----------------*/

/*
  Regular- Expression: 

    Quantifiers
    $ => End With Something
    ^ => Start With Something
    ?= => Followed By Something    
    ?! => Not Followed By Something    

*/

/*
let myString = "We Love Programming";
let names = "10samaZ 2AhmedZ 3Mohammed  4MoustafaZ 5GamalZ";

console.log(/ing$/gi.test(myString)); // true
console.log(/^We/gi.test(myString)); // true
console.log(/lZ$/gi.test(names)); // true
console.log(/^\d/gi.test(names)); // true

console.log(names.match(/\d\w{5}(?=Z)/gi)); // [ '10sama', '2Ahmed', '5Gamal' ]
console.log(names.match(/\d\w{8}(?!Z)/gi)); // [ '3Mohammed' ]
*/
/*--------------- video #143 ----------------*/

/*
  Regular- Expression: 

    - replace
    - replaceAll
*/
/*
let txt = "We Love Programming And @ Because @ Is Amazing";

console.log(txt.replace("@", "JavaScrip")); // We Love Programming And JavaScrip Because @ Is Amazing

console.log(txt.replaceAll("@", "JavaScrip")); // We Love Programming And JavaScrip Because JavaScrip Is Amazing

let re = /@/gi;

console.log(txt.replace(re, "JavaScript")); // We Love Programming And JavaScript Because JavaScript Is Amazing

console.log(txt.replace(/@/gi, "JavaScript")); // We Love Programming And JavaScript Because JavaScript Is Amazing
*/
/*--------------- video #144 ----------------*/

/*
  Regular- Expression: 
    - Input Form Validation;

*/

/*
<form id="register" method="get" action="">
      <input type="text" id="phone" name="the-phone" maxlength="15" />
      <input type="submit" value="Register" />
    </form>

document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;

  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910

  let validationResult = phoneRe.test(phoneInput);

  if (validationResult == false) {
    return false;
  }

  return true;
};
*/
/*--------------- video #148 ----------------*/

/*
    OOP
        -Constructor Function
*/
/*
function User(id, username, salary) {
  this.i = id;
  this.u = username;
  this.s = salary + 1000;
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Hassan", 6000);
let userThree = new User(102, "Sayed", 7000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);

console.log("********************************");

console.log(userTwo.i);
console.log(userTwo.u);
console.log(userTwo.s);

console.log("********************************");

console.log(userThree.i);
console.log(userThree.u);
console.log(userThree.s);
*/
/*
const userOne = {
  id: 100,
  username: "Elzero",
  salary: 5000,
};
const userTwo = {
  id: 101,
  username: "Hasssan",
  salary: 6000,
};
const userThree = {
  id: 102,
  username: "Sayed",
  salary: 7000,
};
*/

/*--------------- video #149 ----------------*/

/*
    OOP
        - Constructor Function
        --- New Syntax
        --- instanceof
*/
/*
class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
  }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);

console.log(userOne instanceof User); // true

console.log(userOne.constructor == User); // true
*/

/*--------------- video #150 ----------------*/

/*
    OOP
        - Constructor Function
        --- Deal With Properties And Methods
        
*/
/*
class User {
  constructor(id, username, salary) {
    // Properties
    this.i = id;
    this.u = username || "Unknown";
    this.s = salary < 6000 ? salary + 500 : salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    };
  }
  // Methods
  writeMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "", 6000);

console.log(userOne.u); // Elzero
console.log(userOne.s); // 5500
console.log(userOne.msg()); // Hello Elzero Your Salary Is 5500
console.log(userOne.writeMsg()); // Hello Elzero Your Salary Is 5500

console.log("#".repeat(20));

console.log("#".repeat(20));

console.log(userTwo.u); // Unknown
console.log(userTwo.s); // 6000
console.log(userTwo.msg()); // Hello Unknown Your Salary Is 6000
console.log(userTwo.WriteMsg()); // Hello Unknown Your Salary Is 6000
*/

/*--------------- video #151 ----------------*/

/*
    OOP
        - Constructor Function
        --- Deal With Properties And Methods
        
*/
/*
class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username || "Unknown";
    this.s = salary < 6000 ? salary + 500 : salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    };
  }
  updateName(newName) {
    this.u = newName;
  }
}

let userOne = new User(100, "Elzero", 5000);

console.log(userOne.u); // Elzero

userOne.updateName("Ahmed");

console.log(userOne.u); // Ahmed

let strOne = "Elzero";
let strTwo = new String("Elzero");

console.log(typeof strOne); // string

console.log(typeof strTwo); // object

console.log(strOne instanceof String); // false

console.log(strTwo instanceof String); // true
*/
/*--------------- video #152 ----------------*/

/*
    Class
        - Static Properties And Methods
*/
/*
class User {
  static count = 0;

  constructor(id, username, salary) {
    this.i = id;
    this.u = username || "Unknown";
    this.s = salary < 6000 ? salary + 500 : salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    };
    User.count++;
  }

  // Static Methode
  static sayHello() {
    return `Hello from class`;
  }

  static countMembers() {
    return `${this.count} Members Created`;
  }
}

let userOne = new User(100, "Elzero", 5000);
let userTwo = new User(101, "Ahmed", 6000);

console.log(userOne.u); // Elzero

console.log(userTwo.u); // Ahmed

console.log(userOne.count); // Undefined

console.log(User.count); // 2

console.log(User.sayHello()); // Hello from class

console.log(User.countMembers()); // 2 Members Created
*/
/*--------------- video #153 ----------------*/

/*
    Class
        - Static Properties And Methods

*/
/*
// Parent Class

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }

  sayHello() {
    return `Hello from class`;
  }
}

// Dervide Class

class Admin extends User {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}

class Superman extends Admin {
  constructor(id, username, permissions, ability) {
    super(id, username, permissions);
    this.a = ability;
  }
}

let userOne = new User(100, "Elzero");
let adminOne = new Admin(110, "Zaki", 1);

console.log(userOne.u); // Elzero
console.log(userOne.sayHello()); // Hello from class

console.log(adminOne.i); // 110
*/

/*--------------- video #154 ----------------*/

/*
   Encapulation
*/

// Parent Class

/*

class User {
  // Private
  #e;
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    this.#e = eSalary;
  }
  getSalary() {
    return parseInt(this.#e);
  }
}

let userOne = new User(100, "Elzero", "5000 Gneh");

console.log(userOne.u); // Elzero

console.log(userOne.getSalary() / 2); // 2500

*/
/*--------------- video #155 ----------------*/

/*
   ProtoType
*/

// Parent Class

/*
class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "Elzero");

console.log(userOne.u); // Elzero

console.log(User.prototype); // {}

let strOne = "Elzero";

console.log(strOne.prototype); // all prototype
*/
/*--------------- video #156 ----------------*/

/*
   ProtoType
   - Add To Prototype Chain
   - Extend Built In Constructor Features
*/

// Parent Class
/*
class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "Elzero");

console.log(userOne.u); // Elzero

console.log(User.prototype); // {}

console.log(userOne); // User { i: 100, u: 'Elzero' }

User.prototype.sayWelcome = function () {
  return `Welcome ${this.u}`;
};

Object.prototype.love = "Elzero Web School";

console.log(userOne.sayWelcome()); // Welcome Elzero

//////////////////////

String.prototype.addDotBeforeAndAfter = function (val) {
  return `.${this}.`;
};

let myString = "Ahmed";
console.log(myString.addDotBeforeAndAfter()); // .Ahmed.
*/
/*--------------- video #158 ----------------*/

/*
    Object Meta Data And Descriptor
        - Writable
        - enumerable
        - configurable [ Cannot Delete Or Reconfigure]
*/
/*
const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  writable: true,
  enumerable: true,
  configurable: true,
  value: 3,
});

myObject.c = 100; // if writable false i cant do this

for (let prop in myObject) {
  // if enumerable false i cant do this
  console.log(prop, myObject[prop]);
}
console.log(delete myObject.c); // true because configurable icant do this

console.log(myObject); // {a: 1, b: 2, c: 3}
*/
/*--------------- video #159 ----------------*/

/*
    Object Meta Data And Descriptor
        - Define Multiple Properties
        - check Descriptor
*/
/*
const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperties(myObject, {
  c: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});
console.log(myObject); // {a: 1, b: 2, c: 3, d: 4, e: 5}

console.log(Object.getOwnPropertyDescriptors(myObject)); // {value: 4, writable: false, enumerable: false, configurable: true}
*/
/*--------------- video #159 ----------------*/

/*
  Date And Time
    - Date Constructor

  Static Methods
    - Date.now()
  
  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The NUmber OfSecond Since January 1 , 1970
  - Why 1970  [829 Days To 136 Years]
  
  Search For
  - Year 2038 Problem In Computer Science

*/
/*

let dateNow = new Date();

console.log(dateNow);

console.log(Date.now());

let seconds = Date.now() / 1000;

console.log(`Seconds: ${seconds.toFixed()}`);

let minutes = seconds / 60;

console.log(`Minutes: ${minutes.toFixed()}`);

let hours = minutes / 60;

console.log(`Hours: ${hours.toFixed()}`);

let days = hours / 24;

console.log(`Days: ${days.toFixed()}`);

let years = days / 365;

console.log(`Years: ${years.toFixed()}`);

*/
/*--------------- video #160 ----------------*/

/*
  Date And Time
    - getTime() => Number Of Milliseconds
    - getDate() => Day Of The Month
    - getFullYear() 
    - getMonth() => Zero Based
    - getDay() => Day Of The Week
    - getHours()
    - getMInutes()
    - getSeconds()
*/
/*
let dateNow = new Date();
let birthday = new Date("Mars 01, 03");
let dateDiff = dateNow - birthday;

console.log(dateDiff / 1000 / 60 / 60 / 24 / 365); // 19,57

console.log(dateNow.getTime()); // 1663795458641 ms
console.log(dateNow.getDate()); // 21
console.log(dateNow.getFullYear()); // 2022
console.log(dateNow.getMonth()); // 8 is index don 8 + 1 donc array for this function array of the month
console.log(dateNow.getDay()); // 3
console.log(dateNow.getHours()); // 22
console.log(dateNow.getMinutes()); // 27
console.log(dateNow.getSeconds()); // 50
*/
/*--------------- video #161 ----------------*/

/*
  Set: Date And Time
    - setTime(Milliseconds)
    - setDate() => Day Of The Month [Negative And Positive]
    - setFullYear(year, month => optional [0-11] ,day => optional [1-31])
    - setMonth(Month [0-11], Day => Optional [1-31])[Negative And Positive]
    - setHours(hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999] )
    - setMinutes( Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
    - setSeconds( Seconds => Optional [0-59], MS => Optional [0-999])
*/
/*
let dateNow = new Date();

console.log(dateNow); // 2022-09-21T21:36:13.532Z

console.log("#".repeat(20));

// dateNow.setTime(0);

// console.log(dateNow); // 1970-01-01T00:00:00.000Z

// console.log("#".repeat(20));

// dateNow.setTime(10);

// console.log(dateNow); // 1970-01-01T00:00:00.010Z

// dateNow.setDate(29);

// console.log(dateNow); // 2022-09-29

// console.log("#".repeat(20));

// dateNow.setFullYear(2020, 1);

// console.log(dateNow); // 2020-02-21

// console.log("#".repeat(20));

// dateNow.setMonth(2);

// console.log(dateNow); // 2022-04-21

// console.log("#".repeat(20));
*/
/*--------------- video #162 ----------------*/

/*
  Date.parse("String") ;/ Read DAte From A String
*/
/*
console.log(Date.parse("Mars 03 2003"));
*/
/*--------------- video #163 ----------------*/

/*
  Date And Time
  - Track Operation Time

  Search 
  - performance.now()
  - performance.Mark()
*/
/*
// Start Time

let start = new Date();

// Operation

for (let i = 0; i < 100; i++) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(i));
  document.body.appendChild(div);
}

// Time End

let end = new Date();

// Operation Duration

let duration = end - start;

console.log(duration);
*/
/*--------------- video #164 ----------------*/

/*
    Generators
    - Generator Function Run Its Code When Required.
    - Generator Function Return Special Object [Generator Object]
    - Generator Are Iterable
*/
/*
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumbers();

console.log(typeof generator); // Object

console.log(generator);

console.log(generator.next()); // {value: 1, done: false}

console.log(generator.next()); // {value: 2, done: false}

console.log(generator.next()); // {value: 3, done: false}

console.log(generator.next()); // {value: 4, done: false}

console.log(generator.next()); // {value: undefined, done: true}

for (let value of generateNumbers()) {
  console.log(value);
}
*/
/*--------------- video #165 ----------------*/

/*
    Generator 
    - Delegate Generator
*/
/*
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  yield* generateNumbers();
  yield* generateLetters();
  yield* [4, 5, 6];
}

let generate = generateAll();

console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next()); //{value: 5, done: false}
console.log(generate.return()); // {value: undefined, done: true}
console.log(generate.next());
*/
/*--------------- video #166 ----------------*/

/*
    Generator 
     - Generate Infinite Numbers 
     - User Return Inside generators
*/
/*
function* generateNumbers() {
  // yield 1;
  // yield 2;
  // return "A"; // {value: 'A', done: true}
  // yield 3;
  // yield 4;
  let index = 0;
  while (true) {
    yield index++;
  }
}

let generate = generateNumbers();

console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
console.log(generate.next());
*/
/*--------------- video #167 ----------------*/

/*
    Modules
    - Import And Export 
     
*/
/*
let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { a, arr, saySomething };
*/
/*
import { a, arr, saySomething as s } from "/coursera/index.js";

console.log(a);
console.log(arr);
console.log(s());

*/
/*--------------- video #168 ----------------*/

/*
    Modules
    - Export Alias
    - Named Export
    - Default Export
    - Import All
     
*/
/*
let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { a as myNumber, arr, saySomething };

export default function () {
  return `Hello`;
}
*/
/*
import sayHello, {
  myNumber,
  arr,
  saySomething as sSomthing,
} from "/coursera/index.js";

console.log(myNumber);
console.log(arr);
console.log(sSomthing());
console.log(sayHello());
*/
/*
import * as all from "/coursera/index.js";

console.log(all);

console.log(all.myNumber);

console.log(all.arr);
*/
/*--------------- video #169 ----------------*/

/*
  Whats Is JSON ?

    - JavaScript Object Notation
    - Format For Sharing Data Between Server And Client
    - JSON Derived From JavaScript
    - Alternative To XML
    - File Extension Is .json

  Why JSON ?

    - Easy To Use And Read
    - Used By MOst Programming Languages And Its Frameworks
    - You Can Convert JSON To JS Object And Vice Versa

  JSON vs XML

  ===============================================
  = Text Based Format     = Markup Languages    =
  = Lightweight           = Heavier             =
  = Does Not Use tags     = Using Tags          =
  = Shorter               = Not Short           =
  = Can Use Arrays        = Cannot Use Arrays   =
  = Not Support Comments  = Support Comments    =
  ===============================================
*/
/*--------------- video #170 ----------------*/

/*
   JSON Syntax

    - Data Added Inside Curly Braces { }
    - Data Added With Key : Value 
    - Key Should Be String Wrapped  In Double Quotes
    - Data Separated By Comma 
    - Square Brackets [] For Arrays
    - Curly Braces { } For Objects
    
  Avaible Data Types

    - String 
    - Number
    - Object
    - Array
    - Bollean Values
    - null
*/
/*
{
  "string": "Ahmed",
  "number": 19,
  "object": {
    "MA": "CASA",
    "KSA": "Riyadh"
  },
  "array": ["HTML", "CSS", "JavaScript"],
  "boolean": true,
  "null": null
}

*/
/*--------------- video #169 ----------------*/

/*
  JSON
    - API
    - Tools To TEst API
    - Preview Github API
*/
/*--------------- video #172 ----------------*/

/*
  JSON
    - JSON.parse => Convert Text Data To JS Obkact
    - JSON.stringify => Convert JS Object To JSON

*/
/*
const myJsonObjectFromServer = '{"Username":"Ahmed" ,"Age":19}';

console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

const myJsObject = JSON.parse(myJsonObjectFromServer);

console.log(typeof myJsObject);
console.log(myJsObject);

myJsObject["Username"] = "Elqori";
myJsObject["Age"] = 20;

const myJsonObjectToServer = JSON.stringify(myJsObject);

console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);
*/
/*--------------- video #173 ----------------*/

/*
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
    - Meaning

  Synchronous

    - Operation Runs in Sequence
    - Each Operation Must Wait For The Previous One to Complete
    - Story From Real Life
  
  Asynchronous

    - Operation Runs In Parallel
    - This Means That An Operation Can Occur While Another One IS Still Being Processed
    - Strory From Real Life
  
    - Facebook As Example
    - Simulation

    Search
    - JavaScript Is Single-Threaded
    - Multi Threaded Languages
*/

// Synchronous
/*
console.log("1");
console.log("2");
window.alert("Opration");
console.log("3");
*/

// Asynchronous
/*
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 4000);
console.log("3");
*/
/*--------------- video #174 ----------------*/

/*

  Call Stack || Stack Trace
  Web API

*/
/*
setTimeout(() => {
  console.log("Web API");
}, 0);

function one() {
  console.log("One");
}
function two() {
  one();
  console.log("two");
}
function three() {
  two();
  console.log("Three");
}
three();
*/
/*
===========================================
  console.log("One");

===========================================
function one() {
  console.log("One");
}
===========================================
function two() {
  one();
  console.log("two");
}
===========================================
function three() {
  two();
  console.log("Three");
}
===========================================
*/
/*--------------- video #175 ----------------*/

/*
    == Event Loop And Callback Queue
*/
/*
console.log("One");
setTimeout(() => {
  console.log("Three");
}, 0);
setTimeout(() => {
  console.log("Four");
}, 0);
console.log("Two");

setTimeout(() => {
  console.log(myVar);
}, 0);
let myVar = 100;

myVar += 100;
*/
/*--------------- video #177 ----------------*/

/*
  What Is AJAX And Network Information:
 -------------------------------------- 
      - Test new XMLHttpRequest();
      - Request And Reponse
      - Status Code
*/
/*
let req = new XMLHttpRequest();

console.log(req);
*/
/*--------------- video #177 ----------------*/

/*
    Ajax
    - Ready State => status Of the Request
    [0] Request Not Initialized  
    [1] Server Connection Established
    [2] Request Received
    [3] Processing Request 
    [4] request Is Finished And Response Is Ready
    - Status
    [200] Response Is Successful
    [404] Not Found

*/
/*
let myRequest = new XMLHttpRequest();

myRequest.open("GET", "https://api.github.com/users/ahmedelqori", true);
myRequest.send();

console.log(myRequest);

myRequest.onreadystatechange = function () {
  console.log(myRequest.readyState);
  console.log(myRequest.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};
*/
/*--------------- video #178 ----------------*/

/*
    Ajax
      Loop On Data
    
    Search 
    - Cross Origin API [CORS]
    - API Authentication

*/
/*
let myRequest = new XMLHttpRequest();

myRequest.open(
  "GET",
  "https://api.github.com/users/elzerowebschool/repos",
  true
);
myRequest.send();

console.log(myRequest);

myRequest.onreadystatechange = function () {
  console.log(myRequest.readyState);
  console.log(myRequest.status);
  if (this.readyState === 4 && this.status === 200) {
    let jsData = JSON.parse(this.responseText);
    console.log(jsData);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};
*/
/*--------------- video #179 ----------------*/

/*
    To Understand Ajax, Fetch, Promises

    Pyramid Of Doom || Callback Hell

    - What Is Callback
    - Callback Hell Example

    What Is Callback
      - A Function That Is passed Into Another One As An Argument To Be Executed Later
      - Function Ot Hancle Photos
      --- [1] Download Photo From URl
      --- [2] Resize Photo
      --- [3] Add Logo To The Photo
      --- [4] show The Photo In Website

*/
/*

//     <p class="test">Testing Text</p>

function makeItRed(e) {
  e.target.style.color = "red";
}
let p = document.querySelector("p");
p.addEventListener("click", makeItRed);

function iamCallback() {
  console.log(" I am CallBAck");
}

setTimeout(iamCallback, 2000);

setTimeout(() => {
  console.log("Download Photo From Url");
  setTimeout(() => {
    console.log("Resize Photo");
    setTimeout(() => {
      console.log("Add Logo To The Photo");
      setTimeout(() => {
        console.log("show The Photo I nWebSite");
      }, 4000);
    }, 3000);
  }, 2000);
}, 1000);
*/

/*--------------- video #180 ----------------*/

/*
========== Promise Intro And Syntax ===========
*/

/*

const myPromise = new Promise(function (resolveFunction, rejectFunction) {
  let connect = true;
  if (connect) {
    resolveFunction("Connection Established");
  } else {
    rejectFunction(Error("Connection Failed"));
  }
}).then(
  (resolveValue) => console.log(`Good ${resolveValue} `),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);

console.log(myPromise);

*/
/*--------------- video #181 ----------------*/

/*
  Promise Training

  We Will Go To The Meeting , Promise Me That We Will Find The 4 Employees
    
    .then( We Will Choose Two People)
    .the( We Will Test Them Get One Of Them)
    .catch( No One Came )

    then    => Promise Is Successfull Use The Resolved Data
    Catch   => Promise Is Failed, Catch The Error
    Finally => Promise Successfull Or Failed Finally Do Something

*/

/*

const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let employees = ["Osama", "Ahmed", "Sayed", "Ali"];
  if (employees.length == 4) {
    resolveFunction(employees);
  } else {
    rejectFunction(Error("Number Of Employees Not 4"));
  }
});

myPromise
  .then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue; // ["Osama", "Ahmed"]
  })
  .then((resolveValue) => {
    resolveValue.length = 1; // ["Osama"]
    return resolveValue;
  })
  .then((resolveValue) => {
    console.log(`The Choosen Employee Is ${resolveValue}`); // The Choosen Employee Is Osama
  })
  .catch((rejectReason) => {
    console.log(rejectReason);
  })
  .finally(console.log(`The Operation Is Done`));

  */
/*--------------- video #182 ----------------*/

/*
  Promise And XHR

*/
/*
const getData = (apilink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();

    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };
    myRequest.open("GET", apilink);
    myRequest.send();
  });
};

getData("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    result.length = 10;
    return result;
  })
  .then((result) => console.log(result[0].name))
  .catch((rej) => console.log(rej));
*/
/*
if (this.readyState === 4 && this.status === 200) {
        let jsData = JSON.parse(this.responseText);
        for (let i = 0; i < jsData.length; i++) {
          let div = document.createElement("div");
          let repoName = document.createTextNode(jsData[i].name);
          div.appendChild(repoName);
          document.body.appendChild(div);
        }
      }
*/

/*--------------- video #183 ----------------*/

/*
  Fetch API
    - Return A Representation Of The Entire HTTP Response

*/
/*

fetch("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    console.log(result);
    let myData = result.json();
    console.log(myData);
    return myData;
  })
  .then((myData) => {
    myData.length = 10;
    return myData;
  })
  .then((myData) => {
    console.log(myData[0].name);
  });
*/
/*--------------- video #184 ----------------*/

/*
  Promise
    - All
    - All Settled
    - Race
*/
/*
const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The First Promise");
  }, 3000);
});
const mySecondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Iam The Second Promise");
  }, 1000);
});
const myThirsPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Iam The Second Third");
  }, 2000);
});

Promise.all([myFirstPromise, mySecondPromise, myThirsPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);

Promise.allSettled([myFirstPromise, mySecondPromise, myThirsPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);
Promise.race([myFirstPromise, mySecondPromise, myThirsPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);
*/

/*--------------- video #185 ----------------*/

/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Adwait Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/
/*
function getData() {
  let users = ["Ahmed"];
  if (users.length > 0) {
    return Promise.resolve("User Found");
  } else {
    return Promise.reject("No User Found");
  }
}
getData().then(
  (resolveValue) => console.log(resolveValue),
  (rejectValue) => console.log("Rejected: " + rejectValue)
);
*/
/*
async function getData() {
  let users = ["Ahmed"];
  if (users.length > 0) {
    return "User Found";
  } else {
    throw new Error("No User Found");
  }
}

console.log(getData());

getData().then(
  (resolveValue) => console.log(resolveValue),
  (rejectValue) => console.log("Rejected: " + rejectValue)
);
*/

/*--------------- video #186 ----------------*/

/*
  Await
    - AwaitWorks Only Inside Asnyc Function
    - Await Make JavaScript Wait For The Promise Result
    - Await Is More Elegant Syntax Of getting Promise result
*/
/*

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Iam The Good Promise");
    reject("Iam The Bad Promise");
  }, 3000);
});

async function readData() {
  console.log("Before Promise ");
  // myPromise.then((resolvedValue) => console.log(resolvedValue));
  console.log(await myPromise.catch((err) => err));
  console.log("After Promise ");
}

readData();
*/
