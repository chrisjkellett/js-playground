function generatePassword(){
  const passwordLength = 15
  let password = ''
  let char
  for (let i=0; i<passwordLength; i++){
    char = generateRandomCharacter()
    password += randomlyCapitalize(char)
  }
  return password
}

function generateRandomCharacter(){
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'.split("")
  return characters[getRandomInteger(characters.length)]
}

function getRandomInteger(max){
  return Math.floor(Math.random() * max)
}

function randomlyCapitalize(char){
  return Math.round(Math.random()) ? char.toUpperCase() : char
}

generatePassword()
