/* var a = 10;
let b = 20;
const c = 30;

function foo(){
    console.log(this);
}
foo();

const counter = (function (){
  var counter = 0;
  
  return function(){
    counter++;
    return counter;
  }
})();
counter(); */


for (let i = 0; i < 6; i++) {
    console.log(i, 1);
    setTimeout(() => {
        console.log(i, 2);
    }, 0);
    console.log(i, 3);
}

  // 0, 1
  // 0, 3


/* const isAnagram = function isSimilar(str1, str2) {
    let map1 = new Map();
    let map2 = new Map();
 
    for (let char of str1) {
        if (!map1.has(char)) {
            map1.set(char, 1);
        } else {
            map1.set(char, map1.get(char) + 1)
        }
    }
 
    for (let char of str2) {
        if (!map2.has(char)) {
            map2.set(char, 1);
        } else {
            map2.set(char, map2.get(char) + 1)
        }
    }
 
    for (let [k, v] of map1.entries()) {
        if (map1.get(k) !== map2.get(k)) {
            return false;
        }
    }
 
    return true;
}
 
// const result = isAnagram('listen', 'silent');
// const result = isAnagram('heelo', 'hello');
// const result = isAnagram('car', 'arc');
const result = isAnagram('rail safety', 'fairy tales');
console.log("Strings are anagram", result); */