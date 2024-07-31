// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function


function make_shirt(size:string,message:string){
    console.log(`the size of shirt is ${size} and print the message"${message}" `);
}
let size:string[]=["small","medium","large"]
let message:string="Zindagi ek safar hai, manzil nahi"

make_shirt(size[1],message)