{
  // **Conditional Type

  type a1 = number;
  type b1 = string;
  type c1 = boolean;
  type d1 = "D";

  type c = a1 extends null ? null : b1 extends undefined ? undefined : boolean;

  type Name = "Mr.X";
  const name: Name = "Mr.X";

  type Vehicles = {
    bus: string;
    car: string;
    bike: string;
  };

  type MyVehicles<T> = T extends keyof Vehicles ? true : false;

  type YourVehicle = MyVehicles<"buss">;
}
