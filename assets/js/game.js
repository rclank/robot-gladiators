var playerName = window.prompt("What's your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);
console.log(playerName);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    if (promptFight === "FIGHT" || promptFight === "fight") {
        enemyHealth = enemyHealth - playerAttack;
        console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);

        //check enemy's health
        if (enemyHealth <=0) {
            window.alert(enemyName + " has died!");
        } else {
            console.log(`${enemyName} still has ${enemyHealth} health left.`);
        }
        //check player's health
        if (playerHealth <=0) {
            window.alert(playerName + " has died!");
        } else {
            console.log(`${playerName} still has ${playerHealth} health left.`);
        }
    } else if (promptFight === "SKIP" || promptFight === "skip") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");

        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            playerMoney = playerMoney - 2;
        } else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!")
    }

};

fight();