const HourNumber = document.querySelector('.HourNumber')
const HourText = document.querySelector('.HourText')
const hoursApp = document.querySelector('.HoursApp')
const next = document.querySelector('.inputAnswer__next')

// Kolorowe
const midnight = `<span class="midnight">midnight</span>`
const half = `<span class="half">half</span>`
const past = `<span class="past">past</span>`
const to = `<span class="to">to</span>`
const quarter = `<span class="quarter">quarter</span>`
const oClock = `<span class="oClock">o'clock</span>`

// Nie kolorowa
// const midnight = `midnight`
// const half = `half`
// const past = `past`
// const to = `to`
// const quarter = `quarter`
// const oClock = `o'clock`

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function PrefixZero(x) {
  if (x < 10) return `0${x}`
  else return x
}

let units1 = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
]
let units2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty']

function currentHour(hour) {
  if (hour == 0) return midnight
  if (hour < 20) return units1[Number(hour - 1)]
  if (hour >= 20 && units2[(hour % 10) - 1])
    return `${units2[((hour % 100) - (hour % 10)) / 10 - 2]} ${
      units1[(hour % 10) - 1]
    }`
  return `${units2[((hour % 100) - (hour % 10)) / 10 - 2]} 
    `
}

function currentMinute(min) {
  if (min == 15) return quarter
  if (min < 20) return units1[min - 1]
  if (min >= 20 && units1[(min % 10) - 1])
    return `${units2[((min % 100) - (min % 10)) / 10 - 2]} ${
      units1[(min % 10) - 1]
    }`
  return `${units2[((min % 100) - (min % 10)) / 10 - 2]} `
}

function nextMinute(min) {
  return currentMinute(60 - min)
}

function nextHour(hour) {
  return currentHour(hour + 1)
}

function wordly(godz, min) {
  min = Number(min)
  godz = Number(godz)
  let hourInText = ''
  if (min == 0)
    if (godz == 0) hourInText = midnight
    else hourInText = `${currentHour(godz)} ${oClock}`
  else if (min == 30) hourInText = `${half} ${past} ${currentHour(godz)}`
  else if (min < 30)
    hourInText = `${currentMinute(min)} ${past} ${currentHour(godz)}`
  else if (min > 30 && godz == 23)
    hourInText = `${nextMinute(min)} ${to} ${midnight}`
  else if (min > 30) hourInText = `${nextMinute(min)} ${to} ${nextHour(godz)}`
  // HourText.innerHTML = hourInText;
  return hourInText
}

let h, m, w

function displayNum1() {
  HourNumber.textContent = PrefixZero(h) + ':' + PrefixZero(m)
}

function setHour() {
  h = rand(0, 23)
  m = rand(0, 59)
  w = wordly(h, m)
  displayNum1()
  hideWord()

}

function hideWord() {
  HourText.innerHTML = w
  HourText.style.display = 'none'
}

function showWord() {
  HourText.innerHTML = w
  HourText.style.display = 'block'
}

setHour()
// wordly(rand(0, 23), rand(0, 59));

function generateHours() {
  let godzina = '<ol>'
  let godz, min
  for (let i = 0; i < 100; i++) {
    godz = rand(0, 23)
    min = rand(0, 59)

    godzina += `<li> <span class="number">
    ${PrefixZero(godz)}:${PrefixZero(min)}</span> - <span class="text">${wordly(
      godz,
      min,
    )}
    </span></li>`
  }
  godzina += '</ol>'
  hoursApp.innerHTML = godzina
}

function generateHoursAllInOrder() {
  let godzina = '<ol>'
  // let godz, min;
  for (let i = 0; i < 24; i++) {
    for (let j = 0; j < 60; j++) {
      godzina += `<li> <span class="number">
      ${PrefixZero(i)}:${PrefixZero(j)}</span> - <span class="text">${wordly(
        i,
        j,
      )}
      </span></li>`
    }
  }
  godzina += '</ol>'
  hoursApp.innerHTML = godzina
}


// generateHours()
// generateHoursAllInOrder()
