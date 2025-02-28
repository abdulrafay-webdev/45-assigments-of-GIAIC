// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.


function make_album(artist:string,title:string,tracks?:string):object{
    let album:{artist:string,title:string,}={
        artist:artist,
        title:title,
    };
    if(album!==undefined){
        album[`tracks`]=tracks
    }
    return album;
}

let album1=make_album("atif aslam","jalpari");
let album2=make_album("strings","duur");
let album3=make_album("nusrat fateh ali khan","Shahbaaz","Shahbaaz Qalandar");

console.log(album3);
console.log(album1);
console.log(album2);



