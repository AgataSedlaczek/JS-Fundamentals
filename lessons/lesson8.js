// declerative function
function helloOne(){
    console.log('Hello one!')
}
helloOne()

// anonymous function
var helloTwo = function(){
    console.log('Hello two!')

}
helloTwo()

//ES6 function syntax or arrow function

var helloThree = () => {
    console.log('Hello Three!')

}
helloThree()

//function with arguments

function printName(name){
    console.log(name)
}
printName('Mike')

//function with return

function multiplyByTwo(number){
    var result = number * 2
    return result
}
var myResult = multiplyByTwo(5)
console.log(myResult)

//import funkcji
import { printAge } from