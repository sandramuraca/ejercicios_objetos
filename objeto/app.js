let nombreUsuario = prompt ("Ingrese su nombre");
let edadUsuario = Number(prompt ("Ingrese su edad"));
let nacUsuario = prompt ("ingrese su nacionalidad"); 

function describirPersona (p) {
    console.log(`${p.nombre} tiene ${p.edad} y su nacionalidad es ${p.nacionalidad}`);
}

let persona = {
    nombre : nombreUsuario,
    edad : edadUsuario,
    nacionalidad : nacUsuario
}
/*
let persona = {
    nombre : "Sandra",
    edad : 42,
    nacionalidad : "argentina",
}*/

describirPersona (persona);