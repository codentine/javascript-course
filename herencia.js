/*
  Clases: formas definidas de un objeto (con atributos y metodos)

  Herencia: Definicion de atributos y metodos que comparten dos clases en relacion Padre - hijo

  Polimorfismo: Capacidad de un objeto de comportarse de diferentes formas (diferentes clases relacionadas)

  Encapsulamiento: Principio de POO que indica los niveles de acceso a metodos y atributos
*/

class Persona {
  type = 'Persona'
  constructor(name){
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating his lunch`, this.type)
  }
}

class Developer extends Persona {
  type = 'Developer'
  constructor(name, company) {
    super(name)
    this.company = company
  }
  work() {
    console.log(`${this.name} is developing an app at ${this.company}`)
  }
}

class TeamLeader extends Developer {
  type = 'Team Leader'
  constructor(name, company, team) {
    super(name, company)
    this.team = team;
  }
  work() {
    console.log(`${this.name} is a leader at ${this.company}`)
  }
}

const person1 = new TeamLeader('Alfonso', 'Codentine')
person1.eat() // Clase Persona
person1.work() // Clase Developer
