//Node Files
// let n=5;
// for(let i=0; i<n; i++)
// {
//     console.log("hello, ", i);
// }
// console.log("Byee!");




//Process in Node
//console.log(process.argv);
// let args = process.argv;
// for(let i=2; i< args.length; i++)
// {
//     console.log("Hello to ", args[i]);

// }





//Export in files
// const math = require("./math");
// console.log(math.sum(2,2));
// console.log(math.PI);





//Export in directories = Fruit wali directory se data lena h
// let info = require("./Fruits");
// console.log(info);
// console.log(info[0]);





//Import modules -> require vs import
import {sum, PI} from "./math.js";
//console.log(sum(1,2));
//Generate rando words(npm ki site se liya)
import { generate, count } from "random-words";
console.log(generate());



