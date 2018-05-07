$(document).ready(function() {
    
    //Detect inactivity functions

    var timeoutInMiliseconds = 5000;
    var timeoutId; 
    
    function startTimer() { 
        // window.setTimeout returns an Id that can be used to start and stop a timer
        timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds)
    }

    function resetTimer() { 
        window.clearTimeout(timeoutId)
        startTimer();
    }
    
    function doInactive() {
        // does whatever you need it to actually do - probably signs them out or stops polling the server for info
        console.log('gg')
    }
    
    function setupTimers () {
        document.addEventListener("mousemove", resetTimer, false);
        document.addEventListener("mousedown", resetTimer, false);
        document.addEventListener("keypress", resetTimer, false);
        document.addEventListener("touchmove", resetTimer, false);
        
        startTimer();
    }
    
    setupTimers();
    
    //User Functions
    
    let user = "angelo";
    sessionStorage.setItem("user", user);

    let advises = [
        {
            id: 0,
            text: 'Stop playing youtube videos'
        },
        {
            id: 1,
            text: 'You should get back to worth and sop chilling'
        },
        {
            id: 2,
            text: 'Stop calling your girlfriend!'
        }
    ]

    var choosedAdvice = advises[Math.floor(Math.random()*advises.length)];

    let message = `${user} ` + choosedAdvice.text;
});