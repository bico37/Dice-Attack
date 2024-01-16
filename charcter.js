// GLOBALE VARIABLE
let lives1 = 0;
let lives2 = 0;
let damage1 = 0;
let damage2 = 0;

let nameP1;
let nameP2;

let charc1;
let charc2;

let rollP1;
let rollP2;

let l1;
let l2;

let score1 = 0;
let score2 = 0;

let saveLive1;
let saveLive2;

console.log("test");
// CHARACTER 1
function prinz1() {
  document.getElementById("chare1").style.border = "5px solid green";
  lives1 = 12;
  damage1 = 10;

  saveLive1 = lives1;

  charc1 = "prinzr";

  document.getElementById("chare2").style.border = "";
  document.getElementById("chare3").style.border = "";
}
function ritter1() {
  document.getElementById("chare2").style.border = "5px solid green";
  lives1 = 20;
  damage1 = 8;

  saveLive1 = lives1;

  charc1 = "ritter";

  document.getElementById("chare1").style.border = "";
  document.getElementById("chare3").style.border = "";
}
function riese1() {
  document.getElementById("chare3").style.border = "5px solid green";
  lives1 = 30;
  damage1 = 5;

  saveLive1 = lives1;

  charc1 = "riese";

  document.getElementById("chare1").style.border = "";
  document.getElementById("chare2").style.border = "";
}

// CHARACTER 2
function prinz2() {
  document.getElementById("chare1_2").style.border = "5px solid lightgreen";
  lives2 = 12;
  damage2 = 10;

  saveLive2 = lives2;

  charc2 = "prinzb";

  document.getElementById("chare2_2").style.border = "";
  document.getElementById("chare3_2").style.border = "";
}
function ritter2() {
  document.getElementById("chare2_2").style.border = "5px solid lightgreen";
  lives2 = 20;
  damage2 = 8;

  saveLive2 = lives2;

  charc2 = "ritter";

  document.getElementById("chare1_2").style.border = "";
  document.getElementById("chare3_2").style.border = "";
}
function riese2() {
  document.getElementById("chare3_2").style.border = "5px solid lightgreen";
  lives2 = 30;
  damage2 = 5;

  saveLive2 = lives2;

  charc2 = "riese";

  document.getElementById("chare1_2").style.border = "";
  document.getElementById("chare2_2").style.border = "";
}

//Submit

function submit() {
  nameP1 = document.getElementById("name1").value;
  nameP2 = document.getElementById("name2").value;

  document.getElementById("content").innerHTML = "";
  document.getElementById("play").style.display = "inline";
  document.getElementById("play").style.display = "inline";

  // PLAY-----------------------------------------------------
  //NAMES
  document.getElementById("PlayName1").innerHTML = `<h6> Player 1: ${nameP1} </h6>`;
  document.getElementById("PlayName2").innerHTML = `<h6> Player 2: ${nameP2} </h6>`;
  // LIVES
  generateLives1(lives1);
  generateLives2(lives2);
  // DAMAGE
  generateDamage1();
  generateDamage2();
  // PICTURE
  generateCharacter1();
  generateCharacter2();
}

// PLAY-----------------------------------------------------
// LIVES
function generateLives1(liveP1) {
  for (let i = 0; i < liveP1; i++) {
    document.getElementById("player1lives").innerHTML += '<img src="./Bilder/elexir.png" alt="leben">';
  }
}
function generateLives2(liveP2) {
  for (let i = 0; i < liveP2; i++) {
    document.getElementById("player2lives").innerHTML += '<img src="./Bilder/elexir.png" alt="leben">';
  }
}
// DAMAGE
function generateDamage1() {
  for (let i = 0; i < damage1; i++) {
    document.getElementById("player1damage").innerHTML +=
      '<img src="./Bilder/Rocket.png" alt="schaden">';
  }
}
function generateDamage2() {
  for (let i = 0; i < damage2; i++) {
    document.getElementById("player2damage").innerHTML += '<img src="./Bilder/Rocket.png" alt="schaden">';
  }
}

