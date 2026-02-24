function rollDie() { 
    let roll = Math.floor(Math.random() * 20) + 1;
    console.log(`You rolled: ${roll}. What luck!`);
}
function throwDice (numRolls) {
    for (let i = 0; i < numRolls; i++){
        rollDie();
    }
 } //This is a D20 random roller program like a DND D20 die

const expr = "diceRoll";
switch (expr) {
    case < 5:
        console.log("Aww, better luck next time!");
        break;
    case > 5 && < 10:
        console.log("Not too bad, but you need to have more luck!");
        break;
    case > 10 && < 15:
        console.log("You rolled a bit better there!");
        break;
    case < 15 && > 20:
        console.log("Nice lucky roll!");
        break;
    case 20:
        console.log("Incredible!!!!");
        break;
    default:
        console.log('Try the roll again!");
                    }
//The switch statement runs the text that shows up when the virtual die is rolled
