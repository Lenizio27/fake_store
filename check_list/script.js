let btFocus = document.getElementById("btFocus");
let btAddTask = document.getElementById("btAddTask");
let btLeft = document.getElementById("btLeft");
let btRight = document.getElementById("btRight");
let btLimparTarefas = document.getElementById("btLimparTarefas");
let timerFocus = document.getElementById("timer");
let timeout = document.getElementById("timeout");
let Tarefas = document.getElementById("Tarefas");
let Focus = 25;
let ativacaoPeriodo = 0;


// =============== Function Time timerFocus ===============

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

// =============== Fucntion Timer ===============

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

// =============== Function Adicionar Tarefas ===============

let tasksSection = localStorage.getItem("minhasTarefas")
let tasks = [];

if(tasksSection != null){
    tasks = JSON.parse(tasksSection);
    for(let i = 0; i < tasks.length; i++){
        let divTask = document.createElement("p");
        divTask.classList.add("divTask")
        divTask.textContent = tasks[i]
        let lixeira = document.createElement("div")
        lixeira.classList.add("lixeiraTarefas")
        divTask.append(lixeira)
        Tarefas.append(divTask)
    }
}

btAddTask.addEventListener("click", AdicionarTarefas)
function AdicionarTarefas(){
    let tasksUpdate = prompt("Digite sua tarefa")
    if(tasksUpdate === null || tasksUpdate === "" ){
        alert("Por favor, informe uma Tarefa validade")
        return
    }
    tasks.push(tasksUpdate)
    localStorage.setItem("minhasTarefas", JSON.stringify(tasks))
    
    let divTask = document.createElement("p");
    divTask.classList.add("divTask")
    divTask.textContent = tasks[tasks.length - 1]
    Tarefas.append(divTask)

    console.log(tasks)
}

// =============== Function Deletar Tarefas ===============

btLimparTarefas.addEventListener("click", ()=>{
    if(tasks != null || tasks == ""){
        let confirmacao = confirm("Tem certeza que deseja prosseguir")
        if(confirmacao == true){
            tasks=[]
            localStorage.clear()
            Tarefas.textContent = ""
        }else{
            return
        }
    }
})