// Picture
function generateCharacter1() {
  document.getElementById("charPic1").innerHTML = `<img src="./Bilder/${charc1}.png" alt="char1"></img>`;
}
function generateCharacter2() {
  document.getElementById("charPic2").innerHTML = `<img src="./Bilder/${charc2}.png" alt="char2"></img>`;
}

// Klick on Play
function rollDice() {
  document.getElementById("player1lives").innerHTML = "";
  document.getElementById("player2lives").innerHTML = "";
  let rollP1 = roll();
  let rollP2 = roll();
  console.log("Player 1: " + rollP1);
  console.log("Player 2: " + rollP2);

  if (rollP1 > rollP2) {
    lives2 = lives2 - damage1;
  } else if (rollP1 < rollP2) {
    lives1 = lives1 - damage2;
  }
  if (lives1 <= 0 || lives2 <= 0) {
    if (lives1 <= 0) {
      document.getElementById("tower1").innerHTML = `<img src="./Bilder/explosion.png" alt="boom" style="width: 15vw; left: 8%;">`;
      document.getElementById("charPic1").innerHTML = "";
      document.getElementById("winner").innerHTML = `<h6>${nameP2} hat gewonnen</h6>`;
      document.getElementById("winner").style.display = "inline";

      score2++;
    }
    if (lives2 <= 0) {
      document.getElementById("tower2").innerHTML = `<img src="./Bilder/explosion.png" alt="boom" style="width: 15vw; right: 8%;">`;
      document.getElementById("charPic2").innerHTML = "";
      document.getElementById("winner").innerHTML = `<h6>${nameP1} hat gewonnen</h6>`;
      document.getElementById("winner").style.display = "inline";

      score1++;
    }
    document.getElementById('playAgain').style.display = "inline"
  }
  generateLives2(lives2);
  generateLives1(lives1);

  document.getElementById("diceImg1").innerHTML = `<img src="./Bilder/Würfel/Red/${rollP1}.png" alt="Würfel1">`;
  document.getElementById("diceImg2").innerHTML = `<img src="./Bilder/Würfel/Blue/${rollP2}.png" alt="Würfel2">`;
}
function roll() {
  let random = Math.random();
  random = random * 6;
  random = Math.ceil(random);

  return random;
}

//Play Again
function playAgain() {
  lives1 = saveLive1;
  lives2 = saveLive2;

  document.getElementById("tower1").innerHTML = `<img src="./Bilder/RED/towerP.png" alt="tower"/>`;
  document.getElementById("tower2").innerHTML = `<img src="./Bilder/BLUE/towerBlue.png" alt="tower"/>`;

  document.getElementById("player1lives").innerHTML = "";
  document.getElementById("player2lives").innerHTML = "";

  // PLAY-----------------------------------------------------
  // LIVES
  generateLives1(lives1);
  generateLives2(lives2);
  // PICTURE
  generateCharacter1();
  generateCharacter2();

  document.getElementById('winner').style.display = "none";
  document.getElementById('playAgain').style.display = "none";
}

// End Game
function endGame() {
  let allWinner;
  if (score1 > score2){
    allWinner = `<p>The winner is ${nameP1}</p>`
  } else if (score1 < score2){
    allWinner = `<p>The winner is ${nameP2}</p>`
  } else if (score1 == score2){
    allWinner = `<p>Draw!</p>`
  }
  document.getElementById('endedGame').style.display = "inline";
  document.getElementById('winnerOfEnd').innerHTML = 
  `<p>${nameP1} Score: ${score1}</p>
  <p>${nameP2} Score: ${score2}</p>
  <hr>
  ${allWinner}
  <p onclick="backToStart()" id="backStart">Back to start</p>`
  
  document.getElementById('play').style = `filter: blur(8px)`;
}

//backToStart
function backToStart() {
  location.reload();
}