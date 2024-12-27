const time = document.querySelector('#time');
const date = document.querySelector('#date');
const temperature = document.querySelector('#temperature');
const weatherName = document.querySelector('#weatherName');
const humidity = document.querySelector('#humidity');
const img = document.querySelector('img');
newDate = new Date();
dateBlock = "";
year = newDate.getFullYear().toString();
hours = newDate.getHours().toString().length === 1 ? "0" + newDate.getHours() : newDate.getHours();
minutes = newDate.getMinutes().toString().length === 1 ? "0" + newDate.getMinutes() : newDate.getMinutes();
time.textContent = hours + ":" + minutes;

switch (newDate.getDay()) {
    case 0:
        weekName = 'пн';
        break
    case 1:
        weekName = 'вт';
        break
    case 2:
        weekName = 'ср';
        break
    case 3:
        weekName = 'чт';
        break
    case 4:
        weekName = 'пт';
        break
    case 5:
        weekName = 'сб';
        break
    case 6:
        weekName = 'вс';
        break
    default:
        weekName = ''
}


switch (newDate.getMonth()) {
    case 11:
        month = 'декабря';
        break
    default:
        month = ''
}

dateBlock = newDate.getDate().toString() + ' ' + month

date.textContent = `${weekName}, ${dateBlock}, ${year}`


randWeather = Math.round(Math.random() * 45)
randHumidity = Math.round(Math.random() * 100)
minusOrNot = Math.round(Math.random()) === 0 ? '' : '-'

temperature.textContent = minusOrNot + randWeather + '°'

randWeather = Math.floor(Math.random() * 3)
weatherName.textContent = ['облачно', 'снежно', 'солнечно'][randWeather];
humidity.textContent = randHumidity + "%"

img.src = ["icons/Облако.svg", "icons/Снег.svg", "icons/Солнце.svg"][randWeather]
