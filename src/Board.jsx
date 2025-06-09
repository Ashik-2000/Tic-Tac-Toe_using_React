import Square from './Square';
import calculateWinner from './winnerFunction';

function Board({ isXNext, squares, handlePlay }) {
    const result = calculateWinner(squares);
    const winner = result ? result[0] : null;
    const winningLine = result ? result[1] : [];

    let playerStatus = '';

    if (!winner && squares.every((square) => square !== null)) {
        playerStatus = "It's a Draw";
    } else {
        playerStatus = winner
            ? `Winner: ${winner}`
            : `Player's turn: ${isXNext ? 'X' : 'O'}`;
    }

    const handleClick = (i) => {
        if (squares[i] != null || winner) {
            return;
        }
        const nextSquares = [...squares];
        isXNext ? (nextSquares[i] = 'X') : (nextSquares[i] = 'O');
        handlePlay(nextSquares);
    };

    return (
        <>
            <h1 className="m-1 text-xl">{playerStatus}</h1>
            <div className="flex">
                <Square
                    value={squares[0]}
                    handleClick={() => handleClick(0)}
                    highlight={winningLine.includes(0)}
                />
                <Square
                    value={squares[1]}
                    handleClick={() => handleClick(1)}
                    highlight={winningLine.includes(1)}
                />
                <Square
                    value={squares[2]}
                    handleClick={() => handleClick(2)}
                    highlight={winningLine.includes(2)}
                />
            </div>
            <div className="flex">
                <Square
                    value={squares[3]}
                    handleClick={() => handleClick(3)}
                    highlight={winningLine.includes(3)}
                />
                <Square
                    value={squares[4]}
                    handleClick={() => handleClick(4)}
                    highlight={winningLine.includes(4)}
                />
                <Square
                    value={squares[5]}
                    handleClick={() => handleClick(5)}
                    highlight={winningLine.includes(5)}
                />
            </div>
            <div className="flex">
                <Square
                    value={squares[6]}
                    handleClick={() => handleClick(6)}
                    highlight={winningLine.includes(6)}
                />
                <Square
                    value={squares[7]}
                    handleClick={() => handleClick(7)}
                    highlight={winningLine.includes(7)}
                />
                <Square
                    value={squares[8]}
                    handleClick={() => handleClick(8)}
                    highlight={winningLine.includes(8)}
                />
            </div>
        </>
    );
}

export default Board;
