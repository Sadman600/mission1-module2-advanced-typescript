"use strict";
{
    const vehicleOneFunc = (obj, key) => {
        return obj[key];
    };
    const vehicleOne = {
        brand: "Ford",
        model: "Mustang",
        type: "car",
        year: 2023,
        color: "red",
    };
    const vehicle = vehicleOneFunc(vehicleOne, "brand");
}
