capitalize = (string) => {
    const text = string.charAt(0).toUpperCase() + string.slice(1);
    return text;
}

module.exports = capitalize;