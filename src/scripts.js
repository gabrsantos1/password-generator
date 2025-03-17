function passwordGenerator(){
    
    const upperLet = document.getElementById("upperLet").checked;
    const lowerLet = document.getElementById("lowerLet").checked;
    const number = document.getElementById("number").checked;
    const symbol = document.getElementById("symbol").checked;

    const upperLetter = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    const lowerLetter = ["abcdefghijklmnopqrstuvwxyz"];
    const numbers = ["0123456789"];
    const symbols = ["!`#$%&()*+,-./:;<=>?@[]^_{|}~"];

    const size = document.getElementById("size").value;
    
    if(size <= 0){
        alert("Selecione um tamanho válido para sua senha.");
        return;
    }

    let pwConfig = ""

    if(upperLet == true){
        pwConfig += upperLetter;
    }
    if (lowerLet == true){
        pwConfig += lowerLetter;
    }
    if (number == true){
        pwConfig += numbers;
    }
    if (symbol == true){
        pwConfig += symbols;
    }

    if(pwConfig.length === 0){
        alert("Selecione pelo menos uma especificação para sua senha.");
        return;
    }

    let pwComplete = "";
    for(let i = 0; i < size; i++){
        const randomizer = Math.floor(Math.random() * pwConfig.length);
        pwComplete += pwConfig[randomizer];
    }

    document.getElementById("pwOutput").value = "Senha: " + pwComplete;

    saveHistory();
}

function passwordCopy(){
    const getPw = document.getElementById("pwOutput")
    getPw.select();
    document.execCommand("copy");

    alert("Senha copiada com sucesso!");
}

const history = [];
const inputField = document.getElementById("pwOutput");
const historyContainer = document.getElementById("historyContainer");
const btnHistory = document.getElementById("btnHistory");

function saveHistory(){
    const getPw = inputField.value.trim();
    
    if (getPw && !history.includes(getPw)) {
        history.push(getPw);
        historyContainer.innerHTML = history.join("<br>");
    }

}

function toggleHistory() {
    historyContainer.classList.toggle("hidden");
}

btnHistory.addEventListener("click", toggleHistory);

