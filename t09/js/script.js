"use strict";

let game = function tic() {
    let ticBoard = document.body.querySelectorAll("#game #board > *");
    tic.whoWins = " ";
    tic.player = "x";
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
            }
        }
        console.log(tic.board);
    }

    function isItEnd() {
        if (
            tic.board[0][0] == "x"
            && tic.board[0][1] == "x"
            && tic.board[0][2] == "x") {
            ticBoard[0].style.color = "green";
            ticBoard[1].style.color = "green";
            ticBoard[2].style.color = "green";
            tic.whoWins = "x";
            return true;
        } else if (
            tic.board[1][0] == "x"
            && tic.board[1][1] == "x"
            && tic.board[1][2] == "x") {
            ticBoard[3].style.color = "green";
            ticBoard[4].style.color = "green";
            ticBoard[5].style.color = "green";
            tic.whoWins = "x";
            return true;
        } else if (
            tic.board[2][0] == "x"
            && tic.board[2][1] == "x"
            && tic.board[2][2] == "x") {
            ticBoard[6].style.color = "green";
            ticBoard[7].style.color = "green";
            ticBoard[8].style.color = "green";
            tic.whoWins = "x";
            return true;
        } else if (
            tic.board[0][0] == "x"
            && tic.board[1][0] == "x"
            && tic.board[2][0] == "x") {
            ticBoard[0].style.color = "green";
            ticBoard[3].style.color = "green";
            ticBoard[6].style.color = "green";
            tic.whoWins = "x";
            return true;
        } else if (
            tic.board[0][1] == "x"
            && tic.board[1][1] == "x"
            && tic.board[2][1] == "x") {
            ticBoard[1].style.color = "green";
            ticBoard[4].style.color = "green";
            ticBoard[7].style.color = "green";
            tic.whoWins = "x";
            return true;
        } else if (
            tic.board[0][2] == "x"
            && tic.board[1][2] == "x"
            && tic.board[2][2] == "x") {
            ticBoard[2].style.color = "green";
            ticBoard[5].style.color = "green";
            ticBoard[8].style.color = "green";
            tic.whoWins = "x";
            return true;
        } else if (
            tic.board[0][0] == "x"
            && tic.board[1][1] == "x"
            && tic.board[2][2] == "x") {
            ticBoard[0].style.color = "green";
            ticBoard[4].style.color = "green";
            ticBoard[8].style.color = "green";
            tic.whoWins = "x";
            return true;
        } else if (
            tic.board[0][2] == "x"
            && tic.board[1][1] == "x"
            && tic.board[2][0] == "x") {
            ticBoard[2].style.color = "green";
            ticBoard[4].style.color = "green";
            ticBoard[6].style.color = "green";
            tic.whoWins = "x";
            return true;
        }

        if (
            tic.board[0][0] == "o"
            && tic.board[0][1] == "o"
            && tic.board[0][2] == "o") {
            ticBoard[0].style.color = "green";
            ticBoard[1].style.color = "green";
            ticBoard[2].style.color = "green";
            tic.whoWins = "o";
            return true;
        } else if (
            tic.board[1][0] == "o"
            && tic.board[1][1] == "o"
            && tic.board[1][2] == "o") {
            ticBoard[3].style.color = "green";
            ticBoard[4].style.color = "green";
            ticBoard[5].style.color = "green";
            tic.whoWins = "o";
            return true;
        } else if (
            tic.board[2][0] == "o"
            && tic.board[2][1] == "o"
            && tic.board[2][2] == "o") {
            ticBoard[6].style.color = "green";
            ticBoard[7].style.color = "green";
            ticBoard[8].style.color = "green";
            tic.whoWins = "o";
            return true;
        } else if (
            tic.board[0][0] == "o"
            && tic.board[1][0] == "o"
            && tic.board[2][0] == "o") {
            ticBoard[0].style.color = "green";
            ticBoard[3].style.color = "green";
            ticBoard[6].style.color = "green";
            tic.whoWins = "o";
            return true;
        } else if (
            tic.board[0][1] == "o"
            && tic.board[1][1] == "o"
            && tic.board[2][1] == "o") {
            ticBoard[1].style.color = "green";
            ticBoard[4].style.color = "green";
            ticBoard[7].style.color = "green";
            tic.whoWins = "o";
            return true;
        } else if (
            tic.board[0][2] == "o"
            && tic.board[1][2] == "o"
            && tic.board[2][2] == "o") {
            ticBoard[2].style.color = "green";
            ticBoard[5].style.color = "green";
            ticBoard[8].style.color = "green";
            tic.whoWins = "o";
            return true;
        } else if (
            tic.board[0][0] == "o"
            && tic.board[1][1] == "o"
            && tic.board[2][2] == "o") {
            ticBoard[0].style.color = "green";
            ticBoard[4].style.color = "green";
            ticBoard[8].style.color = "green";
            tic.whoWins = "o";
            return true;
        } else if (
            tic.board[0][2] == "o"
            && tic.board[1][1] == "o"
            && tic.board[2][0] == "o") {
            ticBoard[2].style.color = "green";
            ticBoard[4].style.color = "green";
            ticBoard[6].style.color = "green";
            tic.whoWins = "o";
            return true;
        }

        if ((tic.board[0].includes("")
            || tic.board[1].includes("")
            || tic.board[2].includes("")) == false) {
            tic.whoWins = "-";
            console.log(tic.whoWins);
            return true;
        }
        return false;
    }

    document.body.querySelector("#game #menu #restart-game").onclick = () => {
        tic.board = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "],
        ];
        ticBoard.forEach(elem => {elem.textContent = ""});
        document.body.querySelector("#game #menu #count-turn").textContent = "0";
        tic.whoWins = " ";
        tic.player = "x";
        document.body.querySelector("#game #menu #player-1").style.background = "orange";
        document.body.querySelector("#game #menu #player-2").style.background = "rgb(207, 207, 207)";
        document.body.querySelector("#game #menu").style.background = "rgb(165, 165, 165)";
        document.body.querySelector("#game #menu #won").innerHTML = "";
        ticBoard.forEach(elem => {elem.style.color = "rgb(90, 90, 90)"});

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
                        document.body.querySelector("#game #menu #won").innerHTML = "Player 1<br><div>won!</div>";
                        document.body.querySelector("#game #menu #numb-turns").style.color = "white";
                        document.body.querySelector("#game #menu #count-turn").style.color = "white";
                        document.body.querySelector("#game #menu #player-1").style.background = "rgb(207, 207, 207)";
                        document.body.querySelector("#game #menu #player-2").style.background = "rgb(207, 207, 207)";
                        return;

                    }else if (tic.whoWins == "o"){
                        menu.style.background = "green";
                        ticBoard.forEach(elem => {
                            elem.onclick = () => {

                            }
                        });
                        document.body.querySelector("#game #menu #won").innerHTML = "Player 2<br><div>won!</div>";
                        document.body.querySelector("#game #menu #numb-turns").style.color = "white";
                        document.body.querySelector("#game #menu #count-turn").style.color = "white";
                        document.body.querySelector("#game #menu #player-1").style.background = "rgb(207, 207, 207)";
                        document.body.querySelector("#game #menu #player-2").style.background = "rgb(207, 207, 207)";
                        return;

                    } else if (tic.whoWins == "-"){
                        menu.style.background = "orange";
                        ticBoard.forEach(elem => {
                            elem.onclick = () => {

                            }
                        });
                        document.body.querySelector("#game #menu #won").innerHTML = "It's a<br><div>draw!</div>";
                        document.body.querySelector("#game #menu #won").style.color = "rgb(58, 58, 58)";
                        document.body.querySelector("#game #menu #player-1").style.background = "rgb(207, 207, 207)";
                        document.body.querySelector("#game #menu #player-2").style.background = "rgb(207, 207, 207)";
                        return;
                    }

                    if (tic.player == "x") {
                        document.body.querySelector("#game #menu #player-1").style.background = "orange";
                        document.body.querySelector("#game #menu #player-2").style.background = "rgb(207, 207, 207)";
                        tic.player = "o";
                    } else {
                        document.body.querySelector("#game #menu #player-2").style.background = "orange";
                        document.body.querySelector("#game #menu #player-1").style.background = "rgb(207, 207, 207)";
                        tic.player = "x";
                    }
                }

            };
        });

    };

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
                    document.body.querySelector("#game #menu #won").innerHTML = "Player 1<br><div>won!</div>";
                    document.body.querySelector("#game #menu #numb-turns").style.color = "white";
                    document.body.querySelector("#game #menu #count-turn").style.color = "white";
                    document.body.querySelector("#game #menu #player-1").style.background = "rgb(207, 207, 207)";
                    document.body.querySelector("#game #menu #player-2").style.background = "rgb(207, 207, 207)";
                    return;

                }else if (tic.whoWins == "o"){
                    menu.style.background = "green";
                    ticBoard.forEach(elem => {
                        elem.onclick = () => {

                        }
                    });
                    document.body.querySelector("#game #menu #won").innerHTML = "Player 2<br><div>won!</div>";
                    document.body.querySelector("#game #menu #numb-turns").style.color = "white";
                    document.body.querySelector("#game #menu #count-turn").style.color = "white";
                    document.body.querySelector("#game #menu #player-1").style.background = "rgb(207, 207, 207)";
                    document.body.querySelector("#game #menu #player-2").style.background = "rgb(207, 207, 207)";
                    return;

                } else if (tic.whoWins == "-"){
                    menu.style.background = "orange";
                    ticBoard.forEach(elem => {
                        elem.onclick = () => {

                        }
                    });
                    document.body.querySelector("#game #menu #won").innerHTML = "It's a<br><div>draw!</div>";
                    document.body.querySelector("#game #menu #won").style.color = "rgb(58, 58, 58)";
                    document.body.querySelector("#game #menu #player-1").style.background = "rgb(207, 207, 207)";
                    document.body.querySelector("#game #menu #player-2").style.background = "rgb(207, 207, 207)";
                    return;
                }

                if (tic.player == "x") {
                    document.body.querySelector("#game #menu #player-1").style.background = "orange";
                    document.body.querySelector("#game #menu #player-2").style.background = "rgb(207, 207, 207)";
                    tic.player = "o";
                } else {
                    document.body.querySelector("#game #menu #player-2").style.background = "orange";
                    document.body.querySelector("#game #menu #player-1").style.background = "rgb(207, 207, 207)";
                    tic.player = "x";
                }
            }

        };
    });

    // setMap();
};
game();
