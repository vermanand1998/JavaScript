const product={
    name:'Laptop',
    price:30000,
    brand:'Apple'

}
// console.log(product);
// product.color='silver Grey';
// console.log(product);
// factory function==================================
// function createProduct(name,price,brand) {
//     return{
//         name,
//         price,
//         brand,
//     };
    
// }
// const p1=createProduct('keyboard',20000,'Logitech');
// console.log(p1);

//constructor fuction=================================
// function Product(name,price,brand) {
//     this.name=name,
//     this.price=price,
//     this.brand=brand;
    
// }
// const p2=new Product('Wireless Mouse',1000,'Apple');
// console.log(p2);

//factory funtion====================================
function createProduct(name,price,brand,imageur1) {
    return{
        name,
        price,
        brand,
        imageur1,
        getPrice(){
            console.log("price is:",price);
        }
    };   
}
const p1=createProduct('keyboard',20000,'Logitech');
// console.log(p1);
// p1.getPrice(p1);

//constructor function===============================
function Product(name,price,brand) {
    this.name=name,
    this.price=price,
    this.brand=brand;
    // this.getPrice=function () {
    //     console.log("price is:",price)
        
    // }
    //return this;  ye optional hai
    
}
const p2=new Product('Wireless Mouse',1000,'Apple');
// console.log(p2);
// p2.getPrice(p2);

//more about constructor
//createProduct(); Product();

// createProduct.constructor///function(native code)
// p1.constructor//object(native code)



//object equality--------objects equal or same?
//1.value type v/s reference type
//2.number,string,boolean,symbol,undefined
//3.reference -- arrays, objects, lists

// let x=10;
// let y=20;
// console.log(x);
// function swap() {//20
//     x=y;//x=20
//     console.log(x);//20  
// }
// swap(y);//swap(20)
// console.log(x);//20

// let x={
//     value:10
// };
// let y={
//     value:20
// };
// console.log(x);
// function swap(y) {
//     x=y;//x points to y address
//     console.log(x);
// }
// swap(y);//swap(20) y---adresss
// console.log(x);


//object equality

const p4=new Product('Pillow', 1000, 'XYZ');
const p5=new Product('Pillow', 1000, 'XYZ');
// console.log(p4===p5);//not equal
function isSame(p4, p5) {
    for(let key in p4)
    {
       if(p4[key]!=p5[key])
       {
        //    console.log(p4[key]," ",p5[key]);
           return false;
       }
    }
    return true;   
}
// console.log(isSame(p4,p5));
let p6={
    rollno:1
}
// console.log(isSame(p4,p6));

// template literals===============================

//String str=new String('Anand');
// let a= new String('Hello');
// let a1='Hello';
// console.log(a==a1);//true
// console.log(a===a1);//false
// console.log('type of a:',typeof(a));
// console.log('type of a1:',typeof(a1));

let x='hello';// string literals ' ' , " "
let y='hello';// template literals ' '
console.log(x);
console.log(y);
console.log(x==y);//true
console.log(x===y);//true

const p7=new Product("Tea Powder",200,"Twilings");
console.log(p7);
let emailmsg='We have recieved you order.'+'\n'+'Product name: '+p7.name;
console.log(emailmsg);



