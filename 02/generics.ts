function echo<T>(arg: T): T {
  return arg
}
const result = echo('str')

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])

function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length)
  return arg
}
const arrs = echoWithArr([12, 3 , 4])

interface IWitchLength {
  length: number
}
function echoWithLength<T extends IWitchLength>(arg: T): T {
  console.log(arg.length)
  return arg
}
const str = echoWithLength('str')
const obj = echoWithLength({ length: 10 })
const arr = echoWithLength([12, 3, 4])

class Queue<T> {
  private data = []
  push(item: T) {
    return this.data.push(item)
  }
  pop(): T {
    return this.data.shift()
  }
}
const queue = new Queue<number>()
queue.push(1)
console.log(queue.pop().toFixed())
const queue2 = new Queue<string>()
queue2.push('str')
console.log(queue2.pop().length)

interface KeyPair<T, U> {
  key: T;
  value: U;
}
let kp1: KeyPair<number, string> = { key: 123, value: 'str' }
let kp2: KeyPair<string, number> = { key: 'str', value: 123 }

let arr2: number[] = [12, 3, 4]
let arr3: Array<number> = [1, 3, 4]

interface IPlus<T> {
  (a: T, b: T): T
}
function plus(a: number, b: number): number {
  return a + b
} 

function connect(a: string, b: string): string {
  return a + b
}
const a: IPlus<number> = plus
const b: IPlus<string> = connect
