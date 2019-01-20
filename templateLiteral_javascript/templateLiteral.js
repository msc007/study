/* template literal
 * simple way to embed expression with normal strings
 * template is nestable: `str1 `{expr}` str2 `
 */
`string text ${expression} string text`

/*
 * tagged template
 * parse template literal as function parameter
 */
function myTag(str1, str2){
    console.lot(str1 + str2);
}
str2 = "World!";
myTag`Hello ${str2}`;   
//output: Hello World!
