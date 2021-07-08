//type conversion and type coercion
let myVar;
myVar=34;
myVar=String(34);
console.log(myVar,(typeof myVar));

let date=String(new Date());
console.log(date,(typeof date));

let arr=String([1,2,3,4,5]);
console.log(arr,(typeof arr));
console.log(arr.length,(typeof arr));

let i=76;
console.log(i.toString());//toString function working

let str=Number("1234");// number function
str=Number("12j56");
str=Number("true")
str=Number([1,2,3,4,5,6,7,8,9]);
console.log(str,(typeof str));

let number=parseFloat('34.890');
console.log(number.toFixed(5),(typeof number));//toFixed function round the values ande fixed the total decimal values


// type coercion

let myStr="456";
let mynum=56;
console.log(myStr+mynum);

let myStr1=Number("456");
let mynum1=56;
console.log(myStr1+mynum1);