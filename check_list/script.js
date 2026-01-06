let btFocus = document.getElementById("btFocus");
let btLeft = document.getElementById("btLeft");
let btRight = document.getElementById("btRight");
let timerFocus = document.getElementById("timer");
let timeout = document.getElementById("timeout");
let Focus = 25;
let ativacaoPeriodo = 0;
// Function Time timerFocus
function pushTimer(timer){
    timer === `+` ? Focus += 25 : Focus -= 25;
    if(Focus < 25){
        Focus += 25;
        return
    }
    if(Focus === 625){
        Focus = 600;
    }
    let timeoutValue = Math.ceil(Focus / 50);
    timerFocus.textContent = Focus;
    timeout.textContent = timeoutValue + ` pausas`
}

btRight.addEventListener("click", ()=> pushTimer("+"));
btLeft.addEventListener("click", ()=> pushTimer("-"));

// Fucntion Timer
function ativarTimer(){
    if(ativacaoPeriodo != 0){
        let confirmacao = confirm("voce tem certeza que deseja comecar outro timer?")
        if(confirmacao === true){
            timeLeft = 0;
        }
    }
    ativacaoPeriodo += 1;
    const TOTAL_TIME = ((Focus / 25) * 1500) // 5 minutos
    let timeLeft = TOTAL_TIME;
    
    const progress = document.querySelector('.progress');
    const timeDisplay = document.querySelector('.time');
    
    const circumference = 565;
    
    function updateTimer() {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    timeDisplay.textContent = `${minutes}:${seconds}`;
    
    const offset = circumference - (timeLeft / TOTAL_TIME) * circumference;
    progress.style.strokeDashoffset = offset;
    
    if (timeLeft > 0) {
        timeLeft--;
    }
    }
    setInterval(updateTimer, 1000);
}
btFocus.addEventListener("click", ativarTimer)