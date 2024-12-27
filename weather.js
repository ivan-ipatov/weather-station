function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const day = document.querySelectorAll('.weather .day')
const icon = document.querySelectorAll('img')
const celsius = document.querySelectorAll('.weather .celsius')
const status = document.querySelectorAll('.status')

nameOfDay = ["пн", "вт", "ср", "чт", "пт", "сб", "вс", "пн", "вт"]

switch (new Date().getDay()) {
    case 1:
        weekName = 0;
        break
    case 2:
        weekName = 1;
        break
    case 3:
        weekName = 2;
        break
    case 4:
        weekName = 3;
        break
    case 5:
        weekName = 4;
        break
    case 6:
        weekName = 5;
        break
    case 7:
        weekName = 6;
        break
    default:
        weekName = ''
}


for (let i = 0; i < day.length; i++) {
    minusOrNot = Math.round(Math.random()) === 0 ? '' : '-'
    const forStatus = getRandomInt(0, 3)
    day[i].textContent = nameOfDay[weekName + i];
    icon[i].src = ["icons/Облако.svg", "icons/Снег.svg", "icons/Солнце.svg"][forStatus]
    celsius[i].textContent = minusOrNot + getRandomInt(0,40) + '°'
    status[i].textContent = ['облачно', 'снежно', 'солнечно'][forStatus]
}
