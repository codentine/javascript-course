let ataque = 90
let defensa = 45
let vida = 100

function atacar(ataque, defensaEnemigo, vidaEnemigo) {
  return vidaEnemigo - (ataque - defensaEnemigo * 1.12);
}

console.log('Vida restante del enemigo: ', atacar(ataque, defensa, vida))
console.log('Vida restante del enemigo: ', atacar(ataque, defensa, vida))
console.log('Vida restante del enemigo: ', atacar(ataque, defensa, vida))
console.log('Vida restante del enemigo: ', atacar(ataque, defensa, vida))