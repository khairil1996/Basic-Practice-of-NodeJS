// string-template.js

const greeting = "hello world"; //can use "" or ''

const answer = 'forty two'

const statement = `the value of Pi is ${Math.PI.toFixed(2)}`; //interpolation, dynamic value
console.log(statement);

const msg = 'I just love it';
console.log(`coffee is great because of ${msg}`);

//can do in multiple line
const myAddress = `house: 9, 
bhubanesware,
india.`;
console.log(myAddress);