function clone(obj) {
    return Object.assign({}, obj)
}

function debug(obj) {
    console.log(obj)
    return obj
}

function foretell(obj) {
    return function () {
        return obj
    }
}

function then(obj, f) {
    return f(obj)
}

module.exports = {
    clone,
    debug,
    foretell,
    then,
}