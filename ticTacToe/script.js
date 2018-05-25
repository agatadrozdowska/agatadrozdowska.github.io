'use strict';

$(document).ready(function ticTacToe() {

    var arr = [['', '', ''], ['', '',''], ['', '', '']];
    var playerTurn = 'X';
    var row = 0;
    var column = 0;
    var isGameOver = false;

    changeCurrentPlayer();

    $('.square').click(function squareClicked() {
        row = parseInt($(this).attr('data-row'));
        column = parseInt($(this).attr('data-column'));

         if(validMove(row, column) && !isGameOver) {

             arr[row][column] = playerTurn;
             $(this).text(playerTurn);

            if (checkForWin()) {
                handleWin();
            } else {
                changeCurrentPlayer();
            }
        }
    });

    $('#button').click(resetGame);


    function changeCurrentPlayer() {
        if (playerTurn === 'X') {
            playerTurn = 'O';
        } else {
            playerTurn = 'X';
        }
        $('#currentTurn').text(playerTurn);
    }

    function validMove(row, column) {
        return arr[row][column] === '';
    }

    function horizontalWin() {
        for(var i = 0; i <= 2; i++) {
            if(arr[i][0] === playerTurn && arr[i][1] === playerTurn && arr[i][2] === playerTurn) {
                return true;
            }
        }
        return false;
    }

    function verticalWin() {
        for(var j = 0; j <= 2; j++) {
            if(arr[0][j] === playerTurn && arr[1][j] === playerTurn && arr[2][j] === playerTurn) {
                return true;
            }
        }
        return false;
    }

    function diagonalWin() {
        return (arr[0][0] === playerTurn &&
            arr[1][1] === playerTurn &&
            arr[2][2] === playerTurn)
            ||
            (arr[0][2] === playerTurn &&
                arr[1][1] === playerTurn &&
                arr[2][0] === playerTurn);
    }

    function checkForWin() {
       return horizontalWin() || verticalWin() || diagonalWin();
    }

    function handleWin() {
        var xWins = parseInt($('#X').text());
        var oWins = parseInt($('#O').text());

        $('#winner').text('PLAYER ' + playerTurn + ' WON!');
        if (playerTurn === 'X') {
            xWins++;
            $('#X').text(xWins);
        } else {
            oWins++;
            $('#O').text(oWins);
        }
        isGameOver = true;
    }

    function resetGame() {
        arr = [['', '', ''], ['', '',''], ['', '', '']];
        $('.square').text('');
        $('#winner').text('');
        isGameOver = false;
        changeCurrentPlayer();
    }

});