function generatePassword() {
    const characters = 
        ["A","B","C","D","E","F","G","H","I","J","K","L",
        "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c",
        "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
        "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
        "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",
        ")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
        "/"];

    let passwordOne = [];
    let passwordTwo = [];

    let passwordLength = 10;

    for (let i = 0; i < passwordLength; i++) {
        let arrangeOne = Math.floor(Math.random() * characters.length)
        let arrangeTwo = Math.floor(Math.random() * characters.length)

        passwordOne += characters[arrangeOne];
        passwordTwo += characters[arrangeTwo];
    }

    let firstInput = document.getElementById("pass-code-one")
    firstInput.value = passwordOne;
    let secondInput = document.getElementById("pass-code-two")
    secondInput.value = passwordTwo;
}



