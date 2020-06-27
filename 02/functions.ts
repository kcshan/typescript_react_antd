const add = function(x: number, y: number, z: number = 10): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

let result = add(2, 3)
console.log(result)

const add2: (x: number, y: number, z?: number) => number = add
let result2 = add2(2, 3)
console.log(result2)