// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
var sandwiches = ["cheese", "mayo", "garlic"];
var menu = function () {
    var list = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        list[_i] = arguments[_i];
    }
    return list.sort();
};
console.log("".concat(sandwiches));
console.log("".concat(menu("chicken sandwhich", "tikka sandwhich")));
console.log("".concat(menu("mayo garlic sandwhich", "afghani tikka sandwhich", "bihari boti sandwhich")));
