{
  // **Generic type with Interface
  interface VehicleOne {
    brand: string;
    model: string;
    type: string;
    year: number;
    color: string;
  }
  interface PersonOne<T> {
    firstName: string;
    lastName: string;
    age: number;
    eyeColor: string;
    address: {
      city: string;
      state: string;
      country: string;
    };
    vehicle: T;
  }
  const personOne: PersonOne<VehicleOne> = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    address: {
      city: "Houston",
      state: "Texas",
      country: "USA",
    },
    vehicle: {
      brand: "Ford",
      model: "Mustang",
      type: "car",
      year: 2021,
      color: "red",
    },
  };
}
