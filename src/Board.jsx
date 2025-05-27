import Square from './assets/Square';
import calculateWinner from './winnerFunction';

function Board({ isXNext, squares, onPlay }) {
    const result = calculateWinner(squares);

    const playerStatus = result
        ? `Winner: ${result}`
        : `Player's turn: ${isXNext ? 'X' : 'O'}`;

    const handleClick = (i) => {
        if (squares[i] != null || result) {
            return;
        }
        const nextSquares = [...squares];
        isXNext ? (nextSquares[i] = 'X') : (nextSquares[i] = 'O');
        onPlay(nextSquares);
    };

    return (
        <>
            <h1 className="m-1 text-xl">{playerStatus}</h1>
            <div className="flex">
                <Square value={squares[0]} handleClick={() => handleClick(0)} />
                <Square value={squares[1]} handleClick={() => handleClick(1)} />
                <Square value={squares[2]} handleClick={() => handleClick(2)} />
            </div>
            <div className="flex">
                <Square value={squares[3]} handleClick={() => handleClick(3)} />
                <Square value={squares[4]} handleClick={() => handleClick(4)} />
                <Square value={squares[5]} handleClick={() => handleClick(5)} />
            </div>
            <div className="flex">
                <Square value={squares[6]} handleClick={() => handleClick(6)} />
                <Square value={squares[7]} handleClick={() => handleClick(7)} />
                <Square value={squares[8]} handleClick={() => handleClick(8)} />
            </div>
        </>
    );
}

export default Board;
