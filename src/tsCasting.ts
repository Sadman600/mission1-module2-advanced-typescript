{
  // Type Casting or Type Assertion or Type Narrowing

  // Casting with as

  let x: any = 5;
  x = 5;

  (x as number).toString();
  ("4" as string).length;

  //   Casting with <>

  (<number>x).toString();

  function myFunc(x: string | number): string | number | undefined {
    if (typeof x === "string") {
      const convert = parseFloat(x) * 1000;
      return `my result ${convert}`;
    }
    if (typeof x === "number") {
      return x * 1000;
    }
  }

  const result1 = myFunc(1000) as number;

  const result2 = myFunc("1000");

  type CustomErr = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomErr).message);
    console.log((<CustomErr>error).message);
  }
}
