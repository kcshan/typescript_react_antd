const add = function (x: number, y: number, z: number = 10): number {
  if (typeof z === 'number') {
    return x + y + z
  } else {
    return x + y
  }
}

let result: number = add(2, 3, 5)
const add2: (x: number, y: number, z?: number) => number = add
