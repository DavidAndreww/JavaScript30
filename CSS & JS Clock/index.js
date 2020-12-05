const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setTime () {
  const now = new Date() // uses built-in date object

  const seconds = now.getSeconds() // gets current minute in seconds
  const secondsDegrees = ((seconds / 60) * 360) + 90// increments clock 1/60th of 360 degrees at every second (+90 offsets the rotate done in css file)
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  const minutes = now.getMinutes() // gets current minute
  const minuteDegrees = ((minutes / 60) * 360) + 90
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`

  const hours = now.getHours() // gets current hour
  const hourDegrees = ((hours / 12) * 360) + 90
  hourHand.style.transform = `rotate(${hourDegrees}deg)`

}

setInterval(setTime, 1000) // runs set
