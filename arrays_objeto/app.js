let persona1 = {
    nombre : "Juan",
    edad : 20
}

let persona2 = {
    nombre : "Pedro",
    edad : 25
}

let persona3 = {
    nombre : "Luis",
    edad : 32
}

let personas = [persona1, persona2, persona3];

console.log(personas);

//con un cliclo for voy a automatizar el envio de la informacion de los objetos dentro del array, voy a pedir mediante un console.log el nombre y la edad de cada persona

for (let i = 0; i < personas.length; i++){

    let persona = personas[i]; //por cada iteracion o vuelta del ciclo voy a extraer el valor de cada persona en particular, luego de la siguiente, hasta finalizar el ciclo 

    console.log(`${ persona.nombre} -- ${persona.edad}`)
}