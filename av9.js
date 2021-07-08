// function is block of code 
// function birth(name,thanks) {
//     console.log('Happy birthday '+(name)+' and good wishes to you'+(thanks));   
// }
// let name='Anand Verma';
// birth(name,' Thanks a lot');

//funtion return somthing
function birth(name,thanks=' Thanks a lot') {
    console.log('Happy birthday '+(name)+' and good wishes to you'+(thanks));
    return 1;   
}
let name='Anand Verma';
let val=birth(name);
console.log(val);



//funtion in objects
const myobj={
    name:'anand',
    game:function() {
        return "PUBG"
    }
}
console.log(myobj.game());


arr=['anand','abhishek','bhai','goodboy'];
arr.forEach(function (element,index,array) {
    console.log(element,index);
})