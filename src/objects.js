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

module.exports = {
    clone,
    debug,
    foretell,
}