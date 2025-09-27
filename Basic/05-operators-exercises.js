/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética
let a = 3
let b = 4

let mySum = a + b
let myResta = a - b
let myMultiplication = a * b
let myDivision = a / b
let myExponential = a ** b
let myModule = a % b
let myIncrement = a++
let myDecrement = a--

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let c = a+=2
let d = a-=2
let e = a*=2
let f = a/=2
let g = a%=2
let h = a**=2

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(a == a)
console.log(typeof a == typeof e)
console.log(a != f)
console.log(e > b)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(b == a)
console.log(g >= b)
console.log(a === b) // same type but not same value
console.log(a != a)

// 5. Utiliza el operador lógico and
console.log(a, b)
console.log(a<5 && b==4)

// 6. Utiliza el operador lógico or
console.log(a==5 || b==4)

// 7. Combina ambos operadores lógicos
console.log(a==1 && b==4 || b<4)

// 8. Añade alguna negación
console.log(a!=2 && b!=3)

// 9. Utiliza el operador ternario
const isCloudy = true
isCloudy ? console.log("It's cloudy") : console.log("It's not cloudy")

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log()