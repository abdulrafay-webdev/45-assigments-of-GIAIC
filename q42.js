// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magicians = ["David Copperfield", "Harry Houdini", "David Blaine", "Dynamo", "Criss Angel", "Derren Brown", "Penn & Teller", "Lance Burton", "Shin Lim", "Ricky Jay"];
function make_great(magicians, messages) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log("".concat(messages, " ").concat(magician));
    }
}
function show_magicians(show_magicians) {
    make_great(magicians, "the great");
}
// show_magicians(magicians)
// make_great(magicians,"the great")
show_magicians(magicians[0]);
// function make_great(magicians:string[]):void{
//     for(let i=0 ; i < magicians.length ; i++){
//         magicians[i]=`the great ${magicians}`
//     }
// }
