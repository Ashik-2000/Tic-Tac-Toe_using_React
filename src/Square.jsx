function Square({ value, handleClick, highlight }) {
    return (
        <>
            <button
                className={`m-1 h-12 w-12 border text-xl leading-9 font-bold ${
                highlight
                    ? 'bg-green-400 border-green-600 text-white'
                    : 'bg-gray-100 border-gray-400'
            }`}
                onClick={handleClick}
            >
                {value}
            </button>
        </>
    );
}

export default Square;
