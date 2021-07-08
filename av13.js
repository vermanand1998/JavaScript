//object creation
const s1={
    name:"Anand",
    rollNo:06,
    branch:"IT",
    displayInfo: function() {
        // console.log("Display Info");
        
    }
};

const s2={
    name:"Abhishek",
    rollNo:01,
    branch:"IT",
    displayInfo: function() {
        // console.log("Display Info");
        
    }
};

// console.log(s1);
s1.gender="Male";//adding new property in s1 object
// console.log(s1);

s1.getPercentage=function() {//adding new function in s1 object
    // console.log("In get percentage function");   
}
// console.log(s1);

//factory function
//constructor fuction
function createStudent(name,rollno) {
    return{
        name,
        rollno,
        displayInfo: function(){
            console.log("Display info",name);

        }
    };
    
}
const s3=createStudent("suraj",9);
console.log(s3);
s1.displayInfo()
const s4=createStudent("vijay",12);
console.log(s4);

//constructor
function Student(name,rollno) {
    this.name=name;
    this.rollNo=rollno;
    this.displayInfo=function() {
        console.log('Display Info for:',name);
        
    }
    
}
const s5=new Student('Anand Verma',19);
console.log(s5);
