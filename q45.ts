// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


interface detail{
    name:string,
    model_year:number;
}
let car_detail:detail={
    name:"civic",
    model_year:2024
}

let showroom=function(vehicle_detail:{manufacturer:string,model_name:string}){
    return `manufacture:${vehicle_detail.manufacturer} and model: ${vehicle_detail.model_name}`
}
console.log(showroom({manufacturer:"toyota",model_name:"civic turbo"}));
console.log(`car name : ${car_detail.name}, car year : ${car_detail.model_year}`);


