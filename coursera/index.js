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
