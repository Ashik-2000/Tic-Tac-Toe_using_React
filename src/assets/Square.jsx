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

export default Square;
