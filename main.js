const display = document.querySelector('#display')

function appendToDisplay(input) {
  display.value += input
}

function clearDisplay(input) {
  display.value = ''
}

function calculate(input) {
    try {
      display.value = eval(display.value)
    }
    catch(err) {
      display.value = 'Error'
    }
}