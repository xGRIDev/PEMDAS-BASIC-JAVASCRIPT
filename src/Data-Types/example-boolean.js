if (new Boolean(true)) {
  console.log("This log is printed.");
}

if (new Boolean(false)) {
  console.log("This log is ALSO printed.");
}

const myFalse = new Boolean(false);
const g = Boolean(myFalse);
const myString = new String("Hello");
const s = Boolean(myString);
