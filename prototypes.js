/**
 * Una clase define la forma que va a tener un objeto
 * 
 */
// Prototipo con objetos
const protoEmployee = {
  work() {
    console.log(`${this.charge} is working`)
  }
}

const waiter = Object.create(protoEmployee)
waiter.charge = 'waiter'
waiter.work()

// Prototipos con funciones contructoras
function Employee(charge) {
  this.charge = charge
}
Employee.prototype.work =  function() {
  console.log(`${this.charge} is working`)
}

const chef = new Employee('chef')
chef.work()

