// const sum = (a, b) => a + b;
// const mul = (a, b) => a * b;
// const g = 9.8;
// const PI = 3.14;


//module.exports means ki math.js dusri file ko kya info de rhi h, abhi 123 de rhi h
//Way - 1
// module.exports = 123;
// module.exports = "hello!";

//Way - 2 (Object bana ke)
// let obj = {
//     sum: sum,
//     mul: mul,
//     g: g,
//     PI: PI,

// };
// module.exports = obj;

//Way - 3
// module.exports = {
//         sum: sum,
//         mul: mul,
//         g: g,
//         PI: PI,
    
//     };

//Way - 4
// module.exports.sum = (a, b) => a + b;
// module.exports.mul = (a, b) => a * b;
// module.exports.g = 9.8;
// module.exports.PI = 3.14;

//Way - 5
// exports.sum = (a, b) => a + b;
// exports.mul = (a, b) => a * b;
// exports.g = 9.8;
// exports.PI = 3.14;

//exports = 5; This is wrong syntax


//Import modules -> require vs import
export const sum = (a, b) => a + b;
export const mul = (a, b) => a * b;
export const g = 9.8;
export const PI = 3.14;
