interface Person {
  name: string;
  age: number;
}
let Kcshan: Person = {
  name: 'kcs',
  age: 20
}

interface Person2 {
  name: string;
  age?: number;
}
let Kcshan2: Person2 = {
  name: 'kcs',
}

interface Person3 {
  readonly id: number;
  name: string;
  age?: number;
}
let Kcshan3: Person3 = {
  id: 123,
  name: 'kcs',
}