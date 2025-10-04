/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

let animals = ["Dog", "Cat","Bird", "Turtle", "Shark"]

// 2. Añade dos más. Uno al principio y otro al final

animals.push("Owl") // Final
animals.unshift("Frog") // Principio
console.log(animals)

// 3. Elimina el que se encuentra en tercera posición
animals.splice(3,1) // Elimina 1 elemento en posicion 3
console.log(animals)

// 4. Crea un set que almacene cinco libros
let books = new Set(["book1","book2","book3","book4","book5"])
console.log(books)

// 5. Añade dos más. Uno de ellos repetido
books.add("book6")
books.add("book2")
console.log(books)

//["book6","book7"].forEach(el => books.add(el)) // Da error!
//console.log(books)

let newBooks = ["book6","book7"]
newBooks.forEach(el => books.add(el))
console.log(books)

// 6. Elimina uno concreto a tu elección
books.delete("book3")
console.log(books)

// 7. Crea un mapa que asocie el número de la semana a su nombre
let week = new Map([
    [1, "Lunes"],
    [2, "Martes"],
    [3, "Miercoles"],
    [4, "Jueves"],
    [5, "Viernes"],
    [6, "Sabado"],
    [7, "Domingo"]

])

// 8. Comprueba si el dia número 5 existe en el map e imprime su valor
console.log(week.get(5))

// 9. Añade al mapa una clave con un array que almacene los meses de verano
week.set("meses-verano",["Junio", "Julio","Agosto"])
console.log(week)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let wow = []
console.log(wow)
wow = new Set()
console.log(wow)

let myNewMap = new Map([
    ["mySet",wow]
])

console.log(myNewMap)