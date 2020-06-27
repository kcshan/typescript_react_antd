class Animal {
  name: string;
  static categoies: string[] = ['mammal', 'bird']
  static isAnimal(a) {
    return a instanceof Animal
  }
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}
console.log(Animal.categoies)
const snake = new Animal('lily')
console.log(Animal.isAnimal(snake))
console.log(snake.name)
snake.name = 'lucy'
console.log(snake.name)

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}
const xb = new Dog('xiaobao')
console.log(xb.run())
console.log(xb.bark())

class Cat extends Animal {
  constructor(name) {
    super(name)
    console.log(this.name)
  }
  run() {
    return 'Meow, ' + super.run()
  }
}
const maomao = new Cat('maomao')
console.log(maomao.run());

interface Radio {
  switchRadio(): void;
}
interface Battery {
  checkBatteryStatus();
}
interface RadioWithBattery extends Radio {
  checkBatteryStatus();
}
class Car implements Radio {
  switchRadio() {

  }
}
class CellPhone implements RadioWithBattery {
  switchRadio() {

  }
  checkBatteryStatus() {

  }
}