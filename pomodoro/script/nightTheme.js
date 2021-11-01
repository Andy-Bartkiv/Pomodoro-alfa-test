const body = document.querySelector('.phone-body')
const toggle = document.getElementById('toggle')
const circle = document.querySelector('.circle')
const bigCircle = document.querySelector('.big-circle')
const buttonStart = document.querySelector('.start-button')
const buttonRestart = document.querySelector('.restart-button')
const buttonPause = document.querySelector('.pause-button')
const buttonNext = document.querySelector('.next-button')
const phone = document.querySelector('.phone') 



toggle.onclick = function(){
    toggle.classList.toggle('active')
    body.classList.toggle('active')
    circle.classList.toggle('active')
    bigCircle.classList.toggle('active')
    buttonStart.classList.toggle('active')
    buttonRestart.classList.toggle('active')
    buttonPause.classList.toggle('active')
    buttonNext.classList.toggle('active')
    phone.classList.toggle('active')

}



