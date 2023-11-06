"use strict";
{
    // Type Casting or Type Assertion or Type Narrowing
    // Casting with as
    let x = 5;
    x = 5;
    x.toString();
    "4".length;
    //   Casting with <>
    x.toString();
    function myFunc(x) {
        if (typeof x === "string") {
            const convert = parseFloat(x) * 1000;
            return `my result ${convert}`;
        }
        if (typeof x === "number") {
            return x * 1000;
        }
    }
    const result1 = myFunc(1000);
    const result2 = myFunc("1000");
    try {
    }
    catch (error) {
        console.log(error.message);
        console.log(error.message);
    }
}
