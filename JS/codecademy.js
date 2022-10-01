function DNAStrand(dna) {
  let a = dna.split("");
  let array = a.map(function (ele) {
    if (ele == "C") {
      return "G";
    } else if (ele == "T") {
      return "A";
    } else if (ele == "A") {
      return "T";
    } else if (ele == "G") {
      return "C";
    }
  });
  return array.join("");
}

console.log(isIsogram("ada"));
console.log(isIsogram("isogram"));
console.log(isIsogram("isIsogram"));
