// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.


//q18 we have
//date:30-july-2024
//time:9:52 AM



//store places in array
let place:string[]=["mari","kashmir","sawat","naran kaghan","islamabad"]
//original order
console.log(place);
// in alphabetic order
let alphabeticplace=[...place].sort()
console.log(alphabeticplace);
// show original list
console.log(place);
// reverse alphabetic order
console.log(alphabeticplace.reverse());
//show original list
console.log(place);
//reverse order
let reverseplace=[...place].reverse()
console.log(reverseplace);
//again reverse
console.log(reverseplace.reverse());
//original array in alphabetic order
console.log(place.sort());
//original array in alphabetic reverse order
console.log(place.sort().reverse());