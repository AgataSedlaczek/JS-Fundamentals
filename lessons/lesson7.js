//for(let i=0; i<5; i++){
  //  console.log("Hello World" + i)
//}

var cars =["volvo", "toyota", "tesla"]
for(let car of cars){
    console.log(car)
    if (car == "toyota"){
        break
    }

//ES6

cars.forEach( car => {
    console.log(car)
})

}