{
  // **Constraints in Typescript
  const personFunc = <T extends Person0>(param: T): T => {
    return {
      ...param,
    };
  };

  interface Person0 {
    firstName: string;
    lastName: string;
    age: number;
    eyeColor: string;
  }
  interface Person {
    firstName: string;
    lastName: string;
    age: number;
    eyeColor: string;
  }
  const person: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };
  const person2 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };
  const myPerson = personFunc<Person>(person2);
}
