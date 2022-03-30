const colors = require('./quantumColors.json');

module.exports = () => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
}