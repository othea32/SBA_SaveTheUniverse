// Instructions
// Create a Vanilla JavaScript and name it "Save the Universe."
// using your knowledge of JavaScript to build a rudimentary space battle game.

// This task is to build something according to specification.

// Pretend you have received the specification below for a project.

// Planning your program is a challenge unto itself. START SIMPLE. Break the problem down as far as you can and don't move on until the smallest piece works.
// Once you've figured out the basics, it's up to you to make the game you want. Remember: your game does not have to be elegant. The only thing that matters is that it works.
// This assignment will be used to assess how well you:

// Put together what you have previously learned.
// Use available resources to solve problems.
// Take requirements and expand upon them as needed.
// Use available time appropriately and meet deadlines.
// Learn new skills through experimentation.
// The game will be programmed for and played using:

// window.prompt to get input from the user.
// Buttons in the browser.
// You can also use console.log.

// This is your first mini-project. You should not style the page until you first get all of the functionality down. That being said, there are several optional bonus objectives listed at the bottom of this page should you find the time to challenge yourself.

// 🛸 SPECIFICATIONS
// 1. Build a game of battling alien spaceships using Javacript.



// Earth has been attacked by a horde of aliens! You are the captain of the USS Assembly, on a mission to destroy every last alien ship.
// Battle the aliens as you try to destroy them with your lasers.
// There are six alien ships. The aliens' weakness is that they are too logical and attack one at a time: they will wait to see the outcome of a battle before deploying another alien ship.
// Your strength is that you have the initiative and get to attack first. However, you do not have targeting lasers and can only attack the aliens in order.
// After you have destroyed a ship, you have the option to make a hasty retreat.

// 2. Each ship has the following properties:
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
  this.showGameLog("Game started! You are the captain of the USS Assembly.");
  this.showGameLog("You have encountered a horde of aliens. Your mission is to destroy them all!");
  this.showGameLog(`You are currently battling Alien Ships ${this.alienIndex + 1}.`);
  this.showGameLog(`Alien Ship ${this.alienIndex + 1} has hull: ${this.aliens[this.alienIndex].hull}`);
  this.showGameLog(`You have hull: ${this.player.hull}`);
  this.enableButtons();
},




