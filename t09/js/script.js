"use strict";

let game = function tic() {
    let ticBoard = document.body.querySelectorAll("#game #board > *");
    tic.whoWins = " ";
    tic.player = "o";
    let menu = document.body.querySelector("#game #menu");
    let counter = document.body.querySelector("#game #menu #count-turn");
    tic.board = [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
    ];

    function setMap() {
        let y = 0;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                tic.board[i][j] = ticBoard[y].textContent;
                y++;
                // console.log(`a = ${i}`);
                // console.log(`b = ${y}`);
            }
        }

        // ticBoard.forEach(elem => console.log(elem.textContent));
        // console.log(`_${tic.whoWins}_`);
        console.log(tic.board);
    }

    function isItEnd() {
        if (
            tic.board[0][0] == "x"
            && tic.board[0][1] == "x"
            && tic.board[0][2] == "x") {
                
            tic.whoWins = "x";
            return true;
        } else if (
            tic.board[1][0] == "x"
            && tic.board[1][1] == "x"
            && tic.board[1][2] == "x") {
            tic.whoWins = "x";
            return true;
        } else if (
            tic.board[2][0] == "x"
            && tic.board[2][1] == "x"
            && tic.board[2][2] == "x") {
            tic.whoWins = "x";
            return true;
        } else if (
            tic.board[0][0] == "x"
            && tic.board[1][0] == "x"
            && tic.board[2][0] == "x") {
            tic.whoWins = "x";
            return true;
        } else if (
            tic.board[0][1] == "x"
            && tic.board[1][1] == "x"
            && tic.board[2][1] == "x") {
            tic.whoWins = "x";
            return true;
        } else if (
            tic.board[0][2] == "x"
            && tic.board[1][2] == "x"
            && tic.board[2][2] == "x") {
            tic.whoWins = "x";
            return true;
        } else if (
            tic.board[0][0] == "x"
            && tic.board[1][1] == "x"
            && tic.board[2][2] == "x") {
            tic.whoWins = "x";
            return true;
        } else if (
            tic.board[0][2] == "x"
            && tic.board[1][1] == "x"
            && tic.board[2][0] == "x") {
            tic.whoWins = "x";
            return true;
        }

        if (
            tic.board[0][0] == "o"
            && tic.board[0][1] == "o"
            && tic.board[0][2] == "o") {
            tic.whoWins = "o";
            return true;
        } else if (
            tic.board[1][0] == "o"
            && tic.board[1][1] == "o"
            && tic.board[1][2] == "o") {
            tic.whoWins = "o";
            return true;
        } else if (
            tic.board[2][0] == "o"
            && tic.board[2][1] == "o"
            && tic.board[2][2] == "o") {
            tic.whoWins = "o";
            return true;
        } else if (
            tic.board[0][0] == "o"
            && tic.board[1][0] == "o"
            && tic.board[2][0] == "o") {
            tic.whoWins = "o";
            return true;
        } else if (
            tic.board[0][1] == "o"
            && tic.board[1][1] == "o"
            && tic.board[2][1] == "o") {
            tic.whoWins = "o";
            return true;
        } else if (
            tic.board[0][2] == "o"
            && tic.board[1][2] == "o"
            && tic.board[2][2] == "o") {
            tic.whoWins = "o";
            return true;
        } else if (
            tic.board[0][0] == "o"
            && tic.board[1][1] == "o"
            && tic.board[2][2] == "o") {
            tic.whoWins = "o";
            return true;
        } else if (
            tic.board[0][2] == "o"
            && tic.board[1][1] == "o"
            && tic.board[2][0] == "o") {
            tic.whoWins = "o";
            return true;
        }

        if ((tic.board[0].includes(" ")
            || tic.board[1].includes(" ")
            || tic.board[2].includes(" ")) == true) {
            tic.whoWins = "-";
            console.log(tic.whoWins);
            return true;
        }
        return false;
    }

    ticBoard.forEach(elem => {
        elem.onclick = () => {


            if (elem.textContent != "x" && elem.textContent != "o") {
                elem.textContent = tic.player
                counter.textContent = String(Number(counter.textContent) + 1);
                setMap();
                isItEnd();
                if (tic.whoWins == "x") {
                    menu.style.background = "green";
                    ticBoard.forEach(elem => {
                        elem.onclick = () => {
                            
                        }
                    });
                }else if (tic.whoWins == "o"){
                    menu.style.background = "green";
                    ticBoard.forEach(elem => {
                        elem.onclick = () => {
                            
                        }
                    });
                } else if (tic.whoWins == "-"){
                    menu.style.background = "orange";
                    ticBoard.forEach(elem => {
                        elem.onclick = () => {
                            
                        }
                    });
                }

                if (tic.player == "x") {
                    document.body.querySelector('#game #menu #player-1').style.background = 'orange';
                    document.body.querySelector('#game #menu #player-2').style.background = 'rgb(207, 207, 207)';
                    tic.player = "o";
                } else {
                    document.body.querySelector('#game #menu #player-2').style.background = 'orange';
                    document.body.querySelector('#game #menu #player-1').style.background = 'rgb(207, 207, 207)';
                    tic.player = "x";
                }
            }

            
            
        };
    });

    // setMap();
};
game();
