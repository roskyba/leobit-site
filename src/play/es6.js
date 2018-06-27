var nameVar = 'Ros';
var nameVar = 'Test'
nameVar = 'Opppss';
console.log('NameVar', nameVar)

// Cannot be redifend
// Can be reassigned

let nameLet = 'Jet';
nameLet = 'July';
console.log('NameLet', nameLet);

// Cannot be redifened
// Cannot be reassigned

const nameConst = 'Mett';
console.log('NameConst', nameConst);

// Block scoping 

var based = 'Rostyslav Bla';
let fName;
if (based) {
  fName = based.split(' ')[0];
  const lName = based.split(' ')[1];
  console.log(fName);
}

console.log(fName);

function getPetName () {
  const petName = 'Howl';
  return petName;
}

const petName = getPetName();
