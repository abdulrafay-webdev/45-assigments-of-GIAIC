// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!


let animals:string[]=["cat","dog","rabbit"]

//use for loop to print
for(let animal of animals){
    console.log(animal);
}

//after modifying
for(let animal of animals){
    console.log(`a ${animal} would make a great pet`);
}

//outside the loop
console.log(`this one animal ${animals[0]} have a best quality to make a great pet`);
