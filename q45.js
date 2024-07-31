// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
var car_detail = {
    name: "civic",
    model_year: 2024
};
var showroom = function (vehicle_detail) {
    return "manufacture:".concat(vehicle_detail.manufacturer, " and model: ").concat(vehicle_detail.model_name);
};
console.log(showroom({ manufacturer: "toyota", model_name: "civic turbo" }));
console.log("car name : ".concat(car_detail.name, ", car year : ").concat(car_detail.model_year));
// interface Car {
//     car_name: string,
//     car_number: number;
//   }
//   let car_object:Car={
//     car_name:"Cultus",
//     car_number:1685
//   }
//   function greetin(car_object: { color: string,brand: string }):string {
//     return `Hello   ${car_object.color} \t ${car_object.brand}` ;
//   }
//   console.log(`${car_object.car_name} \t ${car_object.car_number}`)
//   console.log(greetin({color:"white",brand:"Honda"}))
