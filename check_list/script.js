let btFocus = document.getElementById("btFocus");
let timerFocus = 25
function periodoConcentracao(){
    let timer = document.getElementById("timer");
    timer.textContent = 10
}
btFocus.addEventListener("click", periodoConcentracao)