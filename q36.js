// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function
function make_shirt(size, message) {
    console.log("the size of shirt is ".concat(size, " and print the message\"").concat(message, "\" "));
}
var size = ["small", "medium", "large"];
var message = "Zindagi ek safar hai, manzil nahi";
make_shirt(size[1], message);
