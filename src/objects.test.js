const { test, expect } = require("@jest/globals")
const { debug, foretell, clone } = require("./objects")

const num = 42
const obj = {
    name: "john",
    age: 42
}

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