// conditional statement

/*if(condition){
    //execute some code here
} else {
    //execute some code here
}

// if hour between 6 and 12 print good morning
// if hour between 12 and 18 print good afternoon
//otherwise: print good evening 
*/

var hour = 5

if(hour >= 6 && hour < 12){
    console.log('Good Morning')
} else if (hour >=12 && hour < 18){
    console.log('Good afternoon')
} else {
    console.log('good evening')
}