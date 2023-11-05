{
  // **Constrains with Keyof
  type VehicleOne = {
    brand: string;
    model: string;
    type: string;
    year: number;
    color: string;
  };
  const vehicleOneFunc = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
  };
  const vehicleOne: VehicleOne = {
    brand: "Ford",
    model: "Mustang",
    type: "car",
    year: 2023,
    color: "red",
  };
  const vehicle = vehicleOneFunc(vehicleOne, "brand");
}
