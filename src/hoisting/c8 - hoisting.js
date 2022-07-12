//Hoisting = Elevacion

// El hosting solo aplica a variables declaradas con var, si intentamos hacer un ejemplo similar con let o const tendremos errores

// El hosting para funciones solo aplica para funciones declaradas usando la palabra reservada function,
// si intentamos aplicarlo a arrow functions tendremos errores también


//Lo que hace internamente
// var nameOfDog //undefined
console.log(nameOfDog);
var nameOfDog = 'Elmo';

//================================

/*
    var elmo; //undefined

    function nameOfDog(){
        console.log(`El mejor perrito es ${elmo}`);
    }
*/
nameOfDog();

function nameOfDog(){
    console.log(`El mejor perrito es ${elmo}`)
}
//Si no tiene una variable definida dara error
var elmo = 'Elmito';