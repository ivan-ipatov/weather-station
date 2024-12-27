function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


const tempMin = getRandomInt(0, 59).toString()
const minutes = tempMin < 10 ? '0' + tempMin : tempMin
const hours = "0" + getRandomInt(4, 9)
document.querySelector('#sunrise').textContent = hours + ':' + minutes


const tempMin2 = getRandomInt(0, 59).toString()
const minutes2 = tempMin2 < 10 ? '0' + tempMin2 : tempMin2
const hours2 = getRandomInt(16, 22).toString()
document.querySelector('#sunset').textContent = hours2 + ':' + minutes2
