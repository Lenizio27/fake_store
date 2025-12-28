let btFocus = document.getElementById("btFocus");
let btLeft = document.getElementById("btLeft");
let btRight = document.getElementById("btRight");
let timerFocus = document.getElementById("timer");
let timeout = document.getElementById("timeout");
let Focus = 25;

// Function Focus
btFocus.addEventListener("click", ()=>{
})

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