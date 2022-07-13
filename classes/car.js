class Car {
  doors = 4;
  wheels = 4;

  constructor(doors) {
    this.doors = doors;
  }

  addDoors(doors) {
    this.doors += doors;
  }

  showDoors() {
    console.log("Doors: ",this.doors);
  }
}

module.exports = Car;