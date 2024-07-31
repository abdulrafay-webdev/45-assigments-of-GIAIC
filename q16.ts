// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.





let guests = ["ahmed","abbas","taha"]

console.log(`\ngood news we found a bigger table for dinner\n`);

guests.unshift(`wahab`)
guests.splice(3,0,"rajab")
guests.push("ikrash")



console.log(`dear ${guests[0]} i would like to invite you for dinner`);
console.log(`dear ${guests[2]} i would like to invite you for dinner`);
console.log(`dear ${guests[3]} i would like to invite you for dinner`);
console.log(`dear ${guests[4]} i would like to invite you for dinner`);
console.log(`dear ${guests[5]} i would like to invite you for dinner`);
console.log(`dear ${guests[1]} i would like to invite you for dinner`);


