// write an if/else that checks if a number is positive or negative
const num = -1;
if (num > 0) {
    console.log('this number is positive', num);
    console.log('haha')
} else if(num === 0) {
    console.log('this number is actually 0')
} else {
    console.log('this number is negative', num);
}

// assign a letter grade based on score:
// // A = 90+, B = 80-89, C = 70-79, below 70 = F
const score = 60;
let letterGrade = null;
if (score >= 90) {
    letterGrade = 'A';
} else if (score >= 80 && score < 90) {
    letterGrade = 'B';
} else if (score >= 70 && score < 80) {
    letterGrade = 'C';
} else {
    letterGrade = 'F';
}
console.log(letterGrade)



// // FIX THE BUG: why doesn't this work as expected?
const age = 20;
if (age === 18) {
  console.log("you are 18");
} else {
  console.log("you are not 18");
}



// // Check the name and print a statement with a template literal: "Welcome, Dora!"
const myName = "Dora";
if (myName === 'Dora') {
    console.log("Welcome " + myName);
    console.log(`Welcome ${myName}`)
}