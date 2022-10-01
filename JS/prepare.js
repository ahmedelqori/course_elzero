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

for (let i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") {
    document.write(`<div>We have ${i} admins</div><hr>`);
    break;
  }
  document.write(`<div> The Admin For team ${i + 1} Is ${myAdmins[i]}</div>`);
  document.write(`<h3>Team Members: </h3>`);

  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j].charAt(0) === myAdmins[i].charAt(0)) {
      document.write(`<p>- ${count++} ${myEmployees[j]}</p>`);
    }
  }
  document.write(`<hr>`);
}
