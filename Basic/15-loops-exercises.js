/*
Clase 30 - Ejercicios: Bucles
Vídeo: https://youtu.be/1glVfFxj8a4?t=12732
*/

// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20
for (let i=1; i<21; i++){
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
for (let i=1; i<101; i++){
    suma+=i
}
console.log(suma)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
for (let i=0; i<51; i++){
    if (i % 2 == 0){
        console.log(i)
    }
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let names = ["A","B","C","D"]

for (let i=0; i < names.length; i++){
    console.log(names[i])
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let cadena = "Hola soy una cadena de texto"
let vocales = ["a","e","i","o","u"]
let total = 0

for (let i=0; i < cadena.length; i++){
    if (vocales.includes(cadena[i])){
        total+=1
    }
}

console.log(total)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
let numbers = [1,5,33,77,24,5,334]
let mult = 1

for (let i=0; i < numbers.length; i++){
    mult *= numbers[i]
}

console.log(mult)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5

for (let i=0; i<11; i++){
    console.log(5*i)
}

// 8. Usa un bucle para invertir una cadena de texto
let cad = "platano"
let newCad = ""

for (let i = cad.length - 1; i>=0; i--){
    newCad += cad[i]
}

console.log(newCad)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let fib = [0, 1]; // los dos primeros números de Fibonacci

for (let i = 2; i < 10; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

console.log(fib);

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let newNumbers = []

for (let i=0; i<numbers.length; i++){
    if (numbers[i] > 10){
        newNumbers.push(numbers[i])
    }
}

console.log(newNumbers)