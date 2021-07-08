/* Data types in JS
Primitive datatype[memory allocation in stack]also called base datatypes
(string,number,boolean,null,undefined,symbol)


Reference Datatype[memory allocation in dynamic memory that is Heap]also called objects(means derived datatypes)
(arrays,object literals,function,dates)
*/


//primitive datatypes
//1. String
var name="anand verma";
console.log("my string is : "+name);
console.log("my string is : "+(typeof name));

//2. Numbers
let marks=80;
console.log("my number is : "+marks);
console.log("my number is : "+(typeof marks));

//3. Boolean
let isDriver=true;
console.log("my boolean is : "+isDriver);
console.log("my boolean is : "+(typeof isDriver));

//4. Null
let nullVar=null;
console.log("my null is : "+nullVar);
console.log("my null is : "+(typeof nullVar));//bogaus return type of value so ye hmko object datatyep batata hai jbki ye primitive datatype hai

//5. Undefined
let undef=undefined;
console.log("my undefined is : "+undef);
console.log("my undefined is : "+(typeof undef));

//reference datatypes
//1. arraya
myarr=[1,2,3,4,5,false,45,"string",9];
console.log("my arrays is : "+myarr);
console.log("my arrays is : "+(typeof myarr));

//2. object literals
let myMarks = {
    hindi:90,
    math:80,
    english:60,
    science:92
}
console.table(myMarks);
console.log("my objects is : "+(typeof myMarks));

//3.function
function findName() {
    
}
console.log(typeof findName);

//4. dates
let date=new Date();
console.log(typeof date);
