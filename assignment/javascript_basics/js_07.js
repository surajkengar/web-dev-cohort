//there are diffreent method present in javascript
// trim()

// trim() method  in javascript used to remove spaces , tabs and newlines from the starting and ending from the string not from the middle .

let name = "  suraj   ";
console.log(name.length);
let newstring = name.trim();
console.log(newstring.length);

//toUpperCase()-  toUpperCase is used to make the all character in string is in capital or uppercase format .
let newstring_1 = name.toUpperCase();
console.log(newstring_1);

//toLowerCase() - toLowerCase is used to make the all character in string is in small or a lowercase format .

let newstring_2 = name.toLowerCase();
console.log(newstring_2);

//slice() - slice() method is used to extract the particular part of the string without changing the original string .
let newstring_3 = name.slice(0,3);
console.log(newstring_3);

// in slice method starting index  is inclusive 
// and ending index is exclusive .