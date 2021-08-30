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
        return this.isDraw() || Boolean(this.getWinner());
    }

    getWinner() {
        return null;
    }

    noMoreTurns() {
        return this.matrix.some(row => row.includes(null) === true);
    }

    isDraw() {
        return this.noMoreTurns() && !Boolean(this.getWinner());
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
