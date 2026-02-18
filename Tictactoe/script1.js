const butn = document.getElementById("btn");
const text = document.getElementById("name");
const box = Array.from(document.getElementsByClassName("box"));
let space = Array(9).fill(null);
let player = true;
let check = true;
let player1move = 4;
let player2move = 4;
function checkwin() {
  if (
    (space[0] == space[1] && space[0] == space[2] && space[0] != null) |
    (space[3] == space[4] && space[3] == space[5] && space[3] != null) |
    (space[6] == space[7] && space[6] == space[8] && space[6] != null)
  )
    return true;
  else if (
    (space[0] == space[3] && space[0] == space[6] && space[0] != null) |
    (space[1] == space[4] && space[1] == space[7] && space[1] != null) |
    (space[2] == space[5] && space[2] == space[8] && space[2] != null)
  )
    return true;
  else if (
    (space[0] == space[4] && space[0] == space[8] && space[0] != null) |
    (space[2] == space[4] && space[2] == space[6] && space[2] != null)
  )
    return true;

  return false;
}

function start() {
  box.forEach((box) => box.addEventListener("click", gameon));
  return;
}
function gameon(e) {
  const id = e.target.id;
  if (!space[id] && check) {
    if (player) {
      space[id] = "x";
      e.target.innerText = "X";
      player1move--;
      player = false;
    } else {
      space[id] = "o";
      e.target.innerText = "O";
      player2move--;
      player = true;
    }

    if (checkwin()) {
      if (player) {
        text.innerText = "O win the game";
        butn.innerText = "Restart";
        check = false;
      } else {
        text.innerText = "X win the game";
        butn.innerText = "Restart";
        check = false;
      }
    }
    if (player1move == 0 && player2move == 0 && !checkwin()) {
      text.innerText = "This is a Draw !";
      butn.innerText = "Restart";
      check = false;
    }
  }

  return;
}

butn.addEventListener("click", restart);

function restart() {
  if (butn.innerText == "Start") {
    check = true;
    start();
    butn.innerText = "Restart";
  } else {
    space.fill(null);

    text.innerText = "TIC TAC TOE";
    box.forEach((e) => {
      e.innerText = "";
    });

    player = true;
    player1move = 4;
    player2move = 4;
    check = true;
  }
}
