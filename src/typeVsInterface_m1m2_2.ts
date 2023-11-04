{
  // **Type Aliases and Interface

  //   Type Aliases
  type VehicleOne = Registration & {
    brand: string;
    model: string;
    year: number;
  };
  type Registration = {
    city: string;
    state: string;
    country: string;
  };
  const vehicleOne: VehicleOne = {
    brand: "Ford",
    model: "Mustang",
    year: 2021,
    city: "Houston",
    state: "Texas",
    country: "USA",
  };
  /*Type aliases with array*/
  type Rolls = number[];
  const rolls: Rolls = [1, 2, 3, 4];
  /*Type aliases with function*/
  type Add1 = (num1: number, num2: number) => number;
  const add: Add1 = (num1, num2) => num1 + num2;

  //   Type Interface
  interface VehicleTwo extends Registration2 {
    brand: string;
    model: string;
    year: number;
    color: string;
  }
  interface Registration2 {
    city: string;
    state: string;
    country: string;
  }

  const myVehicle: VehicleTwo = {
    brand: "Ford",
    model: "Mustang",
    year: 2021,
    color: "red",
    city: "Houston",
    state: "Texas",
    country: "USA",
  };
  /*Interface with array*/
  interface Rolls1 {
    [index: number]: number;
  }
  const rolls1: Rolls1 = [1, 2, 3, 4];
  /*Interface with function*/
  interface Add2 {
    (x: number, y: number): number;
  }
  const add2: Add2 = (x, y) => x * y;
}
