const { test, expect } = require("@jest/globals")
const { debug, foretell, clone, then } = require("./objects")

const num = 42
const obj = {
    name: "john",
    age: 42
}
const f = x => x + 1

test('call debug of x is x', () => {
    expect(debug(num)).toEqual(num)
})

test('call fortell of x is x', () => {
    expect(foretell(num)()).toEqual(num)
})
test('map with fortell of x fills with x', () => {
    expect([1, 2, 3].map(foretell(num))).toEqual([num, num, num])
})

test('call clone of x is x', () => {
    expect(clone(obj)).toEqual(obj)
})

test('call then of x, f is f(x)', () => {
    expect(then(num, f)).toEqual(f(num))
})