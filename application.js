var app = new Vue({
    el: '#app',
    data: {
        advises: [
            {
                id: 0,
                text: 'Stop playing youtube cat videos'
            },
            {
                id: 1,
                text: 'You should get back to worth and stop chilling'
            },
            {
                id: 2,
                text: 'Stop calling your girlfriend!'
            }
        ],
        user: "",
        autentication: false
    },
    created: function(){
        this.vars = {
            timeoutInMiliseconds: 5000,
            timeoutId: 0
        }
        
        this.setupTimers();
    },
    methods: {
      
        submit: function(event){
            
            if(this.user == ""){
              console.log("Ingrese nombre");
              event.preventDefault();
            } 
            else 
            {
              this.autentication = true;
              sessionStorage.setItem("user", this.user);
              event.preventDefault();
            }   
        },
        setMessage: function(message) {
            document.getElementById("message").innerHTML = message;
        },
        startTimer: function() {
            this.vars.timeoutId = window.setTimeout(this.doInactive, this.vars.timeoutInMiliseconds)
        },
        resetTimer: function() {
            window.clearTimeout(this.vars.timeoutId)
            this.startTimer();
        },
        doInactive: function() {
            console.log('gg')
            let user = sessionStorage.getItem("user");
            let choosedAdvice = this.advises[Math.floor(Math.random()*this.advises.length)];
            let message = `${user} ` + choosedAdvice.text;
            this.setMessage(message);
        },
        setupTimers: function() {
            document.addEventListener("mousemove", this.resetTimer, false);
            document.addEventListener("mousedown", this.resetTimer, false);
            document.addEventListener("keypress", this.resetTimer, false);
            document.addEventListener("touchmove", this.resetTimer, false);
            
            this.startTimer();
        }
     }
})
