// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

let sandwiches:string[]=["cheese","mayo","garlic"]

let menu=function(...list:string[]){
    return list.sort();
}

console.log(`${sandwiches}`);
console.log(`${menu("chicken sandwhich","tikka sandwhich")}`);
console.log(`${menu("mayo garlic sandwhich","afghani tikka sandwhich","bihari boti sandwhich")}`);

