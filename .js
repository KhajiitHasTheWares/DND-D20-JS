function rollDie() { 
    let roll = Math.floor(Math.random() * 20) + 1;
    console.log(`You rolled: ${roll}. What luck!`);
}
function throwDice (numRolls) {
    for (let i = 0; i < numRolls; i++){
        rollDie();
    }
 } //This is a D20 random roller program like a DND D20 die
