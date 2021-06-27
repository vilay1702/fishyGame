// variables
let tableHeadings = document.querySelectorAll("#tableHeadings th");
let result = document.querySelectorAll("#result p");
let currentRound = 1;
let currentPlayer = 1;
let displayCurrentRound = document.querySelectorAll("#rounds h3")[0];
let displayCurrentPlayer = document.querySelectorAll("#rounds h3")[1];
let count1 = 0;
let players = [
  { name: "", input: 0, score: 0 },
  { name: "", input: 0, score: 0 },
  { name: "", input: 0, score: 0 },
  { name: "", input: 0, score: 0 },
];
let totalScore = [0, 0, 0, 0];
let chooseOne = document.querySelector("#chooseOne");
let chooseTwo = document.querySelector("#chooseTwo");

// Functions
const showResult = () => {
  for (let i = 0; i < 4; i++) {
    result[i].innerHTML = totalScore[i];
  }
};

const chooseFish = (value) => {
  players[currentPlayer - 1].input = value;
  if (value == 1) {
    count1 += 1;
  }
  // if (currentRound == 6) {
  //   showResult();
  // }
  if (currentPlayer == 4) {
    getScores();
    currentPlayer = 1;
    currentRound += 1;
  } else {
    currentPlayer += 1;
  }
  if (currentRound >= 6) {
    for (let i = 0; i < 4; i++) {
      result[i].innerHTML = totalScore[i];
    }
  }
  displayCurrentRound.innerHTML = `Round ${currentRound}`;
  displayCurrentPlayer.innerHTML = `${players[currentPlayer - 1].name}'s turn`;
};

const showScore = () => {
  let ithRow = document.querySelectorAll(`#day${currentRound} td`);
  for (let j = 0; j < 4; j++) {
    ithRow[j + 1].innerHTML = players[j].score;
  }
};

const getScores = () => {
  if (count1 == 0) {
    for (let i = 0; i < 4; i++) {
      if (currentRound == 5 || currentRound == 6) {
        players[i].score = -250;
        totalScore[i] -= 250;
        players[i].input = 0;
      } else {
        players[i].score = -25;
        totalScore[i] -= 25;
        players[i].input = 0;
      }
    }
  } else if (count1 == 1) {
    for (let i = 0; i < 4; i++) {
      if (players[i].input == 1) {
        if (currentRound == 5 || currentRound == 6) {
          players[i].score = -250;
          totalScore[i] -= 250;
        } else {
          players[i].score = -25;
          totalScore[i] -= 25;
        }
      } else {
        if (currentRound == 5 || currentRound == 6) {
          players[i].score = 250;
          totalScore[i] = 250;
        } else {
          players[i].score = 25;
          totalScore[i] += 25;
        }
      }
      players[i].input = 0;
    }
  } else if (count1 == 2) {
    for (let i = 0; i < 4; i++) {
      if (players[i].input == 1) {
        if (currentRound == 5 || currentRound == 6) {
          players[i].score = -125;
          totalScore[i] -= 125;
        } else {
          players[i].score = -12.5;
          totalScore[i] -= 12.5;
        }
      } else {
        if (currentRound == 5 || currentRound == 6) {
          players[i].score = 500;
          totalScore[i] += 500;
        } else {
          players[i].score = 50;
          totalScore[i] += 50;
        }
      }
      players[i].input = 0;
    }
  } else if (count1 == 3) {
    for (let i = 0; i < 4; i++) {
      if (players[i].input == 2) {
        if (currentRound == 5 || currentRound == 6) {
          players[i].score = 750;
          totalScore[i] += 750;
        } else {
          players[i].score = 75;
          totalScore[i] += 75;
        }
      } else {
        players[i].score = 0;
      }
      players[i].input = 0;
    }
  } else if (count1 == 4) {
    for (let i = 0; i < 4; i++) {
      if (currentRound == 5 || currentRound == 6) {
        players[i].score = 250;
        totalScore[i] += 250;
      } else {
        players[i].score = 25;
        totalScore[i] += 25;
      }
      players[i].input = 0;
    }
  }
  showScore();
  count1 = 0;
  // showResult();
};

// get players name function
const getNames = () => {
  for (let i = 0; i < 4; i++) {
    players[i].name = prompt(`Enter player ${i + 1} name`).trim();
    if (players[i].name == "") {
      players[i].name = "Player" + i;
    }
    tableHeadings[i + 1].innerHTML = players[i].name;
  }
  displayCurrentRound.innerHTML = `Round ${currentRound}`;
  displayCurrentPlayer.innerHTML = `${players[currentPlayer - 1].name}'s turn`;
};

chooseOne.addEventListener("click", () => chooseFish(1));
chooseTwo.addEventListener("click", () => chooseFish(2));

getNames();
