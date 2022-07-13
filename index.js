const suma = require('./utils/suma');
const Car = require('./classes/car');

console.log("1+2+3=",suma(1, 2, 3));
const car = new Car(2);
car.showDoors();
car.addDoors(2);
car.showDoors();
