//REASIGNACION Y REDEFINICION

// VAR
var firstName;          //declarando: undefined
firstName = 'Adrian';   //asignamos
console.log(firstName); //mostramos

var lastName = 'Guevara';   //declarando y asignando
lastName = 'Araujo';        //reasignando
console.log(lastName);

var secondName = 'Jesus';   //declarando y asignando
var secondName = 'Pedro';   //reasignacion, redeclaracion
console.log(secondName);

//LET - No se puede redeclarar
let fruit = 'Apple'; //declarar, asignar
fruit = 'Kiwi'; //reasignar
console.log(fruit);

//let fruit = 'Banana'; //redeclarar no es posible

//CONST
const animal = 'dog'; //declarar, asignar
// animal = 'cat'; //no se puede reasignar
console.log(animal);
//const animal = 'snake'; //no se puede redeclarar


//EXTRA - no es reasignacion ni redeclaracion, en los arreglos si 
//se puede usar const
const vehicles = [];
vehicles.push("carOne");
console.log(vehicles);
vehicles.pop();
console.log(vehicles);