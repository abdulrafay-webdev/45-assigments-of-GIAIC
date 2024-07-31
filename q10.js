// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//q18 we have
//date:30-july-2024
//time:9:52 AM
//store places in array
var place = ["mari", "kashmir", "sawat", "naran kaghan", "islamabad"];
//original order
console.log(place);
// in alphabetic order
var alphabeticplace = __spreadArray([], place, true).sort();
console.log(alphabeticplace);
// show original list
console.log(place);
// reverse alphabetic order
console.log(alphabeticplace.reverse());
//show original list
console.log(place);
//reverse order
var reverseplace = __spreadArray([], place, true).reverse();
console.log(reverseplace);
//again reverse
console.log(reverseplace.reverse());
//original array in alphabetic order
console.log(place.sort());
//original array in alphabetic reverse order
console.log(place.sort().reverse());
