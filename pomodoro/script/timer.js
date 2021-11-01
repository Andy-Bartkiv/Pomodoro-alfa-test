let minutes = 25;
let seconds = '00';





const bell = new Audio('./music/alert.mp3')
const sessionDone = document.querySelector('.sessionDone')
const phoneBody = document.getElementById('phone-body') 



function template() {
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}

function start(){

    loadMusic()
    

    

    minutes = 24
    seconds = 59

    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;


    let minutesInterval = setInterval(minutesTimer, 60000)
    let secondsInterval = setInterval(secondsTimer, 1000)

    function minutesTimer(){
        minutes = minutes -1
        document.getElementById('minutes').innerHTML = minutes 
    }
    function secondsTimer(){
        seconds = seconds -1
        document.getElementById('seconds').innerHTML = seconds

        if(seconds <=0){
            if(minutes <= 0){
                clearInterval(minutesInterval)
                clearInterval(secondsInterval)

                
                sessionDone.classList.toggle('active')
                
                if(phoneBody.classList.contains('active') === true){
                    sessionDone.classList.add('js-class')
                } else {
                    sessionDone.classList.remove('js-class')
                }

                bell.play()
                list.pause()
            }
            seconds = 60
        }

    }
    
}

function restart(){

    

    minutes = 25
    seconds = '00'
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if(seconds <=0 || seconds === '00'){
        seconds = 59
    }

   
    bell.pause()
    

    setTimeout(loadMusic, 1000)
    sessionDone.classList.remove('active')
    
}


function paused(){


    clearInterval(minutesInterval);
    clearInterval(secondsInterval);

    minutes = minutes
    seconds = seconds 

    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    click.pause()
}

function next(){
    
    list[i].pause()
    list[i+1].play()
}