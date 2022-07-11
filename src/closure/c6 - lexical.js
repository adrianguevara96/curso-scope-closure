//CLOSURE
//Permite acceder a una funcion exterior a traves de una funcion interior

//se crean cada vez que una funcion es creada

//accede a una variable fuera de su contexto

//ambito lexico: accecibilidad de variables anidadas en las funciones

const myGlobal = 0;

//al crear una funcion dentro de una funcion ya tenemos un closure
function myFunction() {
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){  //function interna
        const inner = 2;
        console.log(myNumber, myGlobal);
        
        function child(){
            console.log(inner, myNumber, myGlobal);
        }
        return child();
    }
    return parent();
}

myFunction();