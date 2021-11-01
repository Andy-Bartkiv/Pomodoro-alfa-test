const hide = document.getElementById('circleHide')
const timer = document.querySelector('.timer')

hide.onclick = function() {
    toggle.setAttribute('style', 'visibility: hidden')
    buttonStart.setAttribute('style','visibility: hidden')
    buttonPause.setAttribute('style', 'visibility: hidden')
    buttonRestart.setAttribute('style','visibility: hidden')
    buttonNext.setAttribute('style', 'visibility: hidden')
    circle.setAttribute('style', 'margin-top:45%; width:200px ; height:200px')
    timer.setAttribute('style', 'font-size: 60px')

    if (getComputedStyle(toggle).visibility == 'hidden') {

        toggle.setAttribute('style', 'visibility: visible')
        buttonStart.setAttribute('style','visibility: visible')
        buttonPause.setAttribute('style', 'visibility: visible')
        buttonRestart.setAttribute('style','visibility: visible')
        buttonNext.setAttribute('style','visibility: visible')
        circle.setAttribute('style', 'margin-top:auto; width:8rem ; height:8rem')
        timer.setAttribute('style', 'font-size: 40px')
    }
} 