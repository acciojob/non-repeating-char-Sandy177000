
function firstNonRepeatedChar(str) {
  // Write your code here
  let map = new Map();

  for (let index = 0; index < str.length; index++) {
     
   if(map.has(str[index])){
     map.set(str[index],map.get(str[index])+1);
   }
   else{
     map.set(str[index],1);
   }
 }

 let ans = null;
 for(const ch of str){
   
    if(map.get(ch)==1){
      ans = ch;
      break;
    }
 }

 return ans;

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
