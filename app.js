// 🛸 SPECIFICATIONS
// 1. Build a game of battling alien spaceships using Javacript.

// Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, on a mission to destroy every last alien ship.
// Battle the aliens as you try to destroy them with your lasers.
// There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship.
// Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order.
// After you have destroyed a ship, you have the option to make a hasty retreat.


// 2. A game round would look like this:

// You attack the first alien ship.
// If the ship survives, it attacks you.
// If you survive, you attack the ship again.
// If it survives, it attacks you again ... etc.
// If you destroy the ship, you have the option to attack the next ship or to retreat.
// If you retreat, the game is over, perhaps leaving the game open for further developments or options.
// You win the game if you destroy all of the aliens.
// You lose the game if you are destroyed.
// 3. Ship Properties

// All ships must have the following properties:

// hull is the same as hitpoints. If hull reaches 0 or less, the ship is destroyed.
// firepower is the amount of damage done to the hull of the target with a successful hit.
// accuracy is the chance between 0 and 1 that the ship will hit its target.
// Your spaceship, the USS Assembly should have the following property values:

// hull: 20
// firepower: 5
// accuracy: .7
// The alien ships should each have the following range of properties, determined randomly:

// hull: between 3 and 6
// firepower: between 2 and 4
// accuracy: between .6 and .8
// You could be battling six alien ships each with unique values.

// Alien class
class Alien {
  constructor() {
   this.hull = Math.floor(Math.random() * 4) + 3;
   this.firepower = Math.floor(Math.random() * 3) + 2;
   this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
  }
}

// Game object
const game = {
  aliens: [],
  alienIndex: 0,
  player: {
    hull: 20,
    firepower: 5,
    accuracy: 0.7
  },
  gameLog: document.getElementById("gameLog"),
  startGameBtn: document.getElementById("startGame"),
  attackGameBtn: document.getElementById("attackGame"),
  retreatGameBtn: document.getElementById("retreatGame"),

 // Initialize the game
  init() {
    this.startGameBtn.addEventListener("click", () => this.startGame());
    this.attackGameBtn.addEventListener("click", () => this.attackGame());
    this.retreatGameBtn.addEventListener("click", () => this.retreatGame());
  },


 // Start the game
  startGame() {
    this.startGameBtn.disabled = true;
    this.createAliens();
    this.showGameLog("Game started! You are the captain of the USS Assembly.", "color: green; font-weight: bold;");
    this.showGameLog("You have encountered a horde of aliens. Your mission is to destroy them all!", "color: green; font-weight: bold;");
    this.showGameLog(`You are currently battling Alien Ships ${this.alienIndex + 1}.`, "color: green; font-weight: bold;");
    this.showGameLog(`Alien Ship ${this.alienIndex + 1} has hull: ${this.aliens[this.alienIndex].hull}`, "color: green; font-weight: bold;");
    this.showGameLog(`You have hull: ${this.player.hull}`, "color: green; font-weight: bold;");
    this.enableButtons();
},

// Create alien ships
createAliens() {
  for (let i = 0; i < 6; i++) {
    const alien = new Alien();
    this.aliens.push(alien);
  }
},

// Attack
attackGame() {
  const alien = this.aliens[this.alienIndex];
  const playerAccuracy = Math.random();

  if (playerAccuracy <= this.player.accuracy) {
    alien.hull -= this.player.firepower;
    this.showGameLog(`You attacked Alien Ship ${this.alienIndex + 1} and dealt ${this.player.firepower} damage.`, "color: blue; font-weight: bold;");
  } else {
    this.showGameLog("Your attack missed!", "color: red; font-weight: bold; font-size: 20px;");
  }

  if (alien.hull > 0) {
    this.alienAttack(alien);
  } else {
    this.alienIndex++;
    if (this.alienIndex < this.aliens.length) {
      this.showGameLog(`You destroyed Alien Ship ${this.alienIndex}.`, "color: green; font-weight: bold; font-size: 20px;");
      this.showGameLog(`You are now battling Alien Ship ${this.alienIndex + 1}.`, "color: blue; font-weight: bold;");
      this.showGameLog(`Alien Ship ${this.alienIndex + 1} has hull: ${this.aliens[this.alienIndex].hull}`, "color: blue; font-weight: bold;");
      this.showGameLog(`You have hull: ${this.player.hull}`, "color: blue; font-weight: bold;");
    } else {
      this.endGame(true);
    }
  }
},

// Alien's attack
alienAttack(alien) {
  const alienAccuracy = Math.random();

  if (alienAccuracy <= alien.accuracy) {
    this.player.hull -= alien.firepower;
    this.showGameLog(`Alien Ship ${this.alienIndex + 1} attacked you and dealt ${alien.firepower} damage.`, "color: red; font-weight: bold; font-size: 20px;");
  } else {
    this.showGameLog(`Alien Ship ${this.alienIndex + 1}'s attack missed!`, "color: green; font-weight: bold; font-size: 20px;");
  }

  if (this.player.hull > 0) {
    this.showGameLog(`You have hull: ${this.player.hull}`, "color: blue; font-weight: bold;");
  } else {
    this.endGame(false);
  }
},

// Retreat
retreatGame() {
  this.endGame(false);
},

// End the game
endGame(isVictory) {
  if (isVictory) {
    this.showGameLog("Congratulations! You have destroyed all the alien ships. Earth is saved!", "color: green; font-weight: bold; font-size: 26px;");
  } else {
    this.showGameLog("Game over! The aliens have destroyed your ship. Earth is doomed...", "color: red; font-weight: bold; font-size: 26px;");
  }
  this.disableButtons();
},

// Show game log messages
showGameLog(message, style) {
 // this.gameLog.innerText += `${message},${style}`;
  this.gameLog.innerHTML += `<p style="${style}">${message}</p>`;
},

// Game buttons
enableButtons() {
  this.attackGameBtn.disabled = false;
  this.retreatGameBtn.disabled = false;
},

disableButtons() {
  this.attackGameBtn.disabled = true;
  this.retreatGameBtn.disabled = true;
}
};

// Initialize the game
game.init();


