// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list






let guests = ["ahmed","abbas","taha"]

console.log(guests);

console.log(`${guests[0]} may aapko dinner par bulana chahta hoon. Aap se mil kar khushi hogi!`);

console.log(`${guests[2]} may aapko dinner par bulana chahta hoon. Aap se mil kar khushi hogi!`);

console.log(`sorry ${guests[1]} ap nhi aasatay dinner per`);

guests.pop()
guests.push("wahab")


console.log(guests);

console.log(`new invitation`);

console.log(`${guests[0]} may aapko dinner par bulana chahta hoon. Aap se mil kar khushi hogi!`);
console.log(`${guests[1]} may aapko dinner par bulana chahta hoon. Aap se mil kar khushi hogi!`);
console.log(`${guests[2]} may aapko dinner par bulana chahta hoon. Aap se mil kar khushi hogi!`);

