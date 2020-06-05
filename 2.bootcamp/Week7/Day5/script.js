//Setup Variables

//Array that keeps track of whats in each square of the board
var origBoard;

//Buttons to select symbol
var buttonX = document.getElementById("x");

var buttonO = document.getElementById("o");

//default symbol players
var huPlayer = 'O';
//constant of the AI
var aiPlayer = 'X';



//Array of Array's for winning combinations of the board
const winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
]

//store variable by selecting each element "cell" on the board
const cells = document.querySelectorAll('.cell');

//function to start the game
startGame();

//defining the start function "what happens when the game starts"
function startGame() {

  //hide board
  document.querySelector(".board").style.display = "none";

  //select the endgame element to not display also when we replay
  document.querySelector(".endgame").style.display = "none";

  //when restarted choose again the user can choose the symbol
  document.querySelector("#start").style.display = "block";

  //if the user chooses the X sybol to play, the AI will be the opposite one
  buttonX.addEventListener('click', function () {
           huPlayer = 'X';
           aiPlayer = 'O';
           document.querySelector("#start").style.display = "none";
           document.querySelector(".board").style.display = "table";
  });

  //if the user chooses the O sybol to play, the AI will be the opposite one
  buttonO.addEventListener('click', function () {
           huPlayer = 'O';
           aiPlayer = 'X';
           document.querySelector("#start").style.display = "none";
           document.querySelector(".board").style.display = "table";
  });


  //Load to the origBoard variable All the Number Keys from 0 to 9
	origBoard = Array.from(Array(9).keys());
  console.log(origBoard);

  //Loop to Remove all the X's and O's from the board when we start
	for (var i = 0; i < cells.length; i++) {

    //there will be nothing in the cell
		cells[i].innerText = '';

    //remove the background color from the highlighted squares of the winner when started
		cells[i].style.removeProperty('background-color');

    //call a click function to turnClick
		cells[i].addEventListener('click', turnClick, false);
	}
}

// create a function call a rand number
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}


function turnClick(square){
    if (typeof origBoard[square.target.id]=='number'){ // if the box clicked is empty
        origBoard[square.target.id] = huPlayer // save location choose in the origBoard array
        cells[square.target.id].innerText = huPlayer // display "X" or "O"
        let huPlayerArr = origBoard.reduce((a, e, i) => (e === huPlayer) ? a.concat(i) : a, []); // create a new array with only choices of player
        if (testWin(huPlayerArr,"hu") ==  true){ // call function testWin to check if player win or not
            document.querySelector(".endgame").style.display = "block";
            document.querySelector(".endgame .text").innerText = "You win!";
        } else{ // if player not win then rand choose a square
            for (i=0;i<origBoard.length;i++){
                let rand = getRandomIntInclusive(0, 8);
                if (typeof origBoard[rand]=='number') {
                    origBoard[rand] = aiPlayer
                    cells[rand].innerText = aiPlayer
                    break;
                }
            }
            // create a new array with only choices of rand "ai"
            let aiPlayerArr = origBoard.reduce((a, e, i) => (e === aiPlayer) ? a.concat(i) : a, []);
            if (testWin(aiPlayerArr,"ai") ==  true){ // test if rand "ai" win or not
                document.querySelector(".endgame").style.display = "block";
                document.querySelector(".endgame .text").innerText = "You lose!";
            }
        }
        if (tieWin().length == 0){ // call tieWin to check if all squares are full. If the length == 0, i.e array in function have not numbers.
            document.querySelector(".endgame").style.display = "block";
            document.querySelector(".endgame .text").innerText = "Tie game!";      
        }
    }

}

function testWin(arr,player){
    let bool = false;
    for (let [index, win] of winCombos.entries()){ // for each array in winCombos
        if (win.every((el) => arr.includes(el))){ // if all the win elements are in arr (the player's squares)
            bool = true
            if (player == 'hu'){ // if player is human
                document.getElementById(win[0]).style.backgroundColor = "#009900";
                document.getElementById(win[1]).style.backgroundColor = "#009900";
                document.getElementById(win[2]).style.backgroundColor = "#009900";
            } else { // else if player is rand
                document.getElementById(win[0]).style.backgroundColor = "#FF0000";
                document.getElementById(win[1]).style.backgroundColor = "#FF0000";
                document.getElementById(win[2]).style.backgroundColor = "#FF0000";
            }
        }
    }
    return bool;
}

function tieWin(){ 
    return origBoard.filter((elem) => typeof elem == 'number'); // filter on array origBoard and save only numbers
}   


