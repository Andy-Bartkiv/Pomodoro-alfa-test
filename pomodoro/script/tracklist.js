var list = []

list[0] = new Audio()
list[0].src = './music/1_The_Look.mp3';

list[1] = new Audio()
list[1].src = './music/2_Overnight.mp3';

list[2] = new Audio()
list[2].src = './music/3_Well_Be_Alright.mp3';

list[3] = new Audio()
list[3].src = './music/4_Fallin_Night.mp3'; 

list[4] = new Audio()
list[4].src = './music/5_Lazy_Afternoon.mp3'; 

list[5] = new Audio()
list[5].src = './music/6_Sunup.mp3'; 

list[6] = new Audio()
list[6].src = './music/7_From_Midnight.mp3'; 

list[7] = new Audio()
list[7].src = './music/8_Time_alone.mp3'; 

list[8] = new Audio()
list[8].src = './music/9_Blue_Eye.mp3'; 

console.log(list)

function loadMusic() {//функция воспроизведения музыки по очереди
        

        list[0].play()
        console.log('now playing list[0]')
        
        list[0].addEventListener('ended', function() {
                 
            list[1].play()
            console.log('now playing list[1]')

            list[1].addEventListener('ended', function() {
               
                list[2].play()
                console.log('now playing list[2]')
               
                list[2].addEventListener('ended', function() {
                
                    list[3].play()
                    console.log('now playing list[3]')
                    
                    list[3].addEventListener('ended', function() {
                        
                        list[4].play()
                        console.log('now playing list[4]')
            
                        list[4].addEventListener('ended', function() {
                        
                            list[5].play()
                            console.log('now playing list[5]')

                            list[5].addEventListener('ended', function() {
                        
                                list[6].play()
                                console.log('now playing list[6]')

                                list[6].addEventListener('ended', function() {
                        
                                    list[7].play()
                                    console.log('now playing list[7]')

                                    list[7].addEventListener('ended', function() {
                        
                                        list[8].play()
                                        console.log('now playing list[8]')

                                        list[8].addEventListener('ended', function() {
                        
                                            setTimeout(loadMusic)
                                
                            })
                            
                        })
                        
                    })
                    
                })
                
            })
        })
    })
           })
        })
        
        
        
}    

