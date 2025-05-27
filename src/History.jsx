function History({ history, jumpTo }) {
    const steps = history.map((squares, step) => {
        let description;
        if (step > 0) {
            description = `Go to step #${step}`;
        } else {
            description = 'Start the Game';
        }
        return (
            <li
                className="m-1 rounded-sm bg-gray-600 px-2 text-lg text-white"
                key={step}
            >
                <button onClick={() => jumpTo(step)}>{description}</button>
            </li>
        );
    });
    return <ol className="border border-gray-400 bg-gray-200">{steps}</ol>;
}

export default History;
