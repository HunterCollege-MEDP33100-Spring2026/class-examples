const price = 20;
const quantity = 3;
const total = price * quantity;
console.log(total);
const discount = total * 0.10;
console.log(discount);
const actualTotal = total - discount;
console.log("$" + actualTotal);


const myVar = 5 !== 3;
console.log(myVar);
console.log('10' === myVar);

const firstName = 'Dora';
const lastName = 'DO';
const fullName = firstName + " " + lastName;
console.log(fullName)

const age = 18;
const isYouth = age >= 18 || age <= 21;
console.log('isYouth', isYouth);
console.log(`isYouth -> ${isYouth}`)