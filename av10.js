//for loop variation
const arr=['red','green','blue'];

// 1) for loop
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}

// 2)for of loop

for(let x of arr)
{
    console.log(x);
}

// 3) for in loop
for(let index in arr)
{
    console.log(index);
}


// object delaration for loop traversing
const student={
    "name":"anand",
    "age" :22,
    "address" : "lucknow"
}
for(let index in student)
{
    console.log(index,'------',student[index]);
}
