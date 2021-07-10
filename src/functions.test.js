const { test, expect } = require("@jest/globals")
const { toMethod, bubble, invert, pcall, pcallRight, chain, restrain } = require("./functions")

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
test('call pcall to partially appply with three args', () => {
    expect(pcall(f3, obj, num)(numb)).toEqual(f3(obj, num, numb))
})

test('call pcallRight to partially appply', () => {
    expect(pcallRight(f2, obj)(num)).toEqual(f2(num, obj))
})
test('call pcallRight to partially appply with all', () => {
    expect(pcallRight(f2, obj, num)()).toEqual(f2(obj, num))
})
test('call pcallRight to partially appply with three args', () => {
    expect(pcallRight(f3, obj, num)(numb)).toEqual(f3(numb, obj, num))
})
test('call pcallRight to partially appply with three args', () => {
    expect(pcallRight(f3, obj)(num, numb)).toEqual(f3(num, numb, obj))
})

test('call chain to partially appply with three args', () => {
    const base = {x: 0, y:42}
    const baseb = {x: 42, y:0}
    chain(b => {b.x += 3}, b => {b.x *= 14},b => {b.y = 0})(base)
    expect(base).toEqual(baseb)
})

test('call retrain to fix js', () => {
    expect(["1", "42", "3435"].map(restrain(parseInt, 1))).toEqual([1, 42, 3435])
})