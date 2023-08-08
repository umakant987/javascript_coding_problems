/* Abstract Factory Definition
- create families of related objects without specifying their concrete classes */

/* Difference Between Factory and Absstract Factory
- Simple factory   => Factory itself creates the objects.
- Abstract Factory => Abstract factory is used to create concrete factory.. and from concrete factory you can create actual objects 

VehicleFactory => car, bike
TeslaFactory   => TeslaCar, TeslaBike
TataFactory    => TataCar, TataBike */

/* Below program geenerated using ChatGpt
write javascript abstract factory pattern program which contains VehicleFactory as abstract factory and Tesla and Tata as Concrete factories which manufactures car and bike as products. */

/* 4 steps 
Abstract Factory: This is an interface or an abstract class that defines the methods for creating different types of objects.

Concrete Factory: These are classes that implement the Abstract Factory. Each Concrete Factory is responsible for creating a family of related objects.

Abstract Product: This is an interface or an abstract class that defines the common methods for the products that the Concrete Factories create.

Concrete Product: These are classes that implement the Abstract Product interface and represent the actual objects that will be created. */

// Abstract VehicleFactory class
class VehicleFactory {
    createCar() {
        throw new Error('You must implement createCar method in the concrete factory');
    }

    createBike() {
        throw new Error('You must implement createBike method in the concrete factory');
    }
}

// Concrete TeslaFactory class
class TeslaFactory extends VehicleFactory {
    createCar() {
        return new TeslaCar();
    }

    createBike() {
        return new TeslaBike();
    }
}

// Concrete TataFactory class
class TataFactory extends VehicleFactory {
    createCar() {
        return new TataCar();
    }

    createBike() {
        return new TataBike();
    }
}

// Product Car class
class Car {
    constructor(make) {
        this.make = make;
    }

    info() {
        return `Car: ${this.make}`;
    }
}

// Concrete TeslaCar class
class TeslaCar extends Car {
    constructor() {
        super('Tesla');
    }
}

// Concrete TataCar class
class TataCar extends Car {
    constructor() {
        super('Tata');
    }
}

// Product Bike class
class Bike {
    constructor(make) {
        this.make = make;
    }

    info() {
        return `Bike: ${this.make}`;
    }
}

// Concrete TeslaBike class
class TeslaBike extends Bike {
    constructor() {
        super('Tesla');
    }
}

// Concrete TataBike class
class TataBike extends Bike {
    constructor() {
        super('Tata');
    }
}

// Usage
function main() {
    // Creating the TeslaFactory
    const teslaFactory = new TeslaFactory();

    // Creating a Tesla car and bike
    const teslaCar = teslaFactory.createCar();
    const teslaBike = teslaFactory.createBike();

    console.log(teslaCar.info()); // Output: Car: Tesla
    console.log(teslaBike.info()); // Output: Bike: Tesla

    // Creating the TataFactory
    const tataFactory = new TataFactory();

    // Creating a Tata car and bike
    const tataCar = tataFactory.createCar();
    const tataBike = tataFactory.createBike();

    console.log(tataCar.info()); // Output: Car: Tata
    console.log(tataBike.info()); // Output: Bike: Tata
}

main();

//***********************************************************************
//Example 2:
// Abstract Factory: VehicleFactory
function VehicleFactory() {
    return {
        createCar: function () { },
        createBike: function () { },
    };
}

// Concrete Factory: Tesla
function Tesla() {
    // Implement the createCar method for Tesla factory
    return {
        createCar: function () {
            return new TeslaCar();
        },
        createBike: function () {
            return new TeslaBike();
        },
    };
}

// Concrete Factory: Tata
function Tata() {
    // Implement the createCar method for Tata factory
    return {
        createCar: function () {
            return new TataCar();
        },
        createBike: function () {
            return new TataBike();
        },
    };
}

  // Abstract Products: Car and Bike
/* function Car() {
  this.type = "Unknown Car";
}
function Bike() {
  this.type = "Unknown Bike";
}
 
// Concrete Products: TeslaCar, TeslaBike, TataCar, TataBike
function TeslaCar() {
  this.type = "Tesla Car";
}
function TeslaBike() {
  this.type = "Tesla Bike";
}
function TataCar() {
  this.type = "Tata Car";
}
function TataBike() {
  this.type = "Tata Bike";
}
 
// Usage
function produceVehicles(factory) {
  const car = factory.createCar();
  const bike = factory.createBike();
  console.log(`Produced ${car.type}`);
  console.log(`Produced ${bike.type}`);
}
 
// Creating Concrete Factory: Tesla
const teslaFactory = Tesla();
produceVehicles(teslaFactory);
 
// Creating Concrete Factory: Tata
const tataFactory = Tata();
produceVehicles(tataFactory); */

