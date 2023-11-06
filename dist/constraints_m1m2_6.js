"use strict";
{
    // **Constraints in Typescript
    const personFunc = (param) => {
        return Object.assign({}, param);
    };
    const person = {
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
    const myPerson = personFunc(person2);
}
