// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name
var magicians = ["David Copperfield", "Harry Houdini", "David Blaine", "Dynamo", "Criss Angel", "Derren Brown", "Penn & Teller", "Lance Burton", "Shin Lim", "Ricky Jay"];
function make_great(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log("the great ".concat(magician));
    }
}
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log("".concat(magician));
    }
}
console.log(show_magicians(magicians));
console.log(make_great(magicians));
