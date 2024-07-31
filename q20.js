// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var rivers = ["clifton", "hawksbay", "turtle beach", "manora", "kurlee"];
console.log("\n here some famous rivers in karachi \n");
rivers.forEach(function (rivers) {
    console.log("-".concat(rivers));
});
