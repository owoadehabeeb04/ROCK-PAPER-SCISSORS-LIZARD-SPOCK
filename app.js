"strict mode";
const button_game = document.querySelectorAll(".game_btn");
button_game.forEach((button) => {
  button.addEventListener("click", function () {
    console.log(button.id, computerGets());
    const the_result = playRound(button.id, computerGets(), button);
    console.log(the_result);
  });
});

// computer gets
const computerGets = function () {
  const TheChoices = ["scissors", "paper", "rock", "lizard", "spock"];
  const guess = Math.floor(Math.random() * TheChoices.length);
  return TheChoices[guess];
};
// console.log(computerGets());

// the score
let score = document.querySelector(".the-score").textContent;
scored = 0;
document.querySelector(".the-score").textContent = scored;
// win or lose
let win_lose = document.querySelector(".lose_or_win").textContent;
winorlose = "WIN";
document.querySelector(".lose_or_win").textContent = winorlose;
// replacing
console.log(document.querySelector(".user_picked"));
console.log(document.getElementById("scissors"));
// comparing the game
function playRound(PlayerChose, ComputerChose, buttonPlayer) {
  if (PlayerChose === ComputerChose) {
    // changin winorlose text
    winorlose = "TIED!";
    document.querySelector(".lose_or_win").textContent = winorlose;

  

    // THE USER PICKED
    const buttonplayer = buttonPlayer;
    console.log(buttonplayer);
    const youpicked = document.querySelector(".you-picked");
    var button = buttonplayer.cloneNode(true);
    console.log(button);
    button.style.display = "inline-flex";
    console.log(youpicked.appendChild(button));
    console.log(youpicked);

    // THE COMPUTER PICKED
    var computerpicked = document.createElement("button");
    computerpicked.classList.add("game_btn");
    computerpicked.classList.add(`btn${ComputerChose}`);

    computerpicked.innerHTML = `<img src="/images/icon-${ComputerChose}.svg" alt="paper" />`;
    computerpicked.setAttribute("id", `${ComputerChose}`);
    console.log(computerpicked);
    const housepicked = document.querySelector(".house-picked");
    housepicked.appendChild(computerpicked.cloneNode(true));


      // THE CHANGING TO WIN AND LOSE
      const the_game = document.querySelector(".rock-paper-scissors");
      const the_result_of_game = document.querySelector(".win-lose");
      const play_again = document.querySelector(".play-again");
      console.log(the_result_of_game.classList.remove("hidden"));
      the_game.classList.add("hidden");


    play_again.addEventListener("click", function () {
      the_game.classList.remove("hidden");
      the_result_of_game.classList.add("hidden");

      button.style.display = "none";
      // Get a reference to the child element
      var childElement = housepicked.lastChild;
      // Remove the child element
      housepicked.removeChild(childElement);
    });
    return "it is a tie ";
  } else if (
    (PlayerChose === "scissors" && ComputerChose === "paper") ||
    (PlayerChose === "paper" && ComputerChose === "rock") ||
    (PlayerChose === "rock" && ComputerChose === "lizard") ||
    (PlayerChose === "lizard" && ComputerChose === "spock") ||
    (PlayerChose === "spock" && ComputerChose === "scissors") ||
    (PlayerChose === "scissors" && ComputerChose === "lizard") ||
    (PlayerChose === "paper" && ComputerChose === "spock") ||
    (PlayerChose === "spock" && ComputerChose === "rock") ||
    (PlayerChose === "lizard" && ComputerChose === "paper") ||
    (PlayerChose === "rock" && ComputerChose === "scissors")
  ) {
    // changing score
    scored++;
    document.querySelector(".the-score").textContent = scored;

    // changing win or lose status
    winorlose = "WIN!";
    document.querySelector(".lose_or_win").textContent = winorlose;

    // replacing

    // THE USER PICKED
    const buttonplayer = buttonPlayer;
    console.log(buttonplayer);
    const youpicked = document.querySelector(".you-picked");
    var button = buttonplayer.cloneNode(true);
    console.log(button);
    button.style.display = "inline-flex";
    console.log(youpicked.appendChild(button));
    console.log(youpicked);

    // THE COMPUTER PICKED
    var computerpicked = document.createElement("button");
    computerpicked.classList.add("game_btn");
    computerpicked.classList.add(`btn${ComputerChose}`);

    computerpicked.innerHTML = `<img src="/images/icon-${ComputerChose}.svg" alt="paper" />`;
    computerpicked.setAttribute("id", `${ComputerChose}`);
    console.log(computerpicked);
    const housepicked = document.querySelector(".house-picked");
    housepicked.appendChild(computerpicked.cloneNode(true));

    // THE CHANGING TO WIN AND LOSE
    const the_game = document.querySelector(".rock-paper-scissors");
    const the_result_of_game = document.querySelector(".win-lose");
    const play_again = document.querySelector(".play-again");
    console.log(the_result_of_game.classList.remove("hidden"));
    the_game.classList.add("hidden");

    play_again.addEventListener("click", function () {
      the_game.classList.remove("hidden");
      the_result_of_game.classList.add("hidden");

      button.style.display = "none";
      // Get a reference to the child element
      var childElement = housepicked.lastChild;
      // Remove the child element
      housepicked.removeChild(childElement);
    });

    return `"you win" ${PlayerChose} ' beats' ${ComputerChose}`;
  } else {
    // WinOrLose === 'LOSE'
    scored--;
    document.querySelector(".the-score").textContent = scored;

    winorlose = "LOSE!";
    document.querySelector(".lose_or_win").textContent = winorlose;
    

    // THE USER PICKED
    const buttonplayer = buttonPlayer;
    console.log(buttonplayer);
    const youpicked = document.querySelector(".you-picked");
    var button = buttonplayer.cloneNode(true);
    console.log(button);
    button.style.display = "inline-flex";
    console.log(youpicked.appendChild(button));
    console.log(youpicked);

    // THE COMPUTER PICKED
    var computerpicked = document.createElement("button");
    computerpicked.classList.add("game_btn");
    computerpicked.classList.add(`btn${ComputerChose}`);

    computerpicked.innerHTML = `<img src="/images/icon-${ComputerChose}.svg" alt="paper" />`;
    computerpicked.setAttribute("id", `${ComputerChose}`);
    console.log(computerpicked);
    const housepicked = document.querySelector(".house-picked");
    housepicked.appendChild(computerpicked.cloneNode(true));

// THE CHANGING TO WIN AND LOSE
const the_game = document.querySelector(".rock-paper-scissors");
const the_result_of_game = document.querySelector(".win-lose");
const play_again = document.querySelector(".play-again");
console.log(the_result_of_game.classList.remove("hidden"));
the_game.classList.add("hidden");
    
    play_again.addEventListener("click", function () {
      the_game.classList.remove("hidden");
      the_result_of_game.classList.add("hidden");

      button.style.display = "none";
      // Get a reference to the child element
      var childElement = housepicked.lastChild;
      // Remove the child element
      housepicked.removeChild(childElement);
    });
    return `"you lose" ${PlayerChose} 'couldnt beat' ${ComputerChose}`;
  }
}

// rules button

const rules = document.querySelector(".rules_game");
const rules_image = document.querySelector(".the_rules");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
rules.addEventListener("click", function () {
  rules_image.style.display = "block";
  overlay.style.display = "block";
});
close.addEventListener("click", function () {
  rules_image.style.display = "none";
  overlay.style.display = "none";
});
overlay.addEventListener("click", function () {
  rules_image.style.display = "none";
  overlay.style.display = "none";
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if ((rules_image.style.display = "block")) {
      rules_image.style.display = "none";
      overlay.style.display = "none";
    }
  }
});
