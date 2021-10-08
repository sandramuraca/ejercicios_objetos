/*-----EJERCICIOS MUMUKI---*/
/*Ejercicio 1: Sobre mí
Para comenzar este recorrido vamos a empezar creando nuestro primer objeto. 

Para ello vamos a declarar una variable que la vamos a llamar sobreMi, la misma debe definir un objeto con tres propiedades: nombre, apellido y edad.*/

const  sobreMi = {
    nombre: "Sandra",
    apellido:"Muraca",
    edad: "43"
}

/*Ejercicio 2: Presentar
En el ejercicio anterior creamos la variable sobreMi. Ahora queremos una función que, a partir de un perfil recibido como argumento, nos presente a la persona. Por ejemplo:

 let perfil = {
  nombre: "Olivia",
  apellido: "Marsu",
  edad: 21
}
 presentacion(perfil)
"Hola, mi nombre es Olivia Marsu y tengo 21 años"*/

const perfil = {
    nombre: "Olivia",
    apellido: "Marsu",
    edad: 21
}

 const presentacion = (usuario)=>{
    saludo = `Hola, minombre es ${perfil.nombre} y tengo ${perfil.edad}`
    return saludo
}

console.log(presentacion(perfil))

/*Ejercicio 3: Canción
Contamos con algunos objetos que representan canciones de Spotify. Peeero tienen sus propiedades en inglés.
Queremos una función cancion que retorne un nuevo objeto, a partir de las propiedades del objeto que recibimos como argumento. El mismo debe tener las propiedades titulo, banda, y duracion (en segundos, ya que en el parámetro está en milisegundos)*/

let song = {
    title: "Rock and Roll",
    bandName: "Led Zeppelin",
    duration: 166000,
    album: "Led Zeppelin IV"
}

const cancion = (datos) =>{
    return `Título: ${song.title}, banda: ${song.bandName}, duración: (${song.duration/1000})`
}
console.log(cancion(song))

/* Ejercicio 4
Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos. Los datos que tenemos son id, email, nombre y teléfono:
convertilos a objeto con el siguiente formato: 
let ejemplo = {
  id: 0,
  nombre: "Ejemplo",
  email: "ejemplo@terra.com",
  telefono: "1029384756"
}*/

let ada = {
    id: 1,
    nombre: "Ada Lovelace",
    email: "ada@gmail.com",
    telefono: 234567890
}



let grace = {
    id: 2,
    nombre: "Grace Hopper",
    email: "grace@hotmail.com",
    telefono: 0987654321
}

let hedy = {
    id: 3,
    nombre: "Hedy Lamarr",
    email: "hedy@gmail.com",
    telefono: 6789054321
}
let radia = {
    id: 4,
    nombre: "Radia Perlman",
    email: "radia@yahoo.com",
    telefono: 1234509876
}

let sheryl = {
    id: 5,
    nombre: "Sheryl Sandberg",
    email: "sheryl@facebook.com",
    telefono: 5432167890
}

/*Ejercicio 6: Corrección de datos
Tenemos la variable datos que tiene un objeto con los datos de una persona. El teléfono de la misma está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto.
Ejercicio 6: Corrección de datos
Tenemos la variable datos que tiene un objeto con los datos de una persona. El teléfono de la misma está mal y tenemos que modificarlo, pero no podemos modificar la definición/creación del objeto.*/

let datos = {
    id: 1,
    nombre: "Ada",
    apellido: "Lovelace",
    email: "ada.lovelace@gmail.com",
    telefono: "1234567890",
    edad: "29",
    programa: true
}

const modificarTelefono =(datosUsuario, nuevoTelefono) =>{
    datosUsuario.telefono = nuevoTelefono
}

modificarTelefono(datos, 333333333)
console.log(datos)

const modificarEdad = (datosUsuario) =>{
    const edadANumero = parseInt(datosUsuario.edad)
    console.log(edadANumero)
    console.log(typeof(edadANumero))
    return edadANumero
}
console.log(modificarEdad(datos))




