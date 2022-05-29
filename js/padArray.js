// REMEMBER TO PSEUDOCODE
const pad = (array, minSize, value=null) => {
    if (minSize <= array.length) return array
    padCount = minSize - array.length;
    for (let i = 1; i <= padCount; i++) {
        array.push(value)
    }
    return array
}

module.exports = { pad }

