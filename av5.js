// concat() of string
const Fname='Anand';
const Lname='Verma';
// console.log(Fname+' '+Lname);

let html;
html="<h1>My name is:</h1>"+"<p>Anand Verma</P>";
html=html.concat('this is my name ','and i am from lko');
// console.log(html);

//str.length,str.toLowerCase(),str.toUperCase()
// console.log(html.length);
// console.log(html.toLocaleLowerCase());
// console.log(html.toUpperCase());
// console.log(html[4]);
// console.log(html.indexOf('My'));
// console.log(html.charAt(4));
// console.log(html.lastIndexOf('>'));
// console.log(html.endsWith('lko'));
// console.log(html.includes('lko'));
// console.log(html.substring(1,5));
// console.log(html.slice(0,4));
// console.log(html.split(' '));
console.log(html.replace('lko','barabanki'));

