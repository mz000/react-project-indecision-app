"use strict";

// argument objects - no longer bound with arrow functions

var add = function add(a, b) {
    // console.log(arguments)
    return a + b;
};
// we will get an error here 


// this keyword - no longer bound
var user = {
    name: 'andrew',
    cities: ["new york", "philadelphia", "dublin"],
    printPlcaeslived: function printPlcaeslived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + " has lived in " + city;
        });
    }
};
console.log(user.printPlcaeslived());

// challenge area 

var multiplier = {
    numbers: [2, 4, 6, 8, 10, 12],
    multipyBy: 4,
    multipy: function multipy() {
        var _this2 = this;

        return this.numbers.map(function (num) {
            return num * _this2.multipyBy;
        });
    }
};

console.log(multiplier.multipy());
