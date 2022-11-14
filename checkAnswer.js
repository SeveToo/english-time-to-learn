const inputAnswer__button = document.querySelector('.inputAnswer__button')

inputAnswer__button.addEventListener('click', check)
let userAnswer = document.querySelector('.inputAnswer__input')

userAnswer.addEventListener('keyup', deleteClass)

function deleteClass(e) {
  if ((e.key = 'Backspace') && userAnswer.textContent != HourText.textContent) {
    userAnswer.classList.remove('bad')
    userAnswer.classList.remove('good')
  } else if (userAnswer.textContent != HourText.textContent) {
    userAnswer.classList.add('good')
  }
}

console.log(h, m, HourText.textContent)
function check() {
  userAnswer = document.querySelector('.inputAnswer__input')

  if (userAnswer.value == HourText.textContent) {
    userAnswer.classList.add('good')
  } else {
    userAnswer.classList.add('bad')
  }
  showWord()
}

next.addEventListener('click', () => {
  setHour()
  userAnswer.value = ''
  userAnswer.classList.remove('bad')
  userAnswer.classList.remove('good')
})

// check();
