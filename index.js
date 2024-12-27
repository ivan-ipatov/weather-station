setInterval(function() {
    const newDate = new Date();
    const hours = newDate.getHours().toString().length === 1 ? "0" + newDate.getHours() : newDate.getHours();
    const minutes = newDate.getMinutes().toString().length === 1 ? "0" + newDate.getMinutes() : newDate.getMinutes();
    document.querySelector('#time').textContent = hours + ":" + minutes;
}, 10);
const date = document.querySelector('#date');
const temperature = document.querySelector('#temperature');
const weatherName = document.querySelector('#weatherName');
const humidity = document.querySelector('#humidity');
const img = document.querySelector('img');
newDate = new Date();
dateBlock = "";
year = newDate.getFullYear().toString();

switch (newDate.getDay()) {
    case 1:
        weekName = 'пн';
        break
    case 2:
        weekName = 'вт';
        break
    case 3:
        weekName = 'ср';
        break
    case 4:
        weekName = 'чт';
        break
    case 5:
        weekName = 'пт';
        break
    case 6:
        weekName = 'сб';
        break
    case 7:
        weekName = 'вс';
        break
    default:
        weekName = ''
}


const getMonthNameInGenitiveCase = (date = new Date) =>
    date.toLocaleString('ru', {
        month: 'long',
        day: 'numeric',
    }).split(' ')[1];

dateBlock = newDate.getDate().toString() + ' ' + getMonthNameInGenitiveCase()

date.textContent = `${weekName}, ${dateBlock}, ${year}`


randWeather = Math.round((Math.random() * 45) + 1)
randHumidity = Math.round((Math.random() * 100) + 1)
minusOrNot = Math.round(Math.random()) === 0 ? '' : '-'

temperature !== null ? temperature.textContent = minusOrNot + randWeather + '°' : ''

randWeather = Math.floor(Math.random() * 3)
weatherName.textContent = ['облачно', 'снежно', 'солнечно'][randWeather];
humidity !== null ? humidity.textContent = randHumidity + "%" : ''

img.src = ["icons/Облако.svg", "icons/Снег.svg", "icons/Солнце.svg"][randWeather]




