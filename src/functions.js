function toMethod(f) {
    return function (...args) {
        return f(this, ...args)
    }
}

function bubble(f) {
    return function (...args) {
        return f(args.pop(), ...args)
    }
}

function invert(f) {
    return function (...args) {
        args.reverse()
        return f(...args)
    }
}

function pcall(f, ...args) {
    return function (...argsb) {
        return f(...args, ...argsb)
    }
}

module.exports = {
    toMethod,
    bubble,
    invert,
    pcall,
}