function echo<T>(arg: T): T {
    return arg
}
const str: string = 'str'
// const result: string = echo('str')
// console.log(result)

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}
const result2 = swap(['string', 123])
console.log(result2[1])

function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}
const arr = echoWithArr([1, 2, 3])

interface IwitchLength {
    length: number
}

function echoWithLength<T extends IwitchLength>(arg: T): T {
    console.log(arg.length)
    return arg
}
const str2 = echoWithLength('str2')
const obj = echoWithLength({ length: 10 })
const arr2 = echoWithLength([1, 2, 3])

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

let arrOne: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]

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
