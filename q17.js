// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
var guests = ["ahmed", "abbas", "taha"];
guests.unshift("wahab");
guests.splice(3, 0, "rajab");
guests.push("ikrash");
while (guests.length > 2) {
    var notcomeguest = guests.pop();
    console.log("unfortunately Dear ".concat(notcomeguest, " you are not able to come"));
}
console.log("dear ".concat(guests, " you are still invited"));
guests.pop();
guests.pop();
console.log(guests);
