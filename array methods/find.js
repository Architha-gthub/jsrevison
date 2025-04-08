// Custom find() method
//find() method is an iteravtive and one of method in array methods
// it is used for searching through an array
// it return the first value in element when it satisfied condition otherwise if it is not found any value it will return undefined
// find method return only one value 
// syntax for find()
//   array.find(callback(element, index, array), thisArg)
const numbers = [3, 7, 9, 14, 21];
function customFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i], i, array)) {
        return array[i]; 
      }
    }
    return undefined;
  }
const result = customFind(numbers, function (num) {
  return num > 10
});
console.log(result)
 //directly we can write using find method in single line
 const x=numbers.find(ele=>ele>9)
 console.log(x)
//with objects
const obj = [
    { id: 1, name: "Luna" },
    { id: 2, name: "Kai" },
    { id: 3, name: "Nova" },
    {id:4,  name:"john"},
    {id:5,name:"Doe"}
  ];
  
  const user = customFind(obj, function (u) {
    return u.id >3;
  });
  
  console.log(user); 
  //directly we can write using find method
  const found =obj.find(arr=>arr.id>3);
  console.log(found)