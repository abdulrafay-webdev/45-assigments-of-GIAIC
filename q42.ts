// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians:string[]=["David Copperfield","Harry Houdini","David Blaine","Dynamo","Criss Angel","Derren Brown","Penn & Teller","Lance Burton","Shin Lim","Ricky Jay"]



function make_great(magicians:string[],messages:string){
    for(let magician of magicians){
        console.log(`${messages} ${magician}`);
    }
}


function show_magicians(show_magicians:string){
    make_great(magicians,"the great")
}




show_magicians(magicians[0])





