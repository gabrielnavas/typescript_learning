function typeGuardExample (a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b
  }
  return `${a}${b}`
}

const r1 = typeGuardExample(1, 2) // 3
const r2 = typeGuardExample('1', '2') // 12

console.log(r1)
console.log(r2)
