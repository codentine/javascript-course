const engines = {
  versa: 'v6',
  frontier: 'v8',
  march: 'v4'
}


const autoConstructor = (model, dorsNumber) => {
  const wheels = 4
  const dors = dorsNumber
  return (color) => {
    const engineSelected = engines[model];
    return ({
      model,
      wheels,
      dors,
      engine: engineSelected,
      color
    })
  }
}

const frontierFactory = autoConstructor('frontier', 2)
const versaFactory = autoConstructor('versa', 4)
const marchFactory = autoConstructor('march', 4)
/*
  Logica extra
*/

const MyCar = frontierFactory('azul');

console.log(MyCar)



