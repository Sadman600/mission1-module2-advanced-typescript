"use strict";
{
    // ** Generic with Function
    const personFunc = (params) => {
        return [params];
    };
    const myFunc = (param1, param2) => {
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
    const myFunc1 = personFunc("555");
    const myFunc2 = personFunc(5);
    const myFunc3 = personFunc(car);
    const myFunc4 = myFunc(car, 55);
}
