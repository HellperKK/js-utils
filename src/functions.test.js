const { test, expect } = require("@jest/globals")
const { toMethod, bubble, invert, pcall } = require("./functions")

const f2 = (a, b) => a.foo + b
const f3 = (a, b, c) => a.foo + b - c

const num = 3
const numb = 4
const obj = {
    foo: 42,
    f2: toMethod(f2)
}

test('call toMethod to change function into method', () => {
    expect(obj.f2(num)).toEqual(f2(obj, num))
})

test('call bubble to change function order on two', () => {
    expect(bubble(f2)(num, obj)).toEqual(f2(obj, num))
})
test('call bubble to change function order on three', () => {
    expect(bubble(f3)(num, numb, obj)).toEqual(f3(obj, num, numb))
})

test('call invert to change function order', () => {
    expect(invert(f3)(numb, num, obj)).toEqual(f3(obj, num, numb))
})

test('call pcall to partially appply', () => {
    expect(pcall(f2, obj)(num)).toEqual(f2(obj, num))
})
test('call pcall to partially appply with all', () => {
    expect(pcall(f2, obj, num)()).toEqual(f2(obj, num))
})