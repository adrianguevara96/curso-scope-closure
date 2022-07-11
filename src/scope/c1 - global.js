//variables

var a; //declarando
var b = 'b'; //declaramos y asignamos
b = 'bb'; //reasignacion
var a = 'aa'; //redereclaracion

// global scope
var fruit = 'Apple'; //global

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; //global proque no tiene var/const/let
    console.log(country);
}

countries();
console.log(country);