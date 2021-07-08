// for ,while , do-while loop
//for loop----
for(let i=0;i<10;i++)
{
    // console.log(i);
}


//while loop----
let j=0;
while(j<10)
{
    // console.log(j);
    j=j+1;
}

//do-while loop---
let k=0;
do{
    // console.log(k);
    k=k+1;
}
while(k<10);

//break statment----
let l=0;
while(l<10)
{
    if(l==5)
    {
        break;
    }
    // console.log(l);
    l=l+1;
}

//continue statment----
let m=0;
do
{
    if(m==5)
    {
        m=m+1;
        continue;
    }
    // console.log(m);
    m=m+1;
}while(m<10);


//foreach loop
let arr=[1,2,3,4,5,6,7];
arr.forEach(function(element) {
    // console.log(element);
    
})


let myobj={
    name:'anand',
    channer:'myChannel',
    active:'true',
    marks:[1,2,3,4,54]
}
for(let key in myobj)
{
    console.log(myobj[key])
}
console.log('done');