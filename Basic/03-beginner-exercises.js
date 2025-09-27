/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Esto es un comentario de una línea

// 2. Escribe un comentario en varias líneas

/* Esto es 
un comentario
en varias lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myInteger = 3
let myFloat = 2.3
let myString = "Hi String"
let myBool = true
let myNull = null
let myUndefined = undefined
let mySymbol = Symbol("mySymbol")
let myBigInt = BigInt("92999389288888888888888888092830928039238")

// 4. Imprime por consola el valor de todas las variables
console.log(myInteger)
console.log(myFloat)
console.log(myString)
console.log(myBool)
console.log(myNull)
console.log(myUndefined)
console.log(mySymbol)
console.log(myBigInt)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myInteger)
console.log(typeof myFloat)
console.log(typeof myString)
console.log(typeof myBool)
console.log(typeof myNull)
console.log(typeof myUndefined)
console.log(typeof mySymbol)
console.log(typeof myBigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myInteger = 4
myFloat = 4.5
myString = "Different String"
myBool = false

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myInteger = 4.5
myFloat = "Hola"
myString = 7.8
myBool = 7

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const otroInt = 8
const otroFloat = 8.9
const otroString = "Buenas"
const otroBool = true

// 9. A continuación, modifica los valores de las constantes
//otroInt = 9
//otroFloat = 7.8
//otroString = "Adios"
//otroBool = false


// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse