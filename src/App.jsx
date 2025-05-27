import { useState } from 'react';

function Square({ value, handleClick }) {
    return (
        <>
            <button
                className="m-1 h-12 w-12 border border-gray-400 bg-gray-100 text-xl leading-9"
                onClick={handleClick}
            >
                {value}
            </button>
        </>
    );
}

function App() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const result = calculateWinner(squares);
    console.log(result);
    const playerStatus = result
        ? `Winner: ${result}`
        : `Player's turn: ${isXNext ? 'X' : 'O'}`;

    const handleClick = (i) => {
        if (squares[i] != null || result) {
            return;
        }
        const nextSquares = [...squares];
        isXNext ? (nextSquares[i] = 'X') : (nextSquares[i] = 'O');
        setSquares(nextSquares);
        setIsXNext(!isXNext);
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

export default App;

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}
