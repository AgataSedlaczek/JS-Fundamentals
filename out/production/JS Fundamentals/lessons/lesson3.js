//objects

var customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["volvo", "toyota", "tesla"]

}
// dot notation
customer.firstName = "Mike"
console.log(customer)


//arrays

var car = ["volvo", "toyota", "tesla"]
car[1] = "BMW"
console.log(car[1])
console.log(customer.cars[0])