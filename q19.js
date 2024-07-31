// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
//from q16
var guests = ["ahmed", "abbas", "taha"];
console.log("\ngood news we found a bigger table for dinner\n");
guests.unshift("wahab");
guests.splice(3, 0, "rajab");
guests.push("ikrash");
var guestslenth = guests.length;
console.log("now we inviting total ".concat(guestslenth, " guests for dinner"));
