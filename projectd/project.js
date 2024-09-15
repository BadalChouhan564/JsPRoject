// 1. Deposit some money
// 2. Determine number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. check if the user won
// 6. give the user their winnings
// 7. play again

const prompt = require("prompt-sync")(); 






const deposit = ()=>{    //1. Deposit some money
while(true){
    const depositAmount = prompt("Enter your deposit Amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
        console.log("Inavalid deposit Amount, try again later.");  
    }else{
        return numberDepositAmount;
    }
}
};

const getNumberOfLines = () => {   //2. Determine number of lines to bet on
    while(true){
        const lines = prompt("Enter The number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);
    
        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
            console.log("Inavalid Number of lines, try again.");  
        }else{
            return numberOfLines;
        }
    }
};

const getBet = (balance, Lines) =>{   //3. Collect a bet amount
    while(true){
        const bet = prompt("Enter The bet per lines: ");
        const numberBet = parseFloat(bet);
    
        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / Lines) {
            console.log("Inavalid bet, try again.");  
        }else{
            return numberBet;
        }
    }
};

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance,numberOfLines);
