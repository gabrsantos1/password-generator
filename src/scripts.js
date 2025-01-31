function passwordGenerator(){
    
    const upperLet = document.getElementById("upperLet").checked;
    const lowerLet = document.getElementById("lowerLet").checked;
    const number = document.getElementById("number").checked;
    const symbol = document.getElementById("symbol").checked;

    //const upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //const lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    //const symbols = ["!", "`", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];
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

}

function passwordCopy(){
    const getPw = document.getElementById("pwOutput")
    getPw.select();
    document.execCommand("copy");

    alert("Senha copiada com sucesso!");
}