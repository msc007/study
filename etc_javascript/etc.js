/* Closure
 * Closures are nothing but FUNCTIONS WITH PRESERVED DATA
 * variable x is closure data in this case.
 * Note: You can just use "let" to preserve data as well
*/
for (var i = 0; i < 5; i++) {
    (function(x) {
        setTimeout(function() { console.log(x); }, x * 1000 );
    })(i);
}


/* Null is also an object
 */
var bar = null;
console.log(typeof bar === "object"); //return true

/* Note: Javascript does not requre semicolon(;).
 *       Therefore, below two function retuns different output.
 *       Second function output:
 *          foo1 returns:
 *          Object {bar: "hello"}
 *          foo2 returns:
 *          undefined 
 */
function foo1(){
  return {
      bar: "hello"    
  };
}
function foo2(){
  return
  {
      bar: "hello"
  };
}

/* All numeric values are always stored as Floating precision
 */
console.log(0.1 + 0.2) //output: 0.30000000000000004
console.log(0.1 + 0.2 === 0.3) //output: false

/* Regex in javascript
 * More rules: https://www.w3schools.com/jsref/jsref_obj_regexp.asp
 * Below is palidrome example (works with any string; not case sensitive)
 */
function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
  }

/* Loosely typed language
 *
 */
console.log(1 +  "2" + "2");      //"122"
console.log(1 +  +"2" + "2");     //"32"
console.log(1 +  -"1" + "2");     //"02"
console.log(+"1" +  "1" + "2");   //"112"
console.log( "A" - "B" + "2");    //NaN2
console.log( "A" - "B" + 2);      //NaN

/* Const keyword
 * const is not refering to immutablity, it creates immutable binding
 */
const foo = {};
foo.bar = 42;
console.log(foo.bar); //output: 42

/* Arrow function vs refular function
 * object method should not be defined as arrow function, because 'this' inside arrow function will be inherits value from its parent scope.
 * i.e) below cat.jumps() function will not increase cat.lives
 */
 var cat = {
  lives: 0,
  jumps: () => {
    this.lives++;
  }
}
