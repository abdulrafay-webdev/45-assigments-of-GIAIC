// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


// • Tests for equality and inequality with strings
let myfavcar:string="civic"
console.log(myfavcar=="civic");
console.log(myfavcar!="mehran");
console.log(myfavcar!="civic");

// • Tests using the lower case function
let fruit:string="aPple"
console.log(fruit.toLowerCase()=="APPLE");
console.log(fruit.toLowerCase()=="apple");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let myage:number=18
console.log(myage>=20);
console.log(myage>=10);
console.log(myage==18);

// • Tests using "and" and "or" operators
let tr:boolean=true
let fa:boolean=false
console.log(tr&&fa);
console.log(!tr&&fa);
console.log(tr||fa);
console.log(!tr||fa);

// • Test whether an item is in a array
let city=["karachi","quetta","multan"]
console.log(city.includes("karachi"));
console.log(!city.includes("peshawar"));
console.log(city.includes("hyderabad"));

// • Test whether an item is not in a array
console.log(city.includes("mari"));
console.log(city.includes("quetta"));
console.log(!city.includes("karachi"));



