// Write code below 💖
// 0 rock
// 1 scicissors
// 2222 paper
const player = 1;
const computer = Math.floor(Math.random() *3);

if (player == 0) {
  if (computer == 0){
    answer = "Draw!";
  }else if (computer == 1) {
    answer = "The player won!";
  } else{
    answer = 'Thee commmputer won!';
  }
} else if (player == 1) {
    if (computer == 0){
    answer = 'The commmputer won!';
  }else if (computer == 1) {
    answer = "Draw!";
  } else{
    answer = "The player won!";
  } 
} else if (player == 2){
    if (computer == 0){
      answer = "The player won!";
    } else if (computer == 1){
      answer = "The computer won!"
    } else {
      answer = "Draw!";
    }
}

if (player == 0){
  choicep = "Rock"
} else if (player == 1) {
  choicep = "Scissors"
} else {
  choicep = "Paper"
}

if (computer == 0){
  choicec = "Rock"
} else if (computer == 1) {
  choicec = "Scissors"
} else {
  choicec = "Paper"
}
console.log("player picked:", choicep);
console.log("Computer picked:", choicec);

console.log(answer)