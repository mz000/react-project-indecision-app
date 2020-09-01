// argument objects - no longer bound with arrow functions

const add = (a, b) => {
   // console.log(arguments)   
    return a+b
} 
// we will get an error here 


// this keyword - no longer bound
const user = {
    name: 'andrew',
    cities: ["new york", "philadelphia", "dublin"],
    printPlcaeslived() {
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
}
console.log(user.printPlcaeslived())

// challenge area 

const multiplier = {
    numbers : [2, 4, 6, 8, 10, 12],
    multipyBy: 4,
    multipy() {
        return this.numbers.map((num) => num * this.multipyBy)
    }
}
 
console.log(multiplier.multipy())

 