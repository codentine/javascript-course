/* 
 Lo objetos representan una entidad de la vida real
 */

const auto = {
  wheels: 4,
  turnOn: () => console.log('turn on', this),
  turnOff: function() { console.log('turn on', this)}
}

const camioneta = {
  box: 'grande',
  wheels: 6
}

const result = Object.assign({}, auto, camioneta)

result['box'] = 'mediana'

const dynamic = {
  ["hola"+2]: "saludo"
}


console.log(Object.entries(auto))
