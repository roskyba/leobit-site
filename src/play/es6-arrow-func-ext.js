const add = (a, b) => {
  return a + b;
}

console.log(add(55,4));

const user = {
  name: 'Alex',
  cities: ['Lviv', 'Kiev', 'Dublin'],
  printPlaces () {
    return this.cities.map((city) => this.name + ' was in ' + city);
  }
}

console.log(user.printPlaces());

const multiplier = {
  numbers: [4, 6, 6, 3, 5],
  multiplyBy: 2,
  toMultiply() {
    return this.numbers.map( num => this.multiplyBy * num)
  } 
}

console.log(multiplier.toMultiply());