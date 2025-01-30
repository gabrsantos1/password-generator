function passwordGenerator(){
    const upperLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const symbol = ["!", "`", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"];

    let pwConfig = ""

    if(upperLet == true){
        pwConfig += upperLetter;
    } else if (lowerLet == true){
        pwConfig += lowerLetter;
    } else if (number == true){
        pwConfig += number;
    } else if (symbol == true){
        pwConfig += symbol;
    }

    if(pwConfig.length === 0){
        alert("Selecione pelo menos uma especificação para sua senha.")
    }

    let pwComplete = "";
    for(let i = 0; i < size; i++){
        const randomizer = Math.floor(Math.random() * pwConfig.length);
        pwComplete += pwConfig[randomizer];
    }

    textContent = "Senha: " + pwComplete;

}