let numeros = [12, 3,4, 20]

numeros[1] = 30
let suma = 0

numeros.shift()
for(let i = 0; i < numeros.length; i++){
  console.log(numeros[i])
  suma += numeros[i]
}
//numeros.pop()
console.log(suma, numeros)