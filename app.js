"strict mode";
const button_game = document.querySelectorAll(".game_btn");
button_game.forEach((button) => {
  button.addEventListener("click", function () {
    console.log(button.id, computerGets());
    const the_result = playRound(button.id, computerGets());
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
let win_lose = document.querySelector('.lose_or_win').textContent;
winorlose = 'WIN'
document.querySelector('.lose_or_win').textContent = winorlose;
// replacing
console.log(document.querySelector('.user_picked'));
console.log(document.getElementById('scissors'));
// comparing the game
function playRound(PlayerChose, ComputerChose) {
  if (PlayerChose === ComputerChose) {
    // changin winorlose text
    winorlose = 'TIED!'
    document.querySelector('.lose_or_win').textContent = winorlose;
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
    winorlose = 'WIN!'
    document.querySelector('.lose_or_win').textContent = winorlose;
    // replacing
    const the_player = ` 
     <button class="game_btn" id="${PlayerChose}">
    <img src="/images/icon-${PlayerChose}.svg" alt="paper" />
  </button>`;
    const the_computer = ` 
     <button class="game_btn" id="${ComputerChose}">
    <img src="/images/icon-${ComputerChose}.svg" alt="paper" />
  </button>`;

  the_player.replaceWith(document.querySelector('.user_picked'));
// the changin to win and lose
const 


    return  `"you win" ${PlayerChose} ' beats' ${ComputerChose}`;
  } else {
    // WinOrLose === 'LOSE'
    // document.querySelector('.lose_or_win').textContent ===WinOrLose;
        scored--;
        document.querySelector('.the-score').textContent = scored;

        winorlose = 'LOSE!'
        document.querySelector('.lose_or_win').textContent = winorlose;
    return `"you lose" ${PlayerChose} 'couldnt beat' ${ComputerChose}`;
  }
}


// rules button

const rules = document.querySelector('.rules_game')
const rules_image = document.querySelector('.the_rules')
const close = document.querySelector('.close');
const overlay = document.querySelector('.overlay')
rules.addEventListener('click', function(){
rules_image.style.display = 'block';
overlay.style.display = 'block'
})
close.addEventListener('click', function(){
  rules_image.style.display = 'none';
  overlay.style.display = 'none'
})
overlay.addEventListener('click', function(){
  rules_image.style.display = 'none';
  overlay.style.display = 'none'
})

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    if(rules_image.style.display = 'block') {
      rules_image.style.display = 'none';
  overlay.style.display = 'none'
    }
  }
})