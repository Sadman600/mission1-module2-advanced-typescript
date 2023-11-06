{
  // **Utility Type

  type Person = {
    firstName: string;
    lastName: string;
    age: number;
    eyeColor?: string;
  };
  // Pick Type
  type PickType1 = Pick<Person, "firstName" | "lastName">;
  type PickType2 = Pick<Person, keyof Person>;
  //   Omit Type
  type OmitType = Omit<Person, "firstName">;
  //   Required Type
  type RequiredType = Required<Person>;
  //   Partial Type
  type PartialType = Partial<Person>;
  //   Readonly Type
  type ReadonlyType = Readonly<Person>;
  //   Record Type
  type RecordType = Record<string, unknown>;
  const person: RecordType = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
  };
}
