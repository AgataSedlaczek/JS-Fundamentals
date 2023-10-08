var familySize = 6;
var plannedDistanceToDrive = 300

function Car () {
    if (familySize <= 4 && plannedDistanceToDrive < 200){
       print('Tesla')
    } else if (familySize <= 4 && plannedDistanceToDrive >= 200){
        print('Toyota Camry')
    } else (familySize > 4); {
        print('Minivan')
                 }
    
   }

console.log(Car(familySize, plannedDistanceToDrive));


