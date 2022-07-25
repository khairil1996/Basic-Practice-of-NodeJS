//destructuring-1.js

// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 } = Math; //modern java

const { readFile } = require('fs');

// readFile();

const circle = {
	radius:2,
	someProp: 'someValue',
};

// const circleArea = (circle) => {
// 	return (PI*circle.radius*circle.radius).toFixed(2);
// }

// console.log(circleArea(circle));

const circleArea = ({radius}, {precision=2} = {}) => {
	return (PI*radius*radius).toFixed(precision);
}
console.log(circleArea(circle,{precision:5}));



