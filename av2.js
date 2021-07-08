//variable in js
//var,let,const
var name='anand';
console.log(name);
var channel;//only initialize the var not assign value
channel='anand verma';
console.log(channel);
var marks=90;
console.log(name,channel,marks)

//rules of js variable
// 1.can not start with Number
// 2.can start with letter,number,_,$
// 3.are case senstive

const myname="anand verma";
console.log(myname);
// myname='suraj verma'; mai const variable ki value ko change nhi kr skta
// console.log(myname);
// const fruit; mai const variable ko initialize nhi kr skta mujhe value ko assign kerna hoga
const fruit="banana";
console.log(fruit);

//let variable have block level scope while var variable have global scope
{
    let marks=100;
    console.log(marks);//print block value
}
console.log(marks);//print global var value

const arr=[1,2,3,4,5,6,7,8,9];
arr.push(45);//yaha maine const use kiya hai but usme value to add kr skte hai lekin dubara se arr name se dusra array nhi bna skte
console.log(arr);
/*
most common programming case types:
1. camelCase    //myName
2. kebab-case   //my-name
3. snake_case   //my_name
4. PascalCase   //MyName
*/