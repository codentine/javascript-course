const convertToBinary = num => {
  let binaryString = ''

  const recursive = num2 => {
    console.log(num2, num2 % 2, binaryString)
    if(num2 == 1 || num2 == 0){
      binaryString = String(num2)+binaryString;
      return
    }
    binaryString = String(num2 % 2) + binaryString;
    return recursive(Math.floor(num2 / 2))
  }
  recursive(num)
  return binaryString
}

console.log(convertToBinary(2))