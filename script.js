// Helper function: writes any HTML into the #out div
function render (html) {
  document.getElementById('out').innerHTML = html
}

const title = document.getElementById('title')
const out = document.getElementById('out')
let i = 0;

/* 
  Function 1 — greet()
  ---------------------
  - Prompt the user for their name
  - If they type something, display "Hello, NAME!"
  - If they cancel or leave blank, show a friendly message
*/
function greet () {
  // TODO: Write your code here

  const name = prompt("What is your name?");
  if(!name.trim()) {
    render('<h1>Please insert a valid name.</h1>')
    return 
  }
  render(`<p>Hello, ${name}. Nice to meet you!</p>`)
}

/* 
  Function 2 — timeOfDay()
  -------------------------
  - Get the current hour from the computer clock
  - Decide whether it's morning, afternoon, or evening
  - Display a message like "Good morning!" 
*/
function timeOfDay () {
  // TODO: Write your code here

  const h = new Date().getHours()
  let msg = ''
  if(h<12) msg = 'Good Morning!'
  else if(h<18) msg = 'Good Afternoon!'
  else msg = 'Good Evening!'
  render(`<p>${msg}</p>`)
}

/* 
  Function 3 — randomBetween()
  -----------------------------
  - Prompt the user for a minimum and maximum number
  - Generate a random number between them
  - Display the result
  - Handle invalid input (like blanks or min >= max)
*/
function randomBetween () {
  // TODO: Write your code here

  const min = parseInt(prompt('Enter minimum number:'))
  const max = parseInt(prompt('Enter maximum number:'))

  if(isNaN(min) || isNaN(max)) {
    render('<h1>Please insert a valid number.</h1>')
    return
  }

  if(min >= max) {
    render('<h1>Make sure the minimum number is less than the maximum.</h1>')
    return
  }

  const rndNum = Math.floor(Math.random()*(max-min+1)+min)
  render(`A random number between ${min} and ${max} is: ${rndNum}`)
}

/* 
  Function 4 — clearOutput()
  ---------------------------
  - Clear whatever is inside #out
  - Replace it with a placeholder message like "Output cleared."
*/
function clearOutput () {
  // TODO: Write your code here

  render('Output will appear here…')
  title.innerText = '🍂 JS Functions Demo'
  out.style.color = 'black'
  out.style.backgroundColor = '#f8f9fa'
}

// ---- Event listeners for the demo buttons ----
document.getElementById('btnGreet').addEventListener('click', greet)
document.getElementById('btnTime').addEventListener('click', timeOfDay)
document.getElementById('btnRandom').addEventListener('click', randomBetween)
document.getElementById('btnClear').addEventListener('click', clearOutput)

document.getElementById('btnChangeTitle').addEventListener('click', changeTitle)
document.getElementById('btnCycleColor').addEventListener('click', changeText)
document.getElementById('btnBgColor').addEventListener('click', changeBg)
document.getElementById('btnDouble').addEventListener('click', double)

/* 
  ------------------------------------------
  Student Challenge Section 
  ------------------------------------------
  Add 4 new functions here, each with its own button in index.html:
  
  1) Change the page title text to something new.
  2) Each time you press the button, the output text color cycles through a few choices (red, green, orange, etc.).
  3) Press the button to change the background color of the output box to a random color.
  4) Ask the user for a number and display that number doubled.
  
  Write each function below, and don’t forget to connect each one 
  to a new button in index.html using addEventListener.
*/

function changeTitle() {
  const newTitle = prompt('Change the title to:')

  if(!newTitle.trim()) {
    render('<h1>Please insert a valid title.</h1>')
    return 
  }
  title.innerText = newTitle
  render('Output will appear here…')
}

function changeText() {
  const colors = ['black', 'red', 'orange', 'yellow', 'green', 'blue', 'purple', 'white']
  if(i === colors.length - 1) {
    i = 0
  } else {
    i++
  }
  out.style.color = colors[i]
}

function changeBg() {
  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
  const random1 = hexArray[Math.floor(Math.random() * hexArray.length)]
  const random2 = hexArray[Math.floor(Math.random() * hexArray.length)]
  const random3 = hexArray[Math.floor(Math.random() * hexArray.length)]
  const random4 = hexArray[Math.floor(Math.random() * hexArray.length)]
  const random5 = hexArray[Math.floor(Math.random() * hexArray.length)]
  const random6 = hexArray[Math.floor(Math.random() * hexArray.length)]
  let hex = `#${random1}${random2}${random3}${random4}${random5}${random6}`
  out.style.backgroundColor = hex
}

function double() {
  const num = prompt('Insert a number:')
  if(!num.trim() || isNaN(num)) {
    render('<h1>Please insert a valid number</h1>')
    return
  }
  const numDoubled = num * 2
  render(`<p>Your number doubled is: ${numDoubled}</p>`)
}