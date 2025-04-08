// Strings Methods
//Find length:length
const str1="Hello world".length
console.log(str1)
//Convert character casings: toLowerCase(),toUpperCase()
const str2="JavaScript".toLowerCase()
console.log(str2)
const str3="python".toUpperCase()
console.log(str3)
const str4="React"
if(str4.length>4){
    console.log(str4.toLocaleUpperCase())
}else
{
    console.log(str4.toLocaleLowerCase())
}
//Find indices based on charcters:indexOf,lastIndexOf
const text="Happy journey"
const text1="banana"
console.log(text1.lastIndexOf("a"))
console.log(text1.indexOf("a"))
console.log(text.indexOf("p"))
const text2="firstname"
console.log(text2[0].toUpperCase()+text2.slice(1))
//Find characters based on index value:charAt,at
const text3="characters"
console.log(text3.charAt(0).toUpperCase()+text3.slice(1))
//Extracting methods:Slice
let str5 = "JavaScript";
let result2 = str5.slice(2, 7);
console.log(result2);    
//searching methods:includes
const text4="Hello world"
console.log(text4.includes("world"))
const text5= "java srcipt is awesome"
console.log(text5.includes("world"))
console.log(text5.includes("is"))
//starts with
let text6 = "Career Catalyst is important";
console.log(text6.startsWith("journey"));           
console.log(text6.startsWith("Career"));
//ends with
//starts with
console.log(text6.endsWith("journey"));            
console.log(text6.endsWith("important"));  
//split
const str7="a,b,c"
console.log(str7.split(","))