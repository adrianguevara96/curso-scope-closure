// FUNCTION SCOPE

//variables declaradas dentro de la funcion
//seran accedidas solo dentro de la funcion
function greeting() {
    let userName = 'Ana';
    console.log(userName);

    //Bloque o funcion anidada
    if(userName === 'Ana'){
        console.log(`Hello ${userName}`);
    }
}

greeting();
console.log(userName);
//No se acceder porque estamos fuera de la funcion