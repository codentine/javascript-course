
class Employee {

  company = 'codentine';
  constructor(name, charge, company) {
    this.name = name;
    this.charge = charge;
    this.company = company;
  }

  work() {
    console.log(`${this.name} is working`)
  }

  rest = () => {
    console.log(`${this.name} is resting`)
  }
}


const employee1 = new Employee('Alfonso', 'Developer', 'Codentine')

employee1.work()
employee1.rest()

console.log(employee1)