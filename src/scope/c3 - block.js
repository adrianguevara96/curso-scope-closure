// BLOCK SCOPE

//let, const dentro de un bloque
//var para una variable global

//bloque: cualquier cosa que este dentro de un handlebars {}

function fruits(){

    if (true) {
        var fruit1 = 'Apple';
        let fruit2 = 'Kiwi';        //block scope
        const fruit3 = 'Banana';    //block scope

        console.log({fruit2, fruit3});
    }
    //fruit2 y fruit3 se pueden acceder dentro del bloque
    //donde fueron definidos
    //console.log({fruit1, fruit2, fruit3});
    console.log(fruit1);
}

fruits();