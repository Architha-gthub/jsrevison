//Spread-Spredaing the elements of an array ,object and function calls
//defined By-[...spread]
//spread used in arrays ,objects,and in function calls
//To remember easily it right side of array we right and we recognize it is spread operator
//Spread in array
const arr1=[1,2,3,4]
const arr2=[5,6,7,8,9,10,11]
const arr3=[...arr1,...arr2]
console.log(arr3)
//Spread in object
const obj1={
    name:"john",
    age:30
}
const obj2={
    place:"Hyderabad",
    Designation:"software Engineer"
}
const obj3={...obj1,...obj2}
console.log(obj3)
const obj4={
    place:"Bangalore",
    Experience:"3 Years"
}
const New={...obj3,...obj4,}// we can add multiple things when we take same object it will take last declared ones so here i place Hyderabad is replaced by Bagalore
console.log(New)
//Spread in functionCalls
function sum(a,b,c){
    console.log(a+b+c)
}
const nums=[1,5,7]
sum(...nums)
//Rest-Collect the elements
//Both rest and spread is denoted by same[...Rest]
// rest operator used in function parameters and in desrtucting
//To remember easily it left side of array we right and we recognize it is rest operator
//Rest in function Paremeter
function sub(...values){
    console.log(values.reduce((sum,next)=>sum+next))
}
sub(7,11,5)
sub(1,5,7,11)
//2
function greet(greeting, ...names) {
    for (let name of names) {
      console.log(`${greeting}, ${name}!`);
    }
  }
  
  greet("Hello", "Alice", "Bob", "Charlie");
//Rest in destructing
//destructing-objects
const{name,...rest}={name:"john",age:30,gender:"male"}
console.log(name)
console.log(rest)
//destructing-array
const num=[10,1,5,7,11]
const[list1,...list2]=num
console.log(list1)
console.log(list2)