/* basic javascript dictionary(map)-like template
 */
var dict = {};
for (let c of str) {
    if(dict[c])
        dict[c]++;
    else
        dict[c] = 0;
}

/* simplified dictionary-like template
 * same as above code
 */
var dict ={};
for(let c of str){
    dict[c] = (dict[c] || 0) + 1;
}

