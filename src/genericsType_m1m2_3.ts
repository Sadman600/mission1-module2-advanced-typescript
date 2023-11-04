{
  // **Generics Type

  // Array Generic
  type GenericType<T> = Array<T>;

  type NumberType = number[];
  type StringType = string[];
  type BooleanType = boolean[];

  // Number Type Array
  const rollNumbers1: number[] = [1, 2, 3, 4];
  const rollNumbers2: NumberType = [1, 2, 3, 4];
  const rollNumbers3: Array<number> = [1, 2, 3, 4];
  const rollNumbers4: GenericType<number> = [1, 2, 3, 4];

  // String Type Array
  const names1: string[] = ["Sadman", "Sakib", "Sanchita"];
  const names2: StringType = ["Sadman", "Sakib", "Sanchita"];
  const names3: Array<string> = ["Sadman", "Sakib", "Sanchita"];
  const names4: GenericType<string> = ["Sadman", "Sakib", "Sanchita"];

  // Boolean Type Array
  const booleans1: boolean[] = [true, false];
  const booleans2: BooleanType = [true, false];
  const booleans3: Array<boolean> = [true, false];
  const booleans4: GenericType<boolean> = [true, false];

  // Object Type Array
  type ObjectType = {
    firstName: string;
    lastName: string;
    age: number;
    eyeColor: string;
  }[];
  type ObjectType2 = {
    firstName: string;
    lastName: string;
    age: number;
    eyeColor: string;
  };
  const person1: {
    firstName: string;
    lastName: string;
    age: number;
    eyeColor: string;
  }[] = [
    { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
    { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
  ];
  const person2: ObjectType = [
    { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
    { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
  ];
  const person3: Array<object> = [
    { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
    { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
  ];
  const person4: Array<ObjectType2> = [
    { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
    { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
  ];
  const person5: GenericType<ObjectType2> = [
    { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
    { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" },
  ];

  // **Generics Tuple
  type GenericTuple<S, N, B, O> = [S, N, B, O];
  const users: GenericTuple<string, number, boolean, object> = [
    "Sakib",
    28,
    true,
    {
      city: "Houston",
      state: "Texas",
      country: "USA",
    },
  ];
}
