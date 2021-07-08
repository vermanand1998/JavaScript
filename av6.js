//arrays (index start with 0)
const marks=[1,2,3,4,5,65,76,34,7];
const fruits=['apple','orange','banana'];
const mixed=['str',89,[3,5]];
const arr=new Array(23,123,21,'orange');
// console.log(marks);
// console.log(fruits);
// console.log(mixed);
// console.log(arr);

// console.log(arr.length);
arr[1]='anand';
console.log(arr);

let value=marks.indexOf(65);
console.log(value);

//mutating or modifying arrays
marks.push(200);//last me push kerta hai
console.log(marks);

marks.unshift(100);//start me push kerta hai
console.log(marks);

marks.pop()//pop from last
console.log(marks);

marks.shift()//pop from start
console.log(marks);

marks.reverse();//reverse the element
console.log(marks);

//objects
let myobj={
    name:'anand',
    channer:'myChannel',
    active:'true',
    marks:[1,2,3,4,54]
}
console.log(myobj);
