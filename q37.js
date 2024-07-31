// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size) {
    if (size == "small") {
        console.log("the size of shirt is small");
    }
    else if (size == "medium") {
        console.log("the size of shirt is medium");
    }
    else {
        console.log("the size of shirt is large ,I love TypeScript");
    }
}
make_shirt("large");
