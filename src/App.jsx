import { useState } from 'react';
import Board from './Board';
import History from './History';

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [isXNext, setIsXNext] = useState(true);
    const [currentStep, setCurrentStep] = useState(0);

    const currentSquares = history[currentStep];

    const handlePlay = (nextSquares) => {
        setIsXNext(!isXNext);
        const nextHistory = [...history.slice(0, currentStep + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentStep(nextHistory.length - 1);
    };

    const jumpTo = (step) => {
        setCurrentStep(step);
        setIsXNext(step % 2 === 0);
    };

    return (
        <div>
            <div>
                <Board
                    isXNext={isXNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div>
                <History history={history} jumpTo={jumpTo} />
            </div>
        </div>
    );
}
