{
  // **Mapped type

  type Area = {
    height: number;
    width: number;
  };

  type StringArea = {
    [index in keyof Area]: string;
  };

  type Height = Area["height"];

  type VehicleOne<T> = {
    [index in keyof T]: T[index];
  };
  const vehicleOne: VehicleOne<{
    brand: string;
    model: string;
    type: string;
    year: number;
    color: string;
  }> = {
    brand: "Ford",
    model: "Mustang",
    type: "car",
    year: 2021,
    color: "red",
  };
}
