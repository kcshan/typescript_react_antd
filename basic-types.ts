let isDone: boolean = false
let age: number = 20

// 十进制
let decLiteral: number = 20
// 十六进制
let hexLiteral: number = 0x14
// 二进制
let binaryLiteral: number = 0b10100
// 八进制
let octalLiteral: number = 0o24

let firstName: string = 'kcs'
let message: string = `Hello, ${firstName}, age is ${hexLiteral}`

let u: undefined = undefined
let n: null = null

let num: number = undefined

let notSure: any = 4
notSure = 'Maybe is a string'
notSure = true

notSure.myName
notSure.getName()

let numberOrString: number | string = 123
numberOrString = 'abc'

let arrOfNumbers: number[] = [1, 2, 3, 4]
arrOfNumbers.unshift(0)

function test() {
  console.log(arguments)
}

let user: [string, number] = ['kcs', 20]

