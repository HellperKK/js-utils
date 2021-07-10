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

function pcallRight(f, ...args) {
    return function (...argsb) {
        return f(...argsb, ...args)
    }
}

function chain(...fs) {
    return function (...args) {
        fs.forEach(f => f(...args))
    }
}

function restrain(f, len) {
    return function (...args) {
        const restrained = args.slice(0, len)
        return f(...restrained)
    }
}

module.exports = {
    toMethod,
    bubble,
    invert,
    pcall,
    pcallRight,
    chain,
    restrain,
}