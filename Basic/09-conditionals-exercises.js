/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let num = 12

if (num > 12){
    console.log("The number is bigger")
} else if (num == 12){
    console.log("The number is equal")
} else{
    console.log("The number is smaller")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let user = "Sara"
let pwd = "12345"

if (user == "Sara" && pwd=="12345"){
    console.log("Right credentials")
}else{
    console.log("Wrong credentials")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let num2 = -2

if (num2 > 0){
    console.log("The number is positive")
} else if (num2 == 0){
    console.log("The number is zero")
} else{
    console.log("The number is negative")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 16

if (age >= 18){
    console.log("The person can vote")
} else{
    let resta = 18 - age
    console.log(`The person cannot vote now. Will be able in ${resta} years.`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 

const person = age >= 18 ? "adult" : "minor"
console.log(person)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 6
let station

if ([12,1,2].includes(mes)){
    station = "Winter"
}else if ([3,4,5].includes(mes)){
    station = "Spring"
}else if ([6,7,8].includes(mes)){
    station = "Summer"
}else if ([9,10,11].includes(mes)){
    station = "Fall"
}else{
    station = "Incorrect month"
}

console.log(station)


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if ([1,3,5,7,8,10,12].includes(mes)){
    console.log("31 days")
}else if ([4,6,9,11].includes(mes)){
    console.log("30 days")
}else if (mes == 2){
    console.log("28 or 29 days")
}else{
    console.log("Incorrect month")
}


// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let language = "English"
let message

switch (language){
    case "Spanish":
        message = "Hola"
        break
    case "English":
        message = "Hello"
        break
    case "Japanese":
        message = "Konnichiwa"
        break
    case "French":
        message = "Bonjour"
        break
    default:
        message = "Language not available"
}

console.log(message)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

switch (true){
    case [12,1,2].includes(mes):
        station = "Winter"
        break
    case [3,4,5].includes(mes):
        station = "Spring"
        break
    case [6,7,8].includes(mes):
        station = "Summer"
        break
    case [9,10,11].includes(mes):
        station = "Fall"
        break
    default:
        station = "Wrong month"
}

console.log(station)
