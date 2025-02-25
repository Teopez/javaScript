console.log("hi");
const getUserChoice = function (userInput) {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
     userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("ERROR");
  }
};
const getComputerChoice = function () {
  const number = Math.floor(Math.random() * 3);
  switch (number) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb'){
    return 'You win the Game';
  }
  if (userChoice === computerChoice) {
    return "The Game Was A Tie";
  }
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You win the Game";
  } else {
    return "You lost the Game";
  }
};

const playGame = () => {
  let userChoice = getUserChoice("bomb");
  let computerChoice = getComputerChoice();
  console.log(
    `You Choice: ${userChoice} and the computer choice: ${computerChoice}`
  );
  console.log(determineWinner(userChoice, computerChoice));
};

playGame()
