function History({ history, jumpTo }) {
    const steps = history.map((squares, step) => {
        let description;
        if (step > 0) {
            description = `Go to step #${step}`;
        } else {
            description = 'Start the Game';
        }
        return (
            <li key={step}>
                <button onClick={() => jumpTo(step)}>{description}</button>
            </li>
        );
    });
    return <ol>{steps}</ol>;
}

export default History;
