{
  // ** Generic with Function
  const personFunc = <T>(params: T): T[] => {
    return [params];
  };
  const myFunc = <T, S>(param1: T, param2: S): [T, S] => {
    return [param1, param2];
  };
  const car = {
    type: "Fiat",
    model: "500",
    color: "white",
    registration: {
      city: "Houston",
      state: "Texas",
      country: "USA",
    },
  };
  const myFunc1 = personFunc<string>("555");
  const myFunc2 = personFunc<number>(5);
  const myFunc3 = personFunc<Car<Registration>>(car);
  const myFunc4 = myFunc<Car<Registration>, number>(car, 55);

  interface Car<T> {
    type: string;
    model: string;
    color: string;
    registration: T;
  }
  interface Registration {
    city: string;
    state: string;
    country: string;
  }
}
