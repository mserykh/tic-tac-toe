class TicTacToe {
    constructor() {
    }

    currentPlayer = 'x';
    matrix = [
        [null, null, null],
        [null, null, null], 
        [null, null, null]
    ];
    rowIndex = null;
    columnIndex = null;

    getCurrentPlayerSymbol() {
        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.currentPlayer;
            this.currentPlayer = (this.currentPlayer === 'x' ? 'o' : 'x');
        }
    }

    isFinished() {
        return Boolean(this.getWinner()) || this.isDraw();
    }

    getWinner() {
        let winner = null;
        if (this.matrix[0][0] === this.matrix[1][1] && this.matrix[0][0] === this.matrix[2][2] && this.matrix[0][0] !== null) {
            winner = this.matrix[0][0];
        }
        else if (this.matrix[2][0] === this.matrix[1][1] && this.matrix[2][0] === this.matrix[0][2] && this.matrix[2][0] !== null) {
            winner = this.matrix[2][0];
        }
        else if (this.matrix[0][0] === this.matrix[1][0] && this.matrix[0][0] === this.matrix[2][0] && this.matrix[0][0] !== null) {
            winner = this.matrix[0][0];
        }
        else if (this.matrix[0][1] === this.matrix[1][1] && this.matrix[0][1] === this.matrix[2][1] && this.matrix[0][1] !== null) {
            winner = this.matrix[0][1];
        }
        else if (this.matrix[0][2] === this.matrix[1][2] && this.matrix[0][2] === this.matrix[2][2] && this.matrix[0][2] !== null) {
            winner = this.matrix[0][2];
        }
        else if (this.matrix[0][0] === this.matrix[0][1] && this.matrix[0][0] === this.matrix[0][2] && this.matrix[0][0] !== null) {
            winner = this.matrix[0][0];
        }
        else if (this.matrix[1][0] === this.matrix[1][1] && this.matrix[1][0] === this.matrix[1][2] && this.matrix[1][0] !== null) {
            winner = this.matrix[1][0];
        }
        else if (this.matrix[2][0] === this.matrix[2][1] && this.matrix[2][0] === this.matrix[2][2] && this.matrix[2][0] !== null) {
            winner = this.matrix[2][0];
        }
        else {
            winner = null;
        }
        return winner;
    }

    noMoreTurns() {
        return !this.matrix.some(row => row.includes(null) === true);
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
