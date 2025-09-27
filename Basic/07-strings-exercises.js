/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let concatString = "Hola " + "que " + "tal"
console.log(concatString)

// 2. Muestra la longitud de una cadena de texto
console.log(concatString.length)

// 3. Muestra el primer y último carácter de un string
console.log(concatString[0], concatString[concatString.length - 1])

// 4. Convierte a mayúsculas y minúsculas un string
console.log(concatString.toUpperCase())
console.log(concatString.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let textInLines = `Este 
texto está en
diferentes
lineas`

// 6. Interpola el valor de una variable en un string
let myName = "Sara"
console.log(`Mi nombre es ${myName}`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
//console.log(concatString.replace(" ","-")) - only replaces the first appeareance
//console.log(concatString.replaceAll(" ","-")) - funcion de ES2021+
console.log(concatString.replace(/ /g, "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(concatString.includes("Hola"))

// 9. Comprueba si dos strings son iguales
console.log(concatString==myName)

// 10. Comprueba si dos strings tienen la misma longitud
let name1 = "Alex"
let name2 = "Alba"
console.log(name1.length==name2.length)