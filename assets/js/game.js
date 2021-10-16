// Game States
// "WIN" - Player robot has defeated all enemy robots
//   * Fight all enemy robots
//   * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

// var playerName = window.prompt("What's your robot's name?");
var playerName = "haggis";
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player picks skip, confirm and stop the loop
        if (promptFight === "SKIP" || promptFight === "skip") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            } else {
                fight();
            }
        }

        if (promptFight === "FIGHT" || promptFight === "fight") {
            // player attacks enemy
            enemyHealth = enemyHealth - playerAttack;
            console.log(`${playerName} attacked ${enemyName}. ${enemyName} now has ${enemyHealth} health remaining.`);

            //check enemy's health
            if (enemyHealth <=0) {
                window.alert(enemyName + " has died!");
                playerMoney = playerMoney + 20;
                break;
            } else {
                // window.alert(`${enemyName} still has ${enemyHealth} health left.`);
            }
            
            // enemy attacks player
            playerHealth = playerHealth - enemyAttack;
            console.log(`${enemyName} attacked ${playerName}. ${playerName} now has ${playerHealth} health remaining.`);

            //check player's health
            if (playerHealth <=0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                // window.alert(`${playerName} still has ${playerHealth} health left.`);
            }
        } else {
            window.alert("You need to choose a valid option. Try again!")
        }
    }
};

for (var i = 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);
